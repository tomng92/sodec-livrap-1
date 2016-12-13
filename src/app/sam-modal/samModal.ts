import {Component, Output, EventEmitter} from '@angular/core';
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
  styleUrls: ['./samModal.css']
})
export class SamModal {

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


