import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SpecEntreprise} from "../models/specEntreprise";
import {Entreprise} from "../models/entreprise";

@Injectable({
    providedIn: 'root'
})
export class SpecEntrepriseService {
    url = "http://localhost:8080/specEntreprise";

    constructor(private http: HttpClient) {
    }

    getAllSpecEntreprises(): Observable<Array<SpecEntreprise>> {
        return this.http.get<Array<SpecEntreprise>>(this.url);
    }


    getSpecEntreprisesFromNumEntreprise(numEntreprise: number): Observable<Array<SpecEntreprise>> {
        return this.http.get<Array<SpecEntreprise>>(this.url + "/" + numEntreprise);
    }

    createSpecEntreprise(specEntreprise: SpecEntreprise): Observable<SpecEntreprise> {
        return this.http.post<SpecEntreprise>(this.url + "/creation", specEntreprise);
    }

    modifyEntreprise(id:number, specEntreprise: SpecEntreprise): Observable<SpecEntreprise> {
        return this.http.put<SpecEntreprise>(this.url + "/modify/" + id, specEntreprise);
    }
}