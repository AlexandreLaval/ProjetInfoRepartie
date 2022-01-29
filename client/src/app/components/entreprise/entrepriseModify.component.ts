import {Component, OnInit} from "@angular/core";
import {Entreprise} from "../../models/entreprise";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../../services/entrepriseService";
import {SpecEntrepriseService} from "../../services/specEntrepriseService";
import {SpecialiteService} from "../../services/specialiteService";
import {SpecEntreprise} from "../../models/specEntreprise";

@Component({
    selector: 'app-entreprise-modification',
    template: `
        <div class="div-margin">
            <div>
                <h2>Information</h2>
                <mat-form-field class="ent-form-field" appearance="fill">
                    <mat-label>Nom de l'entreprise</mat-label>
                    <input required matInput placeholder="Nom de l'entreprise" [(ngModel)]="entreprise.raisonSociale">
                </mat-form-field>
                <mat-form-field class="ent-form-field" appearance="fill">
                    <mat-label>Nom du contact</mat-label>
                    <input matInput placeholder="Nom du contact" [(ngModel)]="entreprise.nomContact">
                </mat-form-field>
                <mat-form-field class="ent-form-field" appearance="fill">
                    <mat-label>Nom du responsable</mat-label>
                    <input matInput placeholder="Nom du responsable" [(ngModel)]="entreprise.nomResp">
                </mat-form-field>

            </div>
            <div>
                <h2>Contact</h2>
                <mat-form-field class="ent-form-field" appearance="fill">
                    <mat-label>Rue</mat-label>
                    <input required matInput placeholder="Rue" [(ngModel)]="entreprise.rueEntreprise">
                </mat-form-field>
                <mat-form-field class="ent-form-field" appearance="fill">
                    <mat-label>Code Postal</mat-label>
                    <input required matInput placeholder="Code Postal" [(ngModel)]="entreprise.cpEntreprise">
                </mat-form-field>
                <mat-form-field appearance="fill" class="ent-form-field">
                    <mat-label>Ville</mat-label>
                    <input required matInput placeholder="Ville" [(ngModel)]="entreprise.villeEntreprise">
                </mat-form-field>
                <br>
                <mat-form-field appearance="fill" class="ent-form-field">
                    <mat-label>Télephone</mat-label>
                    <input required matInput placeholder="Téléphone" [(ngModel)]="entreprise.telEntreprise">
                </mat-form-field>
                <mat-form-field appearance="fill" class="ent-form-field">
                    <mat-label>Fax</mat-label>
                    <input matInput placeholder="Fax" class="ent-form-field"
                           [(ngModel)]="entreprise.faxEntreprise">
                </mat-form-field>
                <mat-form-field appearance="fill" class="ent-form-field">
                    <mat-label>Email</mat-label>
                    <input matInput placeholder="Email" [(ngModel)]="entreprise.email">
                </mat-form-field>
            </div>
            <div>
                <h2>Divers</h2>
                <mat-form-field appearance="fill" class="ent-form-field">
                    <mat-label>Observation</mat-label>
                    <input matInput placeholder="Observation" [(ngModel)]="entreprise.observation">
                </mat-form-field>
                <mat-form-field appearance="fill" class="ent-form-field">
                    <mat-label>Site Web</mat-label>
                    <input matInput placeholder="Site Web" [(ngModel)]="entreprise.siteEntreprise">
                </mat-form-field>
                <mat-form-field appearance="fill" class="ent-form-field">
                    <mat-label>Niveau</mat-label>
                    <input required matInput placeholder="Niveau" [(ngModel)]="entreprise.niveau">
                </mat-form-field>
            </div>
            <div>
                <h2>Spécialité</h2>
                <mat-form-field appearance="fill" class="ent-form-field">
                    <mat-label>Spécialité</mat-label>
                    <mat-select [(value)]="this.specEntreprise.numSpec">
                        <mat-option *ngFor="let specialite of specialites"
                                    [value]="specialite.numSpec">{{specialite.libelle}}</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <button mat-flat-button class="btn-validate" color="primary" (click)="cancel()">Retour</button>
            <button mat-flat-button class="btn-validate" color="primary" (click)="onSubmit()">Modifier</button>

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
            margin-left: 5px;
        }

        .ent-form-field {
            margin-right: 8px;
        }
    `]
})

export class EntrepriseModifyComponent implements OnInit {
    entreprise: Entreprise = {
        cpEntreprise: '',
        faxEntreprise: '',
        email: '',
        enActivite: 1,
        numEntreprise: undefined,
        niveau: '',
        nomContact: '',
        rueEntreprise: '',
        siteEntreprise: '',
        telEntreprise: '',
        villeEntreprise: '',
        nomResp: '',
        observation: '',
        raisonSociale: '',
    };
    idEnt: number = 0;
    specEntreprise: SpecEntreprise = {
        numEntreprise: 0,
        numSpec: 0,
    };
    specialites: any;


    constructor(private router: Router,
                private entrepriseService: EntrepriseService,
                private specEntrepriseService: SpecEntrepriseService,
                private specialiteService: SpecialiteService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.idEnt = +params['id'];
        });
        this.entrepriseService.getEntreprise(this.idEnt).subscribe(ent => {
            this.entreprise = ent;
        });
        this.specEntrepriseService.getSpecEntreprisesFromNumEntreprise(this.idEnt).subscribe(specEnts => {
            specEnts.forEach(specEnt => this.specEntreprise = specEnt)
        })


        this.specialiteService.getAllSpecialites().subscribe(specs => {
            this.specialites = specs;
        })
    }

    isFormValid()
        :
        boolean {
        switch ('') {
            case this.entreprise.cpEntreprise:
                return false;
            case this.entreprise.niveau:
                return false;
            case this.entreprise.rueEntreprise:
                return false;
            case this.entreprise.telEntreprise:
                return false;
            case this.entreprise.villeEntreprise:
                return false;
            case this.entreprise.raisonSociale:
                return false;
        }
        return true;
    }

    onSubmit() {
        if (this.isFormValid()) {
            this.entrepriseService.modifyEntreprise(this.idEnt, this.entreprise).subscribe((response) => {
                    this.specEntrepriseService.modifyEntreprise(this.idEnt, this.specEntreprise).subscribe(() =>
                        this.cancel()
                    );
                },
                (error) => {
                    alert("Erreur - Merci de vérifier que tous les champs soient remplis correctement");
                });
        } else {
            alert("Erreur - Merci de vérifier que tous les champs soient remplis correctement");
        }
    }

    cancel() {
        this.router.navigate(['entreprise']);
    }
}