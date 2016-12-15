import {Component, Output, EventEmitter, ViewChild, AfterViewInit} from '@angular/core';
import {UsagerLoginInfo} from "./usager-login-info";
import 'rxjs/add/observable/combineLatest';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import {VALID} from "@angular/forms/src/model";

/**
 * Login ou enregistrement de l'usager.
 */
enum ModeEntree {
  ModeConnexion, ModeEnregistrement
}

@Component({
  selector: 'sam-modal',
  // templateUrl: './samModal.html',
  templateUrl: './connexion.html',
  styleUrls: ['./samModal.css']
})
export class SamModal implements AfterViewInit {

  @ViewChild("maForme") maForme;

  ngAfterViewInit() {

    console.log(this.maForme);

    // this.maForme.valueChanges().subscribe(v => console.table(v));
    //
    // Observable.combineLatest(
    //   this.maForme.valueChanges,
    //   this.maForme.statusChanges,
    //   status, value => ({status, value}))
    //   .filter(({status}) => status === VALID)
    //   .subscribe(({status, value}) => console.log(`status = ${status} - value = ${value}`)
    //   );
  }


  curMode: ModeEntree = ModeEntree.ModeConnexion;
  paramError: boolean;
  paramLogout: boolean;

  estConnecte: false;

  /**
   * la forme
   */
  formCourriel: string;
  formNeq: string;
  formMotDePasse: string;


  private ErrorMsg: string;
  private windowVisible: boolean;

  @Output() surConnexionEvent = new EventEmitter<UsagerLoginInfo>(); // si usager s'est connecté

  /**
   *
   * @param msg
   */
  show(msg: string) {
    this.ErrorMsg = msg;
    this.windowVisible = true;
  }


  /**
   * Soumission de la forme de login.
   * @param forme
   */
  onSubmit(forme: any) {

    this.surConnexionEvent.emit(new UsagerLoginInfo(this.formCourriel, this.formNeq));

    this.hide();
  }

  /**
   *
   */
  hide() {
    this.windowVisible = false;
  }

  /**
   * Usager clique sur "Créer un compte"
   * .
   */
  changerMode() {
    this.curMode = (this.curMode == ModeEntree.ModeConnexion ? ModeEntree.ModeEnregistrement : ModeEntree.ModeConnexion);
  }
}


