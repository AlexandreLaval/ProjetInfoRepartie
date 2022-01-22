import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LogInService} from "../../services/loginService";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    template: `
        <div class="login">
            <div>
                <label>Choisissez votre rôle :</label><br>
                <mat-radio-group [formControl]="identityLabelControl" required>
                    <mat-radio-button class="mat-radio-margin" value="etudiant">Etudiant</mat-radio-button>
                    <mat-radio-button class="mat-radio-margin" value="professeur">Professeur</mat-radio-button>
                </mat-radio-group>
            </div>
            <br>
            <mat-form-field class="width-300" appearance="fill" floatLabel="always">
                <mat-label>Pseuo</mat-label>
                <input matInput placeholder="pseudo" [(ngModel)]="login">
            </mat-form-field>
            <br>
            <mat-form-field appearance="fill">
                <mat-label>Mot de passe</mat-label>
                <input matInput [type]="hide ? 'password' : 'text'" [(ngModel)]="mdp">
                <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Cacher le mot de passe'"
                        [attr.aria-pressed]="hide">
                    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
            </mat-form-field>

            <button mat-flat-button class="btn-validate" color="primary" (click)="onSubmit()">Connexion</button>
        </div>
        <br>
    `,
    styles: [`

        .width-300 {
            width: auto;
        }

        .mat-radio-margin {
            margin: 10px;
        }

        .login {
            margin: 0 auto;
            width: 200px;
            text-align: center;
            margin-top: 100px;
        }
    `]
})

export class LoginComponent {
    hide: boolean = true;
    identityLabelControl = new FormControl('auto');
    options: FormGroup;
    login = '';
    mdp = '';


    constructor(private formBuilder: FormBuilder,
                private loginService: LogInService,
                private router: Router) {
        this.options = formBuilder.group({
            floatLabel: this.identityLabelControl,
        });
    }

    onSubmit() {
        if (this.identityLabelControl.value === "etudiant") {
            this.loginService.authEtudiant(this.login, this.mdp).subscribe(() => {
                    this.loginService.isConnected = true;
                    this.loginService.isProfesseur = false;
                    this.loginService.login.next(this.login);
                    this.router.navigate(['']);
                },
                error => {
                    alert('Error mauvais identifiants de connexion')
                })
        } else if (this.identityLabelControl.value === "professeur") {
            this.loginService.authProfesseur(this.login, this.mdp).subscribe(() => {
                    this.loginService.isConnected = true;
                    this.loginService.isProfesseur = true;
                    this.loginService.login.next(this.login);
                    this.router.navigate(['']);
                },
                error => {
                    alert('Error mauvais identifiants de connexion')
                })
        }
        else {
            alert('Veuillez sélectionner un rôle');
        }
    }
}