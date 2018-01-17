import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RessourcesComponent} from "../ressources/ressources.component";
import {LoginComponent} from "../login/login.component";

import {NotFoundComponent} from '../not-found/not-found.component';
import {AuthGuard} from "../auth.guard";

const RoutesArray = [
  {
    path: 'ressources',
    component: RessourcesComponent,
    canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: 'edit/:id',
    //     component: RessourcesComponent
    //   }
    // ]
  },
  {
    path: 'ressources/:id',
    component: RessourcesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(RoutesArray)],
  exports: [RouterModule]
})

export class RoutersModule {
}
