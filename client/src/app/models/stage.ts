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
    numEtudiant?: Etudiant;
    numProf?: Professeur;
    numEntreprise?: Entreprise;
    observation: string;
}