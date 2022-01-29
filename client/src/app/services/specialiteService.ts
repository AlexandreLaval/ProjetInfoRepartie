import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Specialite} from "../models/specialite";

@Injectable({
    providedIn: 'root'
})
export class SpecialiteService {
    url = "http://localhost:8080/specialite";

    constructor(private http: HttpClient) {
    }

    getAllSpecialites(): Observable<Array<Specialite>> {
        return this.http.get<Array<Specialite>>(this.url);
    }

    getSpecialiteFromNumSpec(numSpec: number): Observable<Specialite> {
        return this.http.get<Specialite>(this.url + "/" + numSpec);
    }
}