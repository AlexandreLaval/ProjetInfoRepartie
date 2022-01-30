import {Component, OnInit} from "@angular/core";
import {LogInService} from "../../services/loginService";
import {Router} from "@angular/router";
import {Stage} from "../../models/stage";
import {StageService} from "../../services/stageService";
import {EntrepriseService} from "../../services/entrepriseService";
import {TypeStage} from "../../enums/typeStage";
import {ProfesseurService} from "../../services/professeurService";
import {EtudiantService} from "../../services/etudiantService";

@Component({
    selector: 'app-inscription',
    template: `
        <form class="div-margin" *ngIf="creationForm">
            <div>
                <h2>Contact</h2>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Entreprise</mat-label>
                    <mat-select [(value)]="this.stage.numEntreprise">
                        <mat-option *ngFor="let entreprise of entreprises"
                                    [value]="entreprise">{{entreprise.raisonSociale}}</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Etudiant</mat-label>
                    <mat-select [(value)]="this.stage.numEtudiant">
                        <mat-option *ngFor="let etudiant of etudiants"
                                    [value]="etudiant">{{etudiant.prenomEtudiant + " " + etudiant.nomEtudiant}}</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Professeur</mat-label>
                    <mat-select [(value)]="this.stage.numProf">
                        <mat-option *ngFor="let professeur of professeurs"
                                    [value]="professeur">{{professeur.prenomProf + " " + professeur.nomProf}}</mat-option>
                    </mat-select>
                </mat-form-field>

            </div>
            <div>
                <h2>Description du stage</h2>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Date de début du stage</mat-label>
                    <input matInput [matDatepicker]="pickerDebut" [ngModelOptions]="{standalone: true}"
                           [(ngModel)]="stage.debutStage">
                    <mat-datepicker-toggle matSuffix [for]="pickerDebut"></mat-datepicker-toggle>
                    <mat-datepicker #pickerDebut></mat-datepicker>
                </mat-form-field>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Date de fin du stage</mat-label>
                    <input matInput [matDatepicker]="pickerEnd" [ngModelOptions]="{standalone: true}"
                           [(ngModel)]="stage.finStage">
                    <mat-datepicker-toggle matSuffix [for]="pickerEnd"></mat-datepicker-toggle>
                    <mat-datepicker #pickerEnd></mat-datepicker>
                </mat-form-field>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Type de stage</mat-label>
                    <mat-select [(value)]="this.stage.typeStage">
                        <mat-option *ngFor="let typeStage of typesStage" [value]="typeStage">{{typeStage}}</mat-option>
                    </mat-select>
                </mat-form-field>
                <br>
                <mat-form-field appearance="fill" class="inscription-form-field">
                    <mat-label>Description</mat-label>
                    <textarea matInput placeholder="Description" [ngModelOptions]="{standalone: true}"
                              [(ngModel)]="stage.descProjet"></textarea>
                </mat-form-field>
                <br>
                <mat-form-field appearance="fill" class="inscription-form-field observation">
                    <mat-label>Observation</mat-label>
                    <textarea matInput placeholder="Observation" [ngModelOptions]="{standalone: true}"
                              [(ngModel)]="stage.observation"></textarea>
                </mat-form-field>
            </div>
        </form>

        <button mat-flat-button class="btn-validate div-margin" color="primary" (click)="onSubmit()">Ajouter</button>
    `,
    styles: [`

        .div-margin {
            margin-top: 10px;
            margin-left: 20px;
        }

        .inscription-form-field {
            margin-right: 8px;
            position: relative;
            width: 300px;
        }
    `]
})

export class InscriptionComponent implements OnInit {
    creationForm: boolean = true;
    idEntreprise: number = 0;
    stage: Stage = {
        numStage: undefined,
        debutStage: '',
        finStage: '',
        typeStage: '',
        descProjet: '',
        observationStage: '',
        observation: ''
    }

    entreprises: any;
    etudiants: any;
    professeurs: any;
    public typesStage = Object.values(TypeStage);

    constructor(private loginService: LogInService,
                public stageServicee: StageService,
                public entrepriseService: EntrepriseService,
                public professeurService: ProfesseurService,
                public etudiantService: EtudiantService,
                private router: Router) {
    }

    ngOnInit() {
        if (!this.loginService.isConnected) {
            this.router.navigate(['login']);
        }
        this.entrepriseService.getAllEntreprises().subscribe(entreprises => {
            this.entreprises = entreprises;
        })
        this.professeurService.getAllProfesseur().subscribe(professeurs => {
            this.professeurs = professeurs;
        })
        this.etudiantService.getAllEtudiant().subscribe(etudiants => {
            this.etudiants = etudiants;
        })
    }

    isFormValid(): boolean {
        switch ('') {
            case this.stage.debutStage:
                return false;
            case this.stage.finStage:
                return false;
            case this.stage.typeStage:
                return false;
        }
        return !(this.stage.numEtudiant === undefined ||
            this.stage.numProf === undefined ||
            this.stage.numEntreprise === undefined);
    }

    onSubmit() {
        if (this.isFormValid()) {
            this.stageServicee.createStage(this.stage).subscribe((response) => {
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
        // @ts-ignore
        if ("numEntreprise" in this.stage.numEntreprise) {
            this.router.navigate(['/entreprise/' + this.stage.numEntreprise.numEntreprise]);
        }
    }
}
