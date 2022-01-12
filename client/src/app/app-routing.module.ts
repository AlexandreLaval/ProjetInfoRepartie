import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntrepriseComponent} from "./components/entreprise/entreprise.component";
import {HomeComponent} from "./components/home/home.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'entreprise',
    component: EntrepriseComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'stagiaire',
    component: InscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
