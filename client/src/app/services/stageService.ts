import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stage} from "../models/stage";

@Injectable({
    providedIn: 'root'
})
export class StageService {
    url = "http://localhost:8080/stage";

    constructor(private http: HttpClient) {
    }

    getAllStage(): Observable<Array<Stage>> {
        return this.http.get<Array<Stage>>(this.url);
    }

    getStageByNumStage(id: number): Observable<Stage> {
        return this.http.get<Stage>(this.url + "/" + id);
    }

    getStageByNumEtudiant(id: number): Observable<Stage> {
        return this.http.get<Stage>(this.url + "/etudiant/" + id);
    }

    getStagesByNumEntreprise(id: number): Observable<Array<Stage>> {
        return this.http.get<Array<Stage>>(this.url + "/entreprise/" + id);
    }

    createStage(stage: Stage): Observable<Stage> {
        return this.http.post<Stage>(this.url + "/creation", stage);
    }

    modifyStage(id: number, stage: Stage): Observable<Stage> {
        return this.http.put<Stage>(this.url + "/modify/" + id, stage);
    }

    deleteStage(id: number): Observable<number> {
        return this.http.delete<number>(this.url + "/" + id);
    }
}
