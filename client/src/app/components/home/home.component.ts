import {Component, OnInit} from "@angular/core";
import {LogInService} from "../../services/loginService";
import {Router} from "@angular/router";


@Component({
    selector: 'app-home',
    template: `
        <h1>Stage BTS</h1>
        <h3>Bienvenue sur la page de gestion des stages</h3>
    `,
    styles: [`
    `],
})

export class HomeComponent implements OnInit {


    constructor(private loginService: LogInService,
                private router: Router) {
    }

    ngOnInit() {
        if (!this.loginService.isConnected) {
            this.router.navigate(['login']);
        }
    }

}
