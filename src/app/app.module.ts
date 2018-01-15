import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Router} from '@angular/router';
import {RoutersModule} from './routers/routers.component';
import {RessourcesComponent} from './ressources/ressources.component';
import {FooterComponent} from './footer/footer.component';
import {HttpModule} from "@angular/http";
import {NavbarComponent} from './navbar/navbar.component';
import {CommonModule} from "@angular/common";
import {NotFoundComponent} from './not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModel} from './material.model';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RessourcesComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    RoutersModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModel ,
    FormsModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
