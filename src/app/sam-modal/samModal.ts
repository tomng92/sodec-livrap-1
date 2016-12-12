import {Component} from '@angular/core';
import {UsagerLoginInfo} from "./usager-login-info";

enum ModeEntree {
  ModeConnexion, ModeEnregistrement;
}

@Component({
  selector: 'sam-modal',
  // templateUrl: './samModal.html',
 templateUrl: './connexion.html',
})
export class SamModal {
  usagerInfo: UsagerLoginInfo;
  curMode: ModeEntree = ModeConnexion;
  paramError : boolean;
  paramLogout: boolean;

  private ErrorMsg: string;
  public windowVisible: boolean;

  /**
   *
   * @param msg
   */
  show(msg: string) {
    this.ErrorMsg = msg;
    this.windowVisible = true;
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
    this.curMode = (this.curMode == ModeEntree.ModeConnexion ? ModeEntree.ModeEnregistrement : ModeEntree.ModeConnexion;
  }
}


