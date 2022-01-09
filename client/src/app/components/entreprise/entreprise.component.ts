import {Component} from "@angular/core";

@Component({
  selector: 'app-entreprise',
  template: `
    <div>
      <mat-card>Information
        <mat-card-content>
          <mat-form-field appearance="legacy">
            <mat-label>Nom de l'entreprise</mat-label>
            <input matInput placeholder="Nom de l'entreprise">
          </mat-form-field>
          <mat-form-field appearance="legacy">
            <mat-label>Nom du contact</mat-label>
            <input matInput placeholder="Nom du contact">
          </mat-form-field>
          <mat-form-field appearance="legacy">
            <mat-label>Nom du responsable</mat-label>
            <input matInput placeholder="Nom du responsable">
          </mat-form-field>
        </mat-card-content>
      </mat-card>

      <mat-card>Contact
        <mat-card-content>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Rue</mat-label>
            <input matInput placeholder="Rue">
          </mat-form-field>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Code Postal</mat-label>
            <input matInput placeholder="Code Postal">
          </mat-form-field>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Ville</mat-label>
            <input matInput placeholder="Ville">
          </mat-form-field>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Télephone</mat-label>
            <input matInput placeholder="Téléphone">
          </mat-form-field>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Fax</mat-label>
            <input matInput placeholder="Fax" class="mat-form-field">
          </mat-form-field>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Email</mat-label>
            <input matInput placeholder="Email">
          </mat-form-field>
        </mat-card-content>
      </mat-card>

      <mat-card>Divers
        <mat-card-content>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Observation</mat-label>
            <input matInput placeholder="Observation">
          </mat-form-field>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Site Web</mat-label>
            <input matInput placeholder="Site Web">
          </mat-form-field>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Niveau</mat-label>
            <input matInput placeholder="Niveau">
          </mat-form-field>
        </mat-card-content>
      </mat-card>

      <mat-card>Spécialité
        <mat-card-content>
          <mat-form-field appearance="legacy" class="mat-form-field">
            <mat-label>Spécialité</mat-label>
            <mat-select>
              <mat-option value="option">Option</mat-option>
            </mat-select>
          </mat-form-field>
        </mat-card-content>
      </mat-card>
      <button mat-button>Modifier</button>
    </div>
  `,
  styles: [`
    .example-container .mat-form-field + .mat-form-field {
      margin-left: 8px;
    }
  `]
})

export class EntrepriseComponent {

}
