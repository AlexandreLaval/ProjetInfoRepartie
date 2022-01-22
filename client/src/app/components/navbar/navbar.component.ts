import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LogInService} from "../../services/loginService";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-navbar',
    template: `
        <mat-toolbar color="primary">
            <button mat-button class="navbar-button" (click)="clickEvent('')" aria-label="Accueil">
                <mat-icon>home</mat-icon>
                Accueil
            </button>
            <button mat-button class="navbar-button" (click)="clickEvent('entreprise')" aria-label="Entreprise">
                <mat-icon>building</mat-icon>
                Entreprise
            </button>
            <button mat-button class="navbar-button" (click)="clickEvent('stagiaire')" aria-label="Stagiaire">
                <mat-icon>man</mat-icon>
                Stagiaire
            </button>
            <button mat-button class="navbar-button" (click)="clickEvent('inscription')" aria-label="Inscription">
                <mat-icon>assignment</mat-icon>
                Inscription
            </button>
            <div class="left-side">
                <button mat-button class="navbar-button" aria-label="Aide">
                    <mat-icon>help</mat-icon>
                    Aide
                </button>
                <button mat-button class="navbar-button" aria-label="Connexion" *ngIf="this.login===''" (click)="onLogin()">
                    <mat-icon>logout</mat-icon>
                    Connexion
                </button>
                <button mat-button class="navbar-button" aria-label="Déconnexion" *ngIf="this.login!==''" (click)="onLogout()">
                    <mat-icon>login</mat-icon>
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

export class NavbarComponent implements OnInit {
    isConnected: boolean = false;
    subscription: Subscription | undefined;
    login = '';

    constructor(private router: Router,
                private loginService: LogInService) {
    }

    ngOnInit() {
        this.subscription = this.loginService._login.subscribe(log =>
            this.login = log)
    }

    clickEvent(event: any) {
        this.router.navigateByUrl(event);
    }

    onLogin() {
        this.router.navigate(['login']);
    }

    onLogout() {
        this.loginService.isConnected = false;
        this.login = '';
        this.router.navigate(['login']);
    }
}

