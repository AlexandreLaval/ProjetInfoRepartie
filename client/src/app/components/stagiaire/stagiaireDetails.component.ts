import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {EntrepriseService} from "../../services/entrepriseService";
import {StageService} from "../../services/stageService";
import {SpecialiteService} from "../../services/specialiteService";
import {SpecEntrepriseService} from "../../services/specEntrepriseService";
import {EtudiantService} from "../../services/etudiantService";

@Component({
  selector: 'app-stagiaire-detail',
  template: `
    <button mat-flat-button class="but-detail" color="primary" (click)="cancel()">Retour</button>
    <mat-card class="card-ent">
      <mat-card-title>Informations de l'étudiant</mat-card-title>
      <mat-card-content>
        <td>Nom de l'étudiant : {{this.etudiant.nomEtudiant}}</td>
        <br>
        <td>Prénom de l'étudiant : {{this.etudiant.prenomEtudiant}}</td>
        <br>
        <td>Anné obtention du diplôme : {{this.etudiant.anneeObtention}}</td>
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

    table {
      width: 100%;
    }
  `]
})
export class StagiaireDetailsComponent implements OnInit {

  isModifying: boolean = false;
  idEnt: number = 0;
  etudiant: any;
  isProf: boolean = true;
  stages: any;
  specialite: string = "";

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private etudiantService: EtudiantService,
              public stageService: StageService,) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.idEnt = +params['id'];
    });
    this.etudiantService.getEtudiant(this.idEnt).subscribe(etu => {
      this.etudiant = etu;
    });
  }

  cancel() {
    this.router.navigate(['stagiaire']);
  }
}
