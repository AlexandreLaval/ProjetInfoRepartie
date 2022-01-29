import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classe} from "../models/classe";

@Injectable({
    providedIn: 'root'
})
export class ClasseService {
    url = "http://localhost:8080/classe";

    constructor(private http: HttpClient) {
    }

    getAllClasses(): Observable<Array<Classe>> {
        return this.http.get<Array<Classe>>(this.url);
    }
}