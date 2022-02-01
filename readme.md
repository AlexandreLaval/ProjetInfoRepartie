Bonjour <br>

Pour lancer le projet rien de plus simple, <br>

Tout d'abord avec Xampp lancez les modules Apache et MySQL <br>

![Alt text](./imgReadme/Xampp.png)

Ouvrez ensuite le dossier ProjetInfoRepartie avec IntellIJ <br>

Dans l'onglet Terminal (ALT + F12) en bas de l'application, placez vous dans le dossier client (cd client) et installez les dépendances avec "npm install" <br>

![Alt text](./imgReadme/clientNpmInstall.png)


Dans l'onglet Services (ALT + 8) en bas de l'application vous retrouvez les deux configurations pour lancer le front (npm) et le back (Spring Boot) <br>

![Alt text](./imgReadme/configuration.png)

En premier lancez le back en séléctionnant SpringBoot et en appuyant sur le bouton play <br>
Puis lancez le front en selectionnnant npm et en appuyant sur le bouton play <br>

L'application est désormais accessible sur http://localhost:4200/ <br>

NB :  
Le port par défaut utilisé par TomCat lors du lancement du back est 8080 <br>
L'adresse de la bdd est localhost:3306/bdd_geststages <br>
La version du sdk est 16 <br>
