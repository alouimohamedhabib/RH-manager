import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RessourcesComponent} from "../ressources/ressources.component";
import {NotFoundComponent} from '../not-found/not-found.component';

const RoutesArray = [
    {
    path: 'ressources',
    component: RessourcesComponent
  },
  {
    path: 'ressources/:id',
    component: RessourcesComponent
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
