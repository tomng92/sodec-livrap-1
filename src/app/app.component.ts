import {Component, ViewChild} from '@angular/core';
import {SamModal} from "./sam-modal/samModal";
import {UsagerLoginInfo} from "./sam-modal/usager-login-info";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("modalWindow") modalWindow: SamModal;
  public usager: UsagerLoginInfo = null;
  public usagerEstConnecte: boolean = false;

  openModal() {
    this.modalWindow.show("");
  }

  /**
   * Fonction invoqué quand usager s'est bienconnecté.
   * @param event
   */
  surConnexion(event) {
    let u = <UsagerLoginInfo> event;
    console.log(`usager event recu ${u.neq}`);
    this.usager = u;
    this.usagerEstConnecte = true;
  }

}
