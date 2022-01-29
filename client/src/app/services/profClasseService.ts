import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfClasse} from "../models/profClasse";

@Injectable({
    providedIn: 'root'
})
export class ProfClasseService {
    url = "http://localhost:8080/profClasse";

    constructor(private http: HttpClient) {
    }

    getAllClasses(): Observable<Array<ProfClasse>> {
        return this.http.get<Array<ProfClasse>>(this.url);
    }
}