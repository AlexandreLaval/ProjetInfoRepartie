import {LogInService} from "../../services/loginService";
import {Router} from "@angular/router";
import {Component} from "@angular/core";
import {Etudiant} from "../../models/etudiant";
import {EtudiantService} from "../../services/etudiantService";

@Component({
    selector: 'app-stagiaire-creation',
    template: `
    <div class="div-margin">
      <div>
        <h2>Information concernant l'étudiant</h2>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Nom</mat-label>
          <input  matInput placeholder="Nom" [(ngModel)]="etudiant.nomEtudiant">
        </mat-form-field>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Prénom</mat-label>
          <input  matInput placeholder="Prénom" [(ngModel)]="etudiant.prenomEtudiant">
        </mat-form-field>
        <br>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Nom d'utilisateur (8 caractères)</mat-label>
          <input  matInput placeholder="Nom d'utilisateur" [(ngModel)]="etudiant.login">
        </mat-form-field>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Mot de passe (entre 8 et 30 caractères)</mat-label>
          <input  matInput placeholder="Mot de Passe" [(ngModel)]="etudiant.mdp">
        </mat-form-field>
        <br>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Date d'obtention du BTS (AAAA-MM-JJ)</mat-label>
          <input matInput [matDatepicker]="picker" [(ngModel)]="etudiant.anneeObtention">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
        <br>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Classe</mat-label>
          <mat-select>
            <mat-option value="option">Option</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
        <button mat-flat-button class="btn-validate" color="primary" (click)="cancel()">Retour</button>
        <button mat-flat-button class="btn-validate" color="primary" (click)="onSubmit()">Ajouter</button>
    </div>
  `,
    styles: [`
        
    :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        }
        
    .div-margin {
      margin-top: 10px;
      margin-left: 20px;
    }

    .stag-form-field {
      margin-right: 8px;
      position: relative;
      width: 300px;
    }

    .btn-validate {
       float: right;
       margin-left: 5px;
    }
  `]

})

export class StagiaireCreationComponent {
    creationForm: boolean = true;
    etudiant: Etudiant = {
        nomEtudiant: '',
        prenomEtudiant: '',
        login: '',
        mdp: '',
        anneeObtention: new Date(),
        enActivite:1,
        numEtudiant: undefined,
        numClasse:"AM1",
    };

    constructor(private loginService: LogInService,
                private router: Router,
                private etudiantService: EtudiantService) {
    }

    isFormValid(): boolean {
        switch ('') {
            case this.etudiant.nomEtudiant:
                return false;
            case this.etudiant.prenomEtudiant:
                return false;
            case this.etudiant.login:
                return false;
            case this.etudiant.mdp:
                return false;
        }
        if(this.etudiant.anneeObtention == null)
            return false;
        return true;
    }

    onSubmit() {
        if (this.isFormValid()) {
            this.etudiantService.createEtudiant(this.etudiant).subscribe((response) => {
                    this.cancel();
                },
                (error) => {
                    alert("Erreur - Merci de vérifier que tous les champs soient remplis correctement");
                });
        } else {
            alert("Erreur - Merci de vérifier que tous les champs soient remplis correctement");
        }
    }

    cancel() {
        this.router.navigate(['stagiaire']);
    }

}