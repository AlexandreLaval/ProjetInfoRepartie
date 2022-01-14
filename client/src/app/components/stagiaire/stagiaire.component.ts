import {Component} from "@angular/core";

@Component({
  selector: 'app-stagiaire',
  template: `
    <div class="div-margin" *ngIf="creationForm">
      <div>
        <h2>Information concernant l'étudiant</h2>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Nom</mat-label>
          <input matInput placeholder="Nom">
        </mat-form-field>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Prénom</mat-label>
          <input matInput placeholder="Prénom">
        </mat-form-field>
        <br>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Nom d'utilisateur (8 caractères)</mat-label>
          <input matInput placeholder="Nom d'utilisateur">
        </mat-form-field>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Mot de passe (entre 8 et 30 caractères)</mat-label>
          <input matInput placeholder="Nom d'utilisateur">
        </mat-form-field>
        <br>
        <mat-form-field class="stag-form-field" appearance="fill">
          <mat-label>Date d'obtention du BTS</mat-label>
          <input matInput [matDatepicker]="picker">
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
      <button mat-flat-button class="btn-validate" color="primary">Modifier</button>
    </div>
  `,
  styles: [`

    .div-margin {
      margin-top: 10px;
      margin-left: 20px;
    }

    .stag-form-field {
      margin-right: 8px;
      position: relative;
      width: 300px;
    }
  `]
})

export class StagiaireComponent {
  creationForm: boolean = true;


}
