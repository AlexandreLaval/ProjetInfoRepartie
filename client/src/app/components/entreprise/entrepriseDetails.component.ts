import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../../services/entrepriseService";
import {StageService} from "../../services/stageService";
import {SpecialiteService} from "../../services/specialiteService";
import {SpecEntrepriseService} from "../../services/specEntrepriseService";
import {Specialite} from "../../models/specialite";
import {SpecEntreprise} from "../../models/specEntreprise";

@Component({
    selector: 'app-entreprise-detail',
    template: `
        <button mat-flat-button class="but-detail" color="primary" (click)="cancel()">Retour</button>
        <mat-card class="card-ent">
            <mat-card-title>Informations</mat-card-title>
            <mat-card-content>
                <td>Nom entreprise : {{this.entreprise.raisonSociale}}</td>
                <br>
                <td>Nom du contact : {{this.entreprise.nomContact}}</td>
                <br>
                <td>Nom du responsable : {{this.entreprise.nomResp}}</td>
                <br>
            </mat-card-content>
        </mat-card>
        <mat-card class="card-ent">
            <mat-card-title>Divers</mat-card-title>
            <mat-card-content>
                <td>Observation : {{this.entreprise.observation}}</td>
                <br>
                <td>Url du site : {{this.entreprise.siteEntreprise}}</td>
                <br>
                <td>Niveau : {{this.entreprise.niveau}}</td>
                <br>
                <td>Spécialité : {{this.specialite}}</td>
                <br>
            </mat-card-content>
        </mat-card>
        <mat-card class="card-ent">
            <mat-card-title>Contact</mat-card-title>
            <mat-card-content>
                <td>Rue : {{this.entreprise.rueEntreprise}}</td>
                <br>
                <td>Code Postal : {{this.entreprise.cpEntreprise}}</td>
                <br>
                <td>Ville : {{this.entreprise.villeEntreprise}}</td>
                <br>
                <td>Téléphone : {{this.entreprise.telEntreprise}}</td>
                <br>
                <td>Fax : {{this.entreprise.faxEntreprise}}</td>
                <br>
                <td>Email : {{this.entreprise.email}}</td>
                <br>
            </mat-card-content>
        </mat-card>
        <h2 class="but-detail">Stage</h2>
        <table mat-table [dataSource]="stages" class="mat-elevation-z8">
            <!-- Opération Column -->
            <ng-container matColumnDef="opération">
                <th mat-header-cell *matHeaderCellDef>Opération</th>
                <td mat-cell *matCellDef="let element">
                    <button *ngIf="isProf" mat-icon-button>
                        <mat-icon>edit</mat-icon>
                    </button>
                    <button *ngIf="isProf" mat-icon-button>
                        <mat-icon>delete</mat-icon>
                    </button>
                </td>
            </ng-container>

            <!-- Etudiant Column -->
            <ng-container matColumnDef="etudiant">
                <th mat-header-cell *matHeaderCellDef>Etudiant</th>
                <td mat-cell
                    *matCellDef="let element">{{element.numEtudiant.prenomEtudiant + " " + element.numEtudiant.nomEtudiant}}</td>
            </ng-container>

            <!-- Projet Column -->
            <ng-container matColumnDef="projet">
                <th mat-header-cell *matHeaderCellDef>Projet</th>
                <td mat-cell *matCellDef="let element">{{element.descProjet}}</td>
            </ng-container>


            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
    `,
    styles: [`
        .card-ent {
            margin: 20px;
            width: 400px;
        }

        .but-detail {
            margin: 20px;
        }

        table {
            width: 100%;
        }
    `]
})
export class EntrepriseDetailsComponent implements OnInit {
    displayedColumns: string[] = ['opération', 'etudiant', 'projet'];

    isModifying: boolean = false;
    idEnt: number = 0;
    entreprise: any;
    isProf: boolean = true;
    stages: any;
    specialite: string = "";

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private entrepriseService: EntrepriseService,
                public stageService: StageService,
                public specialiteService: SpecialiteService,
                public specEntrepriseService: SpecEntrepriseService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.idEnt = +params['id'];
        });
        this.entrepriseService.getEntreprise(this.idEnt).subscribe(ent => {
            this.entreprise = ent;
        });
        this.stageService.getStagesByNumEntreprise(this.idEnt).subscribe(stages => {
            this.stages = stages;
        })
        this.specEntrepriseService.getSpecEntreprisesFromNumEntreprise(this.idEnt).subscribe(specEntreprise => {
            specEntreprise.forEach(spec => {
                this.specialiteService.getSpecialiteFromNumSpec(spec.numSpec).subscribe(s => {
                    this.specialite = s.libelle;
                })
            })
        })
    }

    cancel() {
        this.router.navigate(['entreprise']);
    }
}