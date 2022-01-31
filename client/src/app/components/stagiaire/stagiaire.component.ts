import {Component, OnInit} from "@angular/core";
import {LogInService} from "../../services/loginService";
import {Router} from "@angular/router";
import {EtudiantService} from "../../services/etudiantService";
import {ProfesseurService} from "../../services/professeurService";
import {EntrepriseService} from "../../services/entrepriseService";
import {ProfClasseService} from "../../services/profClasseService";
import {Entreprise} from "../../models/entreprise";
import {Etudiant} from "../../models/etudiant";
import {Professeur} from "../../models/professeur";
import {Stage} from "../../models/stage";
import {StageService} from "../../services/stageService";

@Component({
    selector: 'app-stagiaire',
    template: `
        <div class="div-margin">
            <h2>Liste des etudiants</h2>
            <div class="block" *ngIf="isProf">
                <button mat-raised-button (click)="addEtudiant()" class="demo-button div-margin">
                    Ajouter un étudiant
                </button>
            </div>
            <div class="block">
                <mat-form-field class="example-form-field" appearance="fill">
                    <mat-label>Rechercher un étudiant</mat-label>
                    <input matInput (change)="rechercherEtudiant($event)" placeholder="Rechercher">
                </mat-form-field>
            </div>

            <table mat-table [dataSource]="etudiantsShow" class="mat-elevation-z8">
                <!-- Opération Column -->
                <ng-container matColumnDef="opération">
                    <th mat-header-cell *matHeaderCellDef>Opération</th>
                    <td mat-cell *matCellDef="let element">
                        <button *ngIf="isProf" mat-icon-button (click)="modifyEtudiant(element.numEtudiant)">
                            <mat-icon>edit</mat-icon>
                        </button>
                        <button mat-icon-button (click)="seeEtudiant(element.numEtudiant)">
                            <mat-icon>visibility</mat-icon>
                        </button>
                        <button *ngIf="isProf" mat-icon-button (click)="deleteEtudiant(element.numEtudiant)">
                            <mat-icon>delete</mat-icon>
                        </button>
                    </td>
                </ng-container>

                <!-- Stagiaire Column -->
                <ng-container matColumnDef="etudiant">
                    <th mat-header-cell *matHeaderCellDef>Etudiant</th>
                    <td mat-cell
                        *matCellDef="let element">{{element.prenomEtudiant + " " + element.nomEtudiant}}</td>
                </ng-container>

                <!-- Entreprise Column -->
                <ng-container matColumnDef="entreprise">
                    <th mat-header-cell *matHeaderCellDef>Entreprise</th>
                    <td mat-cell *matCellDef="let element">{{getEntrepriseRaisonSociale(element.numEtudiant)}}</td>
                </ng-container>

                <!-- Professor Column -->
                <ng-container matColumnDef="professeur">
                    <th mat-header-cell *matHeaderCellDef>Professeur</th>
                    <td mat-cell
                        *matCellDef="let element">{{getProfesseurName(element.numEtudiant)}}</td>
                </ng-container>

                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
        </div>`,
    styles: [`
        .block {
            display: inline-block;
            float: left;
            text-align: center;
        }

        .div-margin {
            margin: 20px;
        }

        table {
            width: 100%;
        }
    `]
})

export class StagiaireComponent implements OnInit {
    creationForm: boolean = true;
    isProf: boolean = false;
    etudiants: Etudiant[] = [];
    etudiantsShow: Etudiant[] = [];
    professeurs: Professeur[] = [];
    services: any;
    entreprises: Entreprise[] = [];
    stages: Stage[] = [];
    displayedColumns: string[] = ['opération', 'etudiant', 'entreprise', 'professeur'];

    constructor(private loginService: LogInService,
                private etudiantService: EtudiantService,
                private professeurService: ProfesseurService,
                private entrepriseService: EntrepriseService,
                private profClasseService: ProfClasseService,
                private stageService: StageService,
                private router: Router) {
    }

    ngOnInit() {
        if (!this.loginService.isConnected) {
            this.router.navigate(['login']);
        }
        this.isProf = this.loginService.isProfesseur;
        this.etudiantService.getAllEtudiant().subscribe(etudiants => {
            this.etudiants = etudiants;
            this.etudiantsShow = etudiants;
        });
        this.professeurService.getAllProfesseur().subscribe(professeurs => {
            this.professeurs = professeurs;
        });
        this.entrepriseService.getAllEntreprises().subscribe(ent => {
            this.entreprises = ent;
        });
        this.stageService.getAllStage().subscribe(stages => {
            this.stages = stages;
        });
    }


    getEntrepriseRaisonSociale(numEtudiant: number) {
        let entId = this.stages.find(stage => stage.numEtudiant?.numEtudiant == numEtudiant)?.numEntreprise?.numEntreprise;
        if (entId == null)
            return "";
        return this.entreprises.find(ent => ent.numEntreprise == entId)?.raisonSociale;
    }

    getProfesseurName(numEtudiant: number) {
        let profId = this.stages.find(stage => stage.numEtudiant?.numEtudiant == numEtudiant)?.numProf?.numProf;
        if (profId == null)
            return "";
        return this.professeurs.find(prof => prof.numProf == profId)?.nomProf + " "
            + this.professeurs.find(prof => prof.numProf == profId)?.prenomProf;
    }

    addEtudiant() {
        this.router.navigate(['stagiaire', 'creation']);
    }

    modifyEtudiant(idEtudiant: number) {
        this.router.navigate(['/stagiaire/modify/' + idEtudiant]);
    }

    seeEtudiant(idEtudiant: number) {
        this.router.navigate(['/stagiaire/' + idEtudiant]);
    }

    deleteEtudiant(idEtudiant: number) {
        this.etudiantService.deleteEtudiant(idEtudiant).subscribe(() => {
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                    this.router.navigate(['/stagiaire']);
                });
            },
            error => {
                alert("Erreur lors de la suppression d'un etudiant");
            })
    }

    rechercherEtudiant(event: Event) {
        this.etudiantsShow = []
        let recherche = (event.target as HTMLInputElement).value;
        this.etudiants.forEach(value => {
            if (value.prenomEtudiant.toLowerCase().startsWith(recherche.toLowerCase(), 0) ||
                value.nomEtudiant.toLowerCase().startsWith(recherche.toLowerCase(), 0)) {
                this.etudiantsShow.push(value)
            }
        });
    }
}
