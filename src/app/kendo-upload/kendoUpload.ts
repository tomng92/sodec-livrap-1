import {Component, Input, ViewChild} from '@angular/core';
import {MockBackend} from "@angular/http/testing";
import {ResponseOptions, Response} from "@angular/http";

@Component({
  //selector: 'kendo-upload',

  template: `
    Veuillez choisir un ou plusieurs fichier:<br>
  <kendo-upload
    #kendoUploadElement
    [saveUrl]="uploadSaveUrl"
    [removeUrl]="uploadRemoveUrl"
    [multiple]="true"
    [autoUpload]="false"
    (select)="kendoSelectEventHandler($event)"
  ></kendo-upload>
`
})
export class KendoUpload {

  uploadSaveUrl: string = "saveUrl";
  uploadRemoveUrl: string = "removeUrl";
  @ViewChild("kendoUploadElement") kendoUploadElement;

  constructor(private backend: MockBackend) {
    this.backend.connections.subscribe((c: any) => {

      console.log("backend.connections.subscribe( %s )", c.request.url);
      console.log(c);

      if (c.request.url === "saveUrl" || c.request.url === "removeUrl") {

        let responseOptions = new ResponseOptions({status: 200});

        c.mockRespond(new Response(responseOptions));
      }
    });
  }

  kendoSelectEventHandler(event) {
    console.debug( `event file upload ${event}`);

  }

}
