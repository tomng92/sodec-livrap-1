import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {GithubService} from './github/shared/github.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {MockBackend} from "@angular/http/testing"; // doit [etre avant Http!
import {HttpModule, BaseRequestOptions, Http} from '@angular/http';

import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {SamModal} from './sam-modal/samModal'
import {EmailValidator} from "./validators/EmailValidator";
import {GreenModal} from "./green-modal/green-modal";
import { UploadModule } from '@progress/kendo-angular-upload';
import {KendoUpload} from "./kendo-upload/kendoUpload";



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    SamModal,
    EmailValidator,
    GreenModal,
    KendoUpload
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UploadModule,

   RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],

  providers: [
    GithubService,

    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend, options) => {
        return new Http(backend, options);
      }
    }],

  bootstrap: [AppComponent]
})
export class AppModule {

}
