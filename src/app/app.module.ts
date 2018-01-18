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

import {ReactiveFormsModule, FormsModule, NgForm} from '@angular/forms';
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './login/login.component';
import {UsersService} from "./users.service";
import {HeroDetailComponent} from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RessourcesComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    HeroDetailComponent,


  ],
  imports: [
    BrowserModule,
    RoutersModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpModule, NgForm, AuthGuard, AuthService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
