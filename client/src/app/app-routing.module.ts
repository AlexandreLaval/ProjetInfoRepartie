import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntrepriseComponent} from "./components/entreprise/entreprise.component";

const routes: Routes = [
  {
    path: 'entreprise',
    component: EntrepriseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
