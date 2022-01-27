import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Professeur} from "../models/professeur";

@Injectable({
    providedIn: 'root'
})

export class ProfesseurService {
    url = "http://localhost:8080/professeur";

    constructor(private http: HttpClient) {
    }

    getAllProfesseur(): Observable<Array<Professeur>> {
        return this.http.get<Array<Professeur>>(this.url);
    }

    getProfesseur(id: number): Observable<Professeur> {
        return this.http.get<Professeur>(this.url + "/" + id);
    }

    createProfesseur(professeur: Professeur): Observable<Professeur> {
        return this.http.post<Professeur>(this.url + "/creation", professeur);
    }

    modifyProfesseuer(id: number, professeur: Professeur): Observable<Professeur> {
        return this.http.put<Professeur>(this.url + "/modify/" + id, professeur);
    }

    deleteProfesseur(id: number): Observable<number> {
        return this.http.delete<number>(this.url + "/" + id);
    }
}