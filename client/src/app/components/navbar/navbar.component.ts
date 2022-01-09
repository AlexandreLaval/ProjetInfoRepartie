import {Component} from "@angular/core";

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar>
      <button mat-raised-button class="navbar-button" aria-label="Accueil">
        <mat-icon>home</mat-icon>
        Accueil
      </button>
      <button mat-raised-button class="navbar-button" aria-label="Entreprise">
        <mat-icon>building</mat-icon>
        Entreprise
      </button>
      <button mat-raised-button class="navbar-button" aria-label="Stagiaire">
        <mat-icon>man</mat-icon>
        Stagiaire
      </button>
      <button mat-raised-button class="navbar-button" aria-label="Inscription">
        <mat-icon>assignment</mat-icon>
        Inscription
      </button>
      <div class="left-side">
        <button mat-raised-button class="navbar-button" aria-label="Aide">
          <mat-icon>help</mat-icon>
          Aide
        </button>
        <button mat-raised-button class="navbar-button" aria-label="Déconnexion">
          <mat-icon>logout</mat-icon>
          Déconnexion
        </button>
      </div>
    </mat-toolbar>

  `,
  styles: [`
    .left-side {
      margin-left: auto;
      padding: 5px;
    }

    .navbar-button {
      margin: 5px;
    }
  `]
})

export class NavbarComponent {

}
