import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {StagiaireComponent} from "./components/stagiaire/stagiaire.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";
import {EntrepriseComponent} from "./components/entreprise/entreprise.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {AideComponent} from "./components/aide/aide.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {EntrepriseCreationComponent} from "./components/entreprise/entrepriseCreation.component";
import {HttpClientModule} from "@angular/common/http";
import {EntrepriseDetailsComponent} from "./components/entreprise/entrepriseDetails.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSortModule} from "@angular/material/sort";
import {EntrepriseModifyComponent} from "./components/entreprise/entrepriseModify.component";
import {LoginComponent} from "./components/login/login.component";
import {MatRadioModule} from "@angular/material/radio";
import {StagiaireCreationComponent} from "./components/stagiaire/stagiaireCreation.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        StagiaireComponent,
        StagiaireCreationComponent,
        InscriptionComponent,
        EntrepriseComponent,
        EntrepriseCreationComponent,
        EntrepriseDetailsComponent,
        EntrepriseModifyComponent,
        AideComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        HttpClientModule,
        FormsModule,
        MatSortModule,
        ReactiveFormsModule,
        MatRadioModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
