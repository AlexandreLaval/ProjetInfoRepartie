import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LogInService {

    login = new BehaviorSubject<string>('');
    _login = this.login.asObservable();
    isConnected = false;
    isProfesseur = true;

    urlEtudiant = "http://localhost:8080/etudiant/";
    urlProf = "http://localhost:8080/professeur/";

    constructor(private http: HttpClient,) {
    }

    authEtudiant(login: string, mdp: string): Observable<boolean> {
        return this.http.get<boolean>(this.urlEtudiant + login + "/" + mdp).pipe(
            catchError(error => {
                    let errorMsg: string;
                    if (error.error instanceof ErrorEvent) {
                        errorMsg = `Error: ${error.error.message}`;
                    } else {
                        errorMsg = "erreur";
                    }

                    return throwError(errorMsg);
                },
            ));
    }

    authProfesseur(login: string, mdp: string): Observable<boolean> {
        return this.http.get<boolean>(this.urlProf + login + "/" + mdp).pipe(
            catchError(error => {
                let errorMsg: string;
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    errorMsg = "erreur";
                }
                return throwError(errorMsg);
            }));
    }
}