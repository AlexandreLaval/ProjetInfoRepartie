import {Classe} from "./classe";

export interface Etudiant {
    numEtudiant: number;
    nomEtudiant: string;
    prenomEtudiant: string;
    anneeObtention: Date;
    login: string;
    mdp: string;
    numClasse: Classe;
    enActivite: number;
}