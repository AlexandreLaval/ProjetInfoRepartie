import {Injectable} from '@angular/core';
import {Entreprise} from "../models/entreprise";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EntrepriseService {
    url = "http://localhost:8080/entreprise";

    constructor(private http: HttpClient) {
    }

    getAllEntreprises(): Observable<Array<Entreprise>> {
        return this.http.get<Array<Entreprise>>(this.url);
    }

    getEntreprise(id: number): Observable<Entreprise> {
        return this.http.get<Entreprise>(this.url + "/" + id);
    }

    createEntreprise(entreprise: Entreprise): Observable<Entreprise> {
        return this.http.post<Entreprise>(this.url + "/creation", entreprise);
    }

    deleteEntreprise(id: number): Observable<number> {
        return this.http.delete<number>(this.url + "/" + id);
    }
}