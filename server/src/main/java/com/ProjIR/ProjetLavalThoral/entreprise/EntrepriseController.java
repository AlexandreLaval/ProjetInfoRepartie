package com.ProjIR.ProjetLavalThoral.entreprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/entreprise")
public class EntrepriseController {
    private final EntrepriseService entrepriseService;

    @Autowired
    public EntrepriseController(EntrepriseService entrepriseService) {
        this.entrepriseService = entrepriseService;
    }

    @GetMapping("/{numEntreprise}")
    public ResponseEntity<Entreprise> description(
            @PathVariable(value = "numEntreprise") Integer numEntreprise) {
        System.out.println(this.entrepriseService.findByNumEntreprise(numEntreprise));
        return new ResponseEntity<>(this.entrepriseService.findByNumEntreprise(numEntreprise), HttpStatus.OK);
    }

    @GetMapping("/s")
    public ResponseEntity<List<Entreprise>> Entreprises() {
        System.out.println(this.entrepriseService.findAllEntreprise());
        return new ResponseEntity<>(this.entrepriseService.findAllEntreprise(), HttpStatus.OK);
    }

    @GetMapping()
    public String Ent() {
        return "Hello";
    }

    @PostMapping()
    public ResponseEntity<Entreprise> create(
            @RequestParam(value = "entrepriseInput") final Entreprise entreprise) {
        return new ResponseEntity<>(this.entrepriseService.create(entreprise), HttpStatus.OK);
    }


}
