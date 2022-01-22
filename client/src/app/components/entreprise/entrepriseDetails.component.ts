import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../../services/entrepriseService";

@Component({
    selector: 'app-entreprise-detail',
    template: `

        <button mat-flat-button class="but-detail" color="primary" (click)="cancel()">Retour</button>
        <mat-card class="card-ent">
            <mat-card-title>Informations</mat-card-title>
            <mat-card-content>
                <td>Nom entreprise : {{this.entreprise.raisonSociale}}</td>
                <br>
                <td>Nom du contact : {{this.entreprise.nomContact}}</td>
                <br>
                <td>Nom du responsable : {{this.entreprise.nomResp}}</td>
                <br>
            </mat-card-content>
        </mat-card>
        <mat-card class="card-ent">
            <mat-card-title>Divers</mat-card-title>
            <mat-card-content>
                <td>Observation : {{this.entreprise.observation}}</td>
                <br>
                <td>Url du site : {{this.entreprise.siteEntreprise}}</td>
                <br>
                <td>Niveau : {{this.entreprise.niveau}}</td>
                <br>
                <td>Spécialité : STMG</td>
                <br>
            </mat-card-content>
        </mat-card>
        <mat-card class="card-ent">
            <mat-card-title>Contact</mat-card-title>
            <mat-card-content>
                <td>Rue : {{this.entreprise.rueEntreprise}}</td>
                <br>
                <td>Code Postal : {{this.entreprise.cpEntreprise}}</td>
                <br>
                <td>Ville : {{this.entreprise.villeEntreprise}}</td>
                <br>
                <td>Téléphone : {{this.entreprise.telEntreprise}}</td>
                <br>
                <td>Fax : {{this.entreprise.faxEntreprise}}</td>
                <br>
                <td>Email : {{this.entreprise.email}}</td>
                <br>
            </mat-card-content>
        </mat-card>

    `,
    styles: [`
        .card-ent {
            margin: 20px;
            width: 400px;
        }
        
        .but-detail {
            margin: 20px;
        }
    `]
})
export class EntrepriseDetailsComponent implements OnInit {
    isModifying: boolean = false;
    idEnt: number = 0;
    entreprise: any;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private entrepriseService: EntrepriseService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.idEnt = +params['id'];
        });
        this.entrepriseService.getEntreprise(this.idEnt).subscribe(ent => {
            this.entreprise = ent;
        });
    }

    cancel() {
        this.router.navigate(['entreprise']);
    }
}