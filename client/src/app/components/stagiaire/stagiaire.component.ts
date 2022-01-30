import {Component, OnInit} from "@angular/core";
import {LogInService} from "../../services/loginService";
import {Router} from "@angular/router";
import {EtudiantService} from "../../services/etudiantService";
import {ProfesseurService} from "../../services/professeurService";
import {EntrepriseService} from "../../services/entrepriseService";
import {ProfClasseService} from "../../services/profClasseService";
import {Entreprise} from "../../models/entreprise";
import {ProfClasse} from "../../models/profClasse";
import {Etudiant} from "../../models/etudiant";
import {Professeur} from "../../models/professeur";
import {Stage} from "../../models/stage";
import {StageService} from "../../services/stageService";

@Component({
    selector: 'app-stagiaire',
    template: `
        <div class="div-margin">
            <h2>Liste des etudiants</h2>
            <div class="ent-table" *ngIf="isProf">
                <button mat-raised-button (click)="addEtudiant()" class="demo-button div-margin">
                    Ajouter un étudiant
                </button>
            </div>
            <table mat-table [dataSource]="etudiants" class="mat-elevation-z8">
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
                    <td mat-cell *matCellDef="let element">{{element.raisonSociale}}</td>
                </ng-container>

                <!-- Professor Column -->
                <ng-container matColumnDef="classe">
                    <th mat-header-cell *matHeaderCellDef>Classe</th>
                    <td mat-cell
                        *matCellDef="let element">{{element.numClasse.nomClasse}}</td>
                </ng-container>

                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
        </div>`,
    styles: [`

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
    professeurs: Professeur[] = [];
    services: any;
    profClasses: ProfClasse[] = [];
    entreprises: Entreprise[] = [];
    stages: Stage[] = [];
    displayedColumns: string[] = ['opération', 'etudiant', 'entreprise', 'classe'];

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
        });
        this.professeurService.getAllProfesseur().subscribe(professeurs => {
            this.professeurs = professeurs;
        });
        this.profClasseService.getAllClasses().subscribe(profClasses => {
            this.profClasses = profClasses;
        });
        this.entrepriseService.getAllEntreprises().subscribe(ent => {
            this.entreprises = ent;

        });
        this.stageService.getAllStage().subscribe(stages => {
            this.stages = stages;
        });
    }

    matchEtudiantsEntreprisesProfs() {
        for (const etu of this.etudiants) {
            // @ts-ignore
            let stage = this.stages.find(stages => stages.numEtudiant.numEtudiant === etu.numEtudiant);
            let entreprise;
            if (stage !== undefined) {
                // @ts-ignore
                entreprise = this.entreprises.find(ents => ents.numEntreprise === stage.numEntreprise?.numEntreprise);
            }

        }
    }

    fetchAllEtudiant() {

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
}
