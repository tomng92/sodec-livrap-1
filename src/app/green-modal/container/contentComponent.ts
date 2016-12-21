import {Component, Input} from '@angular/core';

/**
 *
 */
@Component({
  selector: 'content-component',

  template: `

    <div style="text-align:center;background-color: #888888;">   
        <h3> {{leTitre}}</h3>
    </div>

    <div>   
        <ng-content></ng-content>
    </div>
`


})
export class ContentComponent {
  @Input() leTitre: string;

 }
