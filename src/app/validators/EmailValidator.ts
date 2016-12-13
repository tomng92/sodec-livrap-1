
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { Validator, AbstractControl } from '@angular/forms';

/**
 * Provient de http://stackoverflow.com/questions/34072092/generic-mail-validator-in-angular2#answer-40401602.
 * dec 12 2016
 */
@Directive({
  selector: '[validateEmail][formControlName], [validateEmail][formControl],[validateEmail][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true }
  ]
})
export class EmailValidator implements Validator {

  constructor() {
  }

  validate(c: AbstractControl) {

    // console.log("valideate email !");

    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };


  }}
