import {Component, ViewChild, ElementRef} from '@angular/core';
import {SamModal} from "./sam-modal/samModal";
import {UsagerLoginInfo} from "./sam-modal/usager-login-info";
import {GreenModal} from "./green-modal/green-modal";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  greenModalOuvert:boolean = false;
  routerOutletVisible: boolean = false;

  // @ViewChild("samModalWindow") samModalWindow: SamModal;
  @ViewChild("greenModalWindow") greenModalWindow: GreenModal;
  public usager: UsagerLoginInfo = null;
  public usagerEstConnecte: boolean = false;

  openSamModal() {
    //this.samModalWindow.show("");
  }



  toggleGreenModal() {
    // hideRouterOutlet();

    console.log("green modal est : " + this.greenModalOuvert);

    this.greenModalOuvert = !this.greenModalOuvert;

    //this.samModalWindow.hide();


    //this.boutonOuvrirModalVert.nativeElement.innerHTML = this.greenModalOuvert ? "fermer le vert": "ouvrir le modal vert" ;

    // fermer le sam modal windows
  }

  hideRouterOutlet() {
    this.routerOutletVisible = false;
  }
  showRouterOutlet() {
    this.routerOutletVisible = true;
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
