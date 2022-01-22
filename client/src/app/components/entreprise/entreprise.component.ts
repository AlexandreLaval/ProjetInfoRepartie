import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {EntrepriseService} from "../../services/entrepriseService";
import {LogInService} from "../../services/loginService";

@Component({
    selector: 'app-entreprise',
    template: `
        <div class="div-margin">
            <h2>Liste des entreprises</h2>
            <div class="ent-table" *ngIf="profUser">
                <button mat-raised-button (click)="addEntreprise()" class="demo-button div-margin">
                    Ajouter une entreprise
                </button>
            </div>
            <table mat-table [dataSource]="entreprises" class="mat-elevation-z8">
                <!-- Opération Column -->
                <ng-container matColumnDef="opération">
                    <th mat-header-cell *matHeaderCellDef>Opération</th>
                    <td mat-cell *matCellDef="let element">
                        <button *ngIf="isProf" mat-icon-button (click)="modifyEntreprise(element.numEntreprise)">
                            <mat-icon>edit</mat-icon>
                        </button>
                        <button *ngIf="isProf"  mat-icon-button (click)="inscrireStagiaire(element.numEntreprise)">
                            <mat-icon>man</mat-icon>
                        </button>
                        <button mat-icon-button (click)="seeEntreprise(element.numEntreprise)">
                            <mat-icon>visibility</mat-icon>
                        </button>
                        <button *ngIf="isProf"  mat-icon-button (click)="deleteEntreprise(element.numEntreprise)">
                            <mat-icon>delete</mat-icon>
                        </button>
                    </td>
                </ng-container>

                <!-- Entreprise Column -->
                <ng-container matColumnDef="entreprise">
                    <th mat-header-cell *matHeaderCellDef>Entreprise</th>
                    <td mat-cell *matCellDef="let element">{{element.raisonSociale}}</td>
                </ng-container>

                <!-- Responsable Column -->
                <ng-container matColumnDef="responsable">
                    <th mat-header-cell *matHeaderCellDef>Responsable</th>
                    <td mat-cell *matCellDef="let element">{{element.nomResp}}</td>
                </ng-container>

                <!-- Adresse Column -->
                <ng-container matColumnDef="adresse">
                    <th mat-header-cell *matHeaderCellDef>Adresse</th>
                    <td mat-cell *matCellDef="let element">{{element.villeEntreprise}}</td>
                </ng-container>

                <!-- Site Column -->
                <ng-container matColumnDef="site">
                    <th mat-header-cell *matHeaderCellDef>Site</th>
                    <td mat-cell *matCellDef="let element">{{element.siteEntreprise}}</td>
                </ng-container>

                <!-- Spécialité Column -->
                <ng-container matColumnDef="spécialité">
                    <th mat-header-cell *matHeaderCellDef>Spécialité</th>
                    <td mat-cell *matCellDef="let element">{{element.niveau}}</td>
                </ng-container>

                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
        </div>
    `,
    styles: [`

        .div-margin {
            margin: 20px;
        }

        table {
            width: 100%;
        }
    `]
})

export class EntrepriseComponent implements OnInit {
    displayedColumns: string[] = ['opération', 'entreprise', 'responsable', 'adresse', 'site', 'spécialité'];
    entreprises: any;
    profUser: boolean = true;
    isProf: boolean = false;

    constructor(private router: Router,
                private entrepriseService: EntrepriseService,
                private loginService: LogInService) {
    }

    ngOnInit() {
        if (!this.loginService.isConnected) {
            this.router.navigate(['login']);
        }
        this.isProf = this.loginService.isProfesseur;
        this.fetchAllEntreprises();
    }

    fetchAllEntreprises() {
        this.entrepriseService.getAllEntreprises().subscribe(entreprises => {
            this.entreprises = entreprises;
        })
    }

    addEntreprise() {
        this.router.navigate(['entreprise', 'creation']);
    }

    seeEntreprise(idEntreprise: number) {
        this.router.navigate(['/entreprise/' + idEntreprise]);
    }

    modifyEntreprise(idEntreprise: number) {
        this.router.navigate(['/entreprise/modify/' + idEntreprise]);
    }

    deleteEntreprise(idEntreprise: number) {
        this.entrepriseService.deleteEntreprise(idEntreprise).subscribe(() => {
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                    this.router.navigate(['/entreprise']);
                });
            },
            error => {
                alert("Erreur lors de la suppression d'une entreprise");
            })
    }

    inscrireStagiaire(idEntreprise: number) {

    }

}
