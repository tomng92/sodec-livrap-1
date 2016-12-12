import {Component, ViewChild} from '@angular/core';
import {SamModal} from "./sam-modal/samModal";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("modalWindow") modalWindow: SamModal;

  openModal() {
    this.modalWindow.show("Hello!! Sam");
    console.log(`openModal.... invoked!`)
  }


}
