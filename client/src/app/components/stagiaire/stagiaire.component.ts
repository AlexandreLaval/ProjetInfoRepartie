import {Component} from "@angular/core";
import {LogInService} from "../../services/loginService";
import {Router} from "@angular/router";
import {EtudiantService} from "../../services/etudiantService";
import {ProfesseurService} from "../../services/professeurService";
import {EntrepriseService} from "../../services/entrepriseService";

@Component({
  selector: 'app-stagiaire',
  template: `
    <div class="div-margin">
      <h2>Liste des stagiaires</h2>
      <div class="ent-table" *ngIf="isProf">
        <button mat-raised-button (click)="addEtudiant()" class="demo-button div-margin">
          Ajouter un stagiaire
        </button>
      </div>
      <table mat-table [dataSource]="etudiants" class="mat-elevation-z8">
        <!-- Opération Column -->
        <ng-container matColumnDef="opération">
          <th mat-header-cell *matHeaderCellDef>Opération</th>
          <td mat-cell *matCellDef="let element">
            <button *ngIf="isProf" mat-icon-button (click)="modifyEtudiant(element.numStagiaire)">
              <mat-icon>edit</mat-icon>
            </button>
            <!--<button *ngIf="isProf"  mat-icon-button (click)="inscrireStagiaire(element.numStagiaire)">
              <mat-icon>man</mat-icon>
            </button>-->
            <button mat-icon-button (click)="seeEtudiant(element.numStagiaire)">
              <mat-icon>visibility</mat-icon>
            </button>
            <button *ngIf="isProf"  mat-icon-button (click)="deleteEtudiant(element.numStagiaire)">
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </ng-container>

        <!-- Stagiaire Column -->
        <ng-container matColumnDef="etudiant">
          <th mat-header-cell *matHeaderCellDef>Etudiant</th>
          <td mat-cell *matCellDef="let element">{{element.prenomEtudiant + element.nomEtudiant}}</td>
        </ng-container>

        <!-- Entreprise Column -->
        <ng-container matColumnDef="entreprise">
          <th mat-header-cell *matHeaderCellDef>Entreprise</th>
          <td mat-cell *matCellDef="let element">{{element.raisonSociale}}</td>
        </ng-container>

        <!-- Professor Column -->
        <ng-container matColumnDef="professeur">
          <th mat-header-cell *matHeaderCellDef>Professeur</th>
          <td mat-cell *matCellDef="let element">{{element.nomProf}}</td>
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

export class StagiaireComponent {
  creationForm: boolean = true;
  isProf: boolean = false;
  etudiants: any;
  professeurs: any;
  services:any;
  displayedColumns: string[] = ['opération', 'etudiant', 'entreprise', 'professeur'];

  constructor(private loginService: LogInService,
              private etudiantService: EtudiantService,
              private professeurService: ProfesseurService,
              private entrepriseService: EntrepriseService,
              private router: Router) {
  }

  ngOnInit() {
    if (!this.loginService.isConnected) {
      this.router.navigate(['login']);
    }
    this.isProf = this.loginService.isProfesseur;
    this.fetchAllEtudiant();
    this.professeurService.getAllProfesseur().subscribe(professeurs =>{
      this.professeurs = professeurs;
    });

  }

  fetchAllEtudiant() {
    this.etudiantService.getAllEtudiant().subscribe(etudiants => {
      this.etudiants = etudiants;
    })
  }

  addEtudiant() {
    this.router.navigate(['stagiaire', 'creation']);
  }

  modifyEtudiant(idStagiaire: number) {
    this.router.navigate(['/stagiaire/modify/' + idStagiaire]);
  }

  seeEtudiant(idStagiaire: number) {
    this.router.navigate(['/stagiaire/' + idStagiaire]);
  }

  deleteEtudiant(idStagiaire: number) {
    this.etudiantService.deleteEtudiant(idStagiaire).subscribe(() => {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/stagiaire']);
          });
        },
        error => {
          alert("Erreur lors de la suppression d'un stagiaire");

    })
  }

}
