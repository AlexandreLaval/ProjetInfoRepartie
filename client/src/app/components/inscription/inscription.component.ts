import {Component, OnInit} from "@angular/core";
import {LogInService} from "../../services/loginService";
import {Router} from "@angular/router";

@Component({
    selector: 'app-inscription',
    template: `
        <form class="div-margin" *ngIf="creationForm">
            <div>
                <h2>Contact</h2>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Entreprise</mat-label>
                    <mat-select>
                        <mat-option value="option">Option</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Etudiant</mat-label>
                    <mat-select>
                        <mat-option value="option">Option</mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Professeur</mat-label>
                    <mat-select>
                        <mat-option value="option">Option</mat-option>
                    </mat-select>
                </mat-form-field>

            </div>
            <div>
                <h2>Description du stage</h2>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Date de début du stage</mat-label>
                    <input matInput [matDatepicker]="pickerDebut">
                    <mat-datepicker-toggle matSuffix [for]="pickerDebut"></mat-datepicker-toggle>
                    <mat-datepicker #pickerDebut></mat-datepicker>
                </mat-form-field>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Date de fin du stage</mat-label>
                    <input matInput [matDatepicker]="pickerEnd">
                    <mat-datepicker-toggle matSuffix [for]="pickerEnd"></mat-datepicker-toggle>
                    <mat-datepicker #pickerEnd></mat-datepicker>
                </mat-form-field>
                <mat-form-field class="inscription-form-field" appearance="fill">
                    <mat-label>Type de stage</mat-label>
                    <mat-select>
                        <mat-option value="option">Option</mat-option>
                    </mat-select>
                </mat-form-field>
                <br>
                <mat-form-field appearance="fill" class="inscription-form-field">
                    <mat-label>Description</mat-label>
                    <textarea matInput placeholder="Description"></textarea>
                </mat-form-field>
                <br>
                <mat-form-field appearance="fill" class="inscription-form-field observation">
                    <mat-label>Observation</mat-label>
                    <textarea matInput placeholder="Observation"></textarea>
                </mat-form-field>
            </div>
        </form>
    `,
    styles: [`

        .div-margin {
            margin-top: 10px;
            margin-left: 20px;
        }

        .inscription-form-field {
            margin-right: 8px;
            position: relative;
            width: 300px;
        }
    `]
})

export class InscriptionComponent implements OnInit {
    creationForm: boolean = true;

    constructor(private loginService: LogInService,
                private router: Router) {
    }

    ngOnInit() {
        if (!this.loginService.isConnected) {
            this.router.navigate(['login']);
        }
    }
}
