package com.ProjIR.ProjetLavalThoral.professeur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/professeur")
public class ProfesseurController {
    private final ProfesseurService professeurService;

    @Autowired
    public ProfesseurController(ProfesseurService professeurService) {
        this.professeurService = professeurService;
    }

    @GetMapping("/{login}/{mdp}")
    public ResponseEntity<Boolean> authProfesseur(@PathVariable(value = "login") String login,
                                                  @PathVariable(value = "mdp") String mdp) {
        Professeur professeur = this.professeurService.findProfesseurByLogin(login);
        return new ResponseEntity<>(mdp.equals(professeur.getMdp()), HttpStatus.OK);
    }

    @GetMapping("/{numProfesseur}")
    public ResponseEntity<Professeur> description(
            @PathVariable(value = "numProfesseur") Integer numProfesseur) {
        return new ResponseEntity<>(this.professeurService.getProfesseurById(numProfesseur), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Professeur>> listeAllProfesseur() {
        return new ResponseEntity<>(this.professeurService.findAllProfesseur(), HttpStatus.OK);
    }
}
