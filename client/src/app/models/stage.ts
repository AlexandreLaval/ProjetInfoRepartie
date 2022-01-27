import {Entreprise} from "./entreprise";
import {Professeur} from "./professeur";
import {Etudiant} from "./etudiant";

export interface Stage {
    numStage: number | undefined;
    debutStage: string;
    finStage: string;
    typeStage: string;
    descProjet: string;
    observationStage: string;
    numEtudiant: Etudiant | string;
    numProf: Professeur | string;
    numEntreprise: Entreprise | string;
    observation: string;
}