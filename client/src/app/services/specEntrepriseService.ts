import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SpecEntreprise} from "../models/specEntreprise";

@Injectable({
    providedIn: 'root'
})
export class SpecEntrepriseService {
    url = "http://localhost:8080/specEntreprise";

    constructor(private http: HttpClient) {
    }

    getAllClasses(): Observable<Array<SpecEntreprise>> {
        return this.http.get<Array<SpecEntreprise>>(this.url);
    }

    createEntreprise(specEntreprise: SpecEntreprise): Observable<SpecEntreprise> {
        return this.http.post<SpecEntreprise>(this.url + "/creation", specEntreprise);
    }
}