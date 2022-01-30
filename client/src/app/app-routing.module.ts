import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntrepriseComponent} from "./components/entreprise/entreprise.component";
import {HomeComponent} from "./components/home/home.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {AideComponent} from "./components/aide/aide.component";
import {StagiaireComponent} from "./components/stagiaire/stagiaire.component";
import {EntrepriseCreationComponent} from "./components/entreprise/entrepriseCreation.component";
import {EntrepriseDetailsComponent} from "./components/entreprise/entrepriseDetails.component";
import {EntrepriseModifyComponent} from "./components/entreprise/entrepriseModify.component";
import {LoginComponent} from "./components/login/login.component";
import {StagiaireCreationComponent} from "./components/stagiaire/stagiaireCreation.component";

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
        path: 'entreprise',
        children: [
            {
                path: '',
                component: EntrepriseComponent,
            },
            {
                path: 'creation',
                component: EntrepriseCreationComponent
            },
            {
                path: ':id',
                component: EntrepriseDetailsComponent
            },
            {
                path: 'modify',
                children: [
                    {
                        path: ':id',
                        component: EntrepriseModifyComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'inscription/creation',
        component: InscriptionComponent
    },
    {
        path: 'stagiaire',
        component: StagiaireComponent
    },
    {
        path: 'stagiaire',
        children: [
            {
                path: '',
                component: StagiaireComponent,
            },
            {
                path: 'creation',
                component: StagiaireCreationComponent,
            }
        ]
    },
    {
        path: 'aide',
        component: AideComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
