import {Component, Input} from '@angular/core';

@Component({
  selector: 'content-component',

  template: `
<div>    <ng-content></ng-content> </div>
`


})
export class ContentComponent {
 }
