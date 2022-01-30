import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-component-aide',
  template: `
    <div class="div-margin" xmlns="http://www.w3.org/1999/html">
        <div class="div-h">
          <h1>Aide</h1>
          <h3>Bienvenue sur la F.A.Q</h3>
        </div>
      <div id="trait_dessus"><hr></div>
      <div class="div-entreprise">
        <h2>Entreprise</h2>
        <h4>Comment ajouter une entreprise ?</h4>
        <div class="div-border">
          <p>Pour ajouter une entreprise, rendez-vous sur la page "Entreprise", où vous devez cliquer sur le bouton "ajouter un stagiaire". <br/>
          Attention, vous devez avoir un statut "professeur" pour faire cette manipulation. <br/>
          Vous pourrez alors remplir un formulaire avec un maximum d'informations possibles.</p>
        </div>
        <h4>Comment afficher ou enlever une information concernant l'entreprise ?</h4>
        <div class="div-border">
          <p>En allant sur la page "Entreprise", vous pouvez voir les entreprises déjà référencées.<br/>
          Pour afficher ou modifier une information sur cette dernière, appuyez sur le stylo.</p>
        </div>
         <h4>N'y a t-il pas une autre solution pour voir ces informations ? </h4>
        <div class="div-border">
          <p>Bien sûr, vous pouvez cliquer sur l'icône "oeil" pour voir toues les informations de l'entreprise selectionée.</p>
        </div>
        <h4>Comment ajouter une inscription à une entreprise ? </h4>
        <div class="div-border">
          <p>Une fois sur la page de l'"Entreprise", cliquer sur l'icône "homme". Cela vous dirigera vers un formulaire où vous pourrez créer une inscription.</p>
        </div>
        <h4>Comment supprimer une entreprise ? </h4>
        <div class="div-border">
          <p>Une fois sur la page de l'"Entreprise", cliquer sur l'icône "corbeille", cela aura pour effet de supprimer l'entreprise selectionnée.</p>
        </div>
      </div>

      <div id="trait_dessus"><hr></div>
      <div class="div-stagiaire">
        <h2>Stagiaire</h2>
        <h4>Comment ajouter un stagiaire ?</h4>
        <div class="div-border">
          <p>Pour ajouter un stagiaire, rendez-vous sur la page "Stagiaire", où vous devez cliquer sur le bouton "ajouter un stagiaire". <br/>
            Attention, vous devez avoir un statut "professeur" pour faire cette manipulation. <br/>
            Vous pourrez alors remplir un formulaire avec un maximum d'informations possibles.</p>
        </div>
        <h4>Comment afficher ou enlever une information concernant l'entreprise ?</h4>
        <div class="div-border">
          <p>En allant sur la page "Stagiaire", vous pouvez voir les stagiaires déjà référencés.<br/>
            Pour afficher ou modifier une information sur ce dernier, appuyez sur le stylo.</p>
        </div>
        <h4>N'y a t-il pas une autre solution pour voir ces informations ? </h4>
        <div class="div-border">
          <p>Bien sûr, vous pouvez cliquer sur l'icône "oeil" pour voir toues les informations du stagaire selectioné.</p>
        </div>
        <h4>Comment supprimer un stagiaire ? </h4>
        <div class="div-border">
          <p>Une fois sur la page du "Stagiaire", cliquer sur l'icône "corbeille", cela aura pour effet de supprimer le stagiaire selectionné.</p>
        </div>
      </div>
      
    </div>
  `,
  styles: [`
    .div-margin {
      margin-top: 10px;
      margin-left: 20px;
    }

    .div-h {
      text-align: right;
      margin-right: 80px;
      color: cadetblue;
    }

    .div-border {
      border-style: solid;
      border-radius: 10px;
      background-color: rgba(95, 158, 160, 0.46);
      width: 80%;
      padding-top: 10px;
      padding-left: 10px;
    }

    h1 {
      margin-top: 20px;
      font-weight: bold;
      font-size: 40px;
    }

    h2 {
      font-weight: bold;
      font-size: 25px;
    }

    h4 {
      text-decoration: underline;
      font-size: 20px;
      margin-left: 40px;
      margin-top: 10px;
    }
  `]
})

export class AideComponent {
  constructor(private router: Router) {
  }
}
