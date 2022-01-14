import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntrepriseComponent} from "./components/entreprise/entreprise.component";
import {HomeComponent} from "./components/home/home.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {AideComponent} from "./components/aide/aide.component";
import {StagiaireComponent} from "./components/stagiaire/stagiaire.component";

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
    component: StagiaireComponent
  },
  {
    path: 'aide',
    component: AideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
