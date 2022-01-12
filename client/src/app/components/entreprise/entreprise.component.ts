import {Component} from "@angular/core";

@Component({
  selector: 'app-entreprise',
  template: `
      <div class="div-margin" xmlns="http://www.w3.org/1999/html">
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

}
