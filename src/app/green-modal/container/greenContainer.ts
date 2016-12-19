import {Component, Input} from '@angular/core';

@Component({
  selector: 'green-container',

  template: `
    
   <green-modal>
    
  <content-component *ngIf="isVisible(1)">
   Le contenu 1
  </content-component>
  
  <content-component *ngIf="isVisible(2)" >
   Le contenu 2
  </content-component>
  
  <content-component *ngIf="isVisible(3)">
   <le-kendo-upload></le-kendo-upload>
  </content-component>
  
  <input type="button" (click)="prevWind()" value="<<Previous">
 &nbsp;
 <input type="button" (click)="nextWind()" value="Next>>">
   </green-modal>
`


})
export class GreenContainer {
  currentVisible: number = 1;

  isVisible(wind: number) {
    return this.currentVisible == wind;
  }

  nextWind() {
    this.currentVisible++;
    if (this.currentVisible > 3) {
      this.currentVisible = 1;
    }
  }

  prevWind() {
    this.currentVisible--;
    if (this.currentVisible < 1) {
      this.currentVisible = 3;
    }
  }

}
