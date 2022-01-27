import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../models/etudiant";

@Injectable({
    providedIn: 'root'
})

export class EtudiantService {
    url = "http://localhost:8080/etudiant";

    constructor(private http: HttpClient) {
    }

    getAllEtudiant(): Observable<Array<Etudiant>> {
        return this.http.get<Array<Etudiant>>(this.url);
    }

    getEtudiant(id: number): Observable<Etudiant> {
        return this.http.get<Etudiant>(this.url + "/" + id);
    }

    createEtudiant(etudiant: Etudiant): Observable<Etudiant> {
        return this.http.post<Etudiant>(this.url + "/creation", etudiant);
    }

    modifyEtudiant(id: number, etudiant: Etudiant): Observable<Etudiant> {
        return this.http.put<Etudiant>(this.url + "/modify/" + id, etudiant);
    }

    deleteEtudiant(id: number): Observable<number> {
        return this.http.delete<number>(this.url + "/" + id);
    }
}