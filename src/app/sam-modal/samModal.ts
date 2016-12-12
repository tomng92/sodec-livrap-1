import {Component} from '@angular/core';
import {UsagerLoginInfo} from "./usager-login-info";

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
  styleUrls: [ './samModal.css']
})
export class SamModal {

  public modelUsager: UsagerLoginInfo; // modèle de la forme
  curMode: ModeEntree = ModeEntree.ModeConnexion;
  paramError: boolean;
  paramLogout: boolean;

  /**
   * la forme
   */
  formCourriel: string;
  formNeq: string;
  formMotDePasse: string;


  private ErrorMsg: string;
  private windowVisible: boolean;

  /**
   *
   * @param msg
   */
  show(msg: string) {
    this.ErrorMsg = msg;
    this.windowVisible = true;
  }

  onSubmit(forme: any) {
    console.log(`submit ${forme}`);
    console.log(`${this.formNeq} ${forme}`);
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


