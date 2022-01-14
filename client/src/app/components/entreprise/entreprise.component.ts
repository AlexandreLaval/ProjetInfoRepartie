import {Component} from "@angular/core";

const ELEMENT_DATA: any[] = [
  {Operation: 1, Entreprise: 'Hydrogen', Responsable: 'Mr Dupont', Adresse: 1.0079, Site: 'H', Specialite: 'Chocolat'},
  {Operation: 2, Entreprise: 'Hydrogen', Responsable: 'Mr Dupont', Adresse: 1.0079, Site: 'H', Specialite: 'Chocolat'},
  {Operation: 3, Entreprise: 'Hydrogen', Responsable: 'Mr Dupont', Adresse: 1.0079, Site: 'H', Specialite: 'Chocolat'},
  {Operation: 4, Entreprise: 'Hydrogen', Responsable: 'Mr Dupont', Adresse: 1.0079, Site: 'H', Specialite: 'Chocolat'},
  {Operation: 5, Entreprise: 'Hydrogen', Responsable: 'Mr Dupont', Adresse: 1.0079, Site: 'H', Specialite: 'Chocolat'},
  {Operation: 6, Entreprise: 'Hydrogen', Responsable: 'Mr Dupont', Adresse: 1.0079, Site: 'H', Specialite: 'Chocolat'},
  {Operation: 7, Entreprise: 'Hydrogen', Responsable: 'Mr Dupont', Adresse: 1.0079, Site: 'H', Specialite: 'Chocolat'},
  {Operation: 8, Entreprise: 'Hydrogen', Responsable: 'Mr Dupont', Adresse: 1.0079, Site: 'H', Specialite: 'Chocolat'},
];

@Component({
  selector: 'app-entreprise',
  template: `
    <div class="div-margin" *ngIf="!creationForm">
      <h2>Liste des entreprises</h2>
      <div class="ent-table">
        <button mat-raised-button (click)="addEntreprise()" class="demo-button">
          Add data
        </button>
      </div>
      <table mat-table [dataSource]="entreprises" class="mat-elevation-z8 demo-table">
        <!-- Opération Column -->
        <ng-container matColumnDef="opération">
          <th mat-header-cell *matHeaderCellDef>Opération</th>
          <td mat-cell *matCellDef="let element">{{element.position}}</td>
        </ng-container>

        <!-- Entreprise Column -->
        <ng-container matColumnDef="entreprise">
          <th mat-header-cell *matHeaderCellDef>Entreprise</th>
          <td mat-cell *matCellDef="let element">{{element.name}}</td>
        </ng-container>

        <!-- Responsable Column -->
        <ng-container matColumnDef="responsable">
          <th mat-header-cell *matHeaderCellDef>Responsable</th>
          <td mat-cell *matCellDef="let element">{{element.weight}}</td>
        </ng-container>

        <!-- Adresse Column -->
        <ng-container matColumnDef="adresse">
          <th mat-header-cell *matHeaderCellDef>Adresse</th>
          <td mat-cell *matCellDef="let element">{{element.symbol}}</td>
        </ng-container>

        <!-- Site Column -->
        <ng-container matColumnDef="site">
          <th mat-header-cell *matHeaderCellDef>Site</th>
          <td mat-cell *matCellDef="let element">{{element.symbol}}</td>
        </ng-container>

        <!-- Spécialité Column -->
        <ng-container matColumnDef="spécialité">
          <th mat-header-cell *matHeaderCellDef>Spécialité</th>
          <td mat-cell *matCellDef="let element">{{element.symbol}}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>


    <div class="div-margin" *ngIf="creationForm">
      <div>
        <h2>Information</h2>
        <mat-form-field class="ent-form-field" appearance="fill">
          <mat-label>Nom de l'entreprise</mat-label>
          <input matInput placeholder="Nom de l'entreprise">
        </mat-form-field>
        <mat-form-field class="ent-form-field" appearance="fill">
          <mat-label>Nom du contact</mat-label>
          <input matInput placeholder="Nom du contact">
        </mat-form-field>
        <mat-form-field class="ent-form-field" appearance="fill">
          <mat-label>Nom du responsable</mat-label>
          <input matInput placeholder="Nom du responsable">
        </mat-form-field>

      </div>
      <div>
        <h2>Contact</h2>
        <mat-form-field class="ent-form-field" appearance="fill">
          <mat-label>Rue</mat-label>
          <input matInput placeholder="Rue">
        </mat-form-field>
        <mat-form-field class="ent-form-field" appearance="fill">
          <mat-label>Code Postal</mat-label>
          <input matInput placeholder="Code Postal">
        </mat-form-field>
        <mat-form-field appearance="fill" class="ent-form-field">
          <mat-label>Ville</mat-label>
          <input matInput placeholder="Ville">
        </mat-form-field>
        <br>
        <mat-form-field appearance="fill" class="ent-form-field">
          <mat-label>Télephone</mat-label>
          <input matInput placeholder="Téléphone">
        </mat-form-field>
        <mat-form-field appearance="fill" class="ent-form-field">
          <mat-label>Fax</mat-label>
          <input matInput placeholder="Fax" class="ent-form-field">
        </mat-form-field>
        <mat-form-field appearance="fill" class="ent-form-field">
          <mat-label>Email</mat-label>
          <input matInput placeholder="Email">
        </mat-form-field>
      </div>
      <div>
        <h2>Divers</h2>
        <mat-form-field appearance="fill" class="ent-form-field">
          <mat-label>Observation</mat-label>
          <input matInput placeholder="Observation">
        </mat-form-field>
        <mat-form-field appearance="fill" class="ent-form-field">
          <mat-label>Site Web</mat-label>
          <input matInput placeholder="Site Web">
        </mat-form-field>
        <mat-form-field appearance="fill" class="ent-form-field">
          <mat-label>Niveau</mat-label>
          <input matInput placeholder="Niveau">
        </mat-form-field>
      </div>
      <div>
        <h2>Spécialité</h2>
        <mat-form-field appearance="fill" class="ent-form-field">
          <mat-label>Spécialité</mat-label>
          <mat-select>
            <mat-option value="option">Option</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <button mat-flat-button class="btn-validate" color="primary">Modifier</button>

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

    .btn-validate {
      float: right;
    }

    .ent-form-field {
      margin-right: 8px;
    }
  `]
})

export class EntrepriseComponent {
  displayedColumns: string[] = ['opération', 'entreprise', 'responsable', 'adresse', 'site', 'spécialité'];
  creationForm: boolean = true;
  entreprises: any;

  addEntreprise() {

  }

  openCreationForm() {
    this.creationForm = !this.creationForm;
  }
}
