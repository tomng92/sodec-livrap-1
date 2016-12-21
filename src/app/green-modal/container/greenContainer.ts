import {Component, Input, trigger, state, style, transition, animate, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'green-container',
  templateUrl: './greenContainer.html',

  /**
   * All state have opacity 1
   */
  animations: [
    trigger('monSignalAnim', [
      state('etat-1', style({
        'opacity': 1
        }
      )),
      state('etat-2', style({
        'opacity': 1
        }
      )),
      state('etat-3', style({
        'opacity': 1
        }
      )),
      state('etat-VOID', style({
          'opacity': 0
        }
      )),

      transition("* => *", animate(500))

    ])
  ]


})
export class GreenContainer implements OnInit {
  monSignalAnim: string;
  currentVisible: number = 1;
  timer:any;

  ngOnInit() {
    this.setCurrentVisible(1);
  }

  isVisible(wind: number) {
    return this.currentVisible == wind;
  }

  nextWind() {
    this.setCurrentVisible(this.currentVisible + 1);
    if (this.currentVisible > 3) {
      this.currentVisible = 1;
    }
  }

  prevWind() {
    this.setCurrentVisible(this.currentVisible -1);
    if (this.currentVisible < 1) {
      this.currentVisible = 3;
    }
  }

  private setCurrentVisible(cur: number) {
    this.monSignalAnim = 'etat-VOID';
    this.timer = Observable.timer(400).take(1);
    this.timer.subscribe(t => this.doTheRealEtat(cur));
  }

  doTheRealEtat(cur: number) {
    this.currentVisible = cur;
    this.monSignalAnim = 'etat-' + cur;

    // if (this.timer) {
    //   this.timer.uns;
    // }
  }
}
