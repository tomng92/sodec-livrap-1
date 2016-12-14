import {Injectable} from '@angular/core';

import {Http, Response} from "@angular/http";
//import {ConfigElem} from "../edit-detail-dialog/config-elem";
import {Observable}     from 'rxjs/Observable';
import {UsagerLoginInfo} from "../sam-modal/usager-login-info";


/**
 * *
 *
 */
export class Pays {
  constructor(public name: string, public population: number) {
  };
}

/**
 *
 */
export class ConfigElem {

  completed: boolean;

  constructor(public repertoire: string, public value: string) {
    this.completed = false;
  };
}

/**
 * Web service.....
 * https://angular.io/docs/ts/latest/guide/server-communication.html#fetch-data-with-http-get
 *
 */
@Injectable()
export class ConfigService {

  private accessUrl = 'api/configs';  // URL to web api

  constructor(private http: Http) {
  }


  /**
   * Invoke web service et retourne liste de pays
   * @param region  Par exemple 'asia', 'africa', etc.
   */
  getCountries(region: string): Observable<Pays[]> {
    const url = `https://restcountries.eu/rest/v1/region/${region}`;
    return this.http.get(url)
      .map(this.extractPays)
      .catch(this.handleError)
  }

  /**
   *
   * @param str
   * @returns {Pays[]|Array}
   */
  private  extractPays(res: Response) : Pays[] {
  let body = res.json();

  console.log(body);
  let arr: Pays[] = [];

  for(let p in body){

    //let p : any = item;

    let pays : Pays = new Pays( body[p].name, body[p].population);
    arr.push(pays);
    console.log(`p pays ajouté => ${pays.name} de ${p}`);
  }

  return arr || [];
}



  /**
   * Demande bonjour pour tester...
   */
  getBonjour(): Observable<String> {
    return this.http.get(this.accessUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }

  /**
   * Fonction de login.
   */
  getLogin(usager: UsagerLoginInfo): Observable<string> {
    const url = `${this.accessUrl}/courriel=${usager.courriel}&neq=${usager.neq}`;
    return this.http.get(this.accessUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }

  /**
   * Retourne tous les configs.
   * @returns {Promise<Promise<any>>|Promise<R>|Observable<R>|webdriver.promise.Promise<R>}
   */
  getAllConfig(): Observable<ConfigElem[]> {
    return this.http.get(this.accessUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }


  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
