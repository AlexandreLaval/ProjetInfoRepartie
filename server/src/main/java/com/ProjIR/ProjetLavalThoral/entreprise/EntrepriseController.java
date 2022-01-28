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

    @GetMapping()
    public ResponseEntity<List<Entreprise>> Entreprises() {
        return new ResponseEntity<>(this.entrepriseService.findAllEntreprise(), HttpStatus.OK);
    }

    @PostMapping("/creation")
    public ResponseEntity<Entreprise> create(
            @RequestBody final Entreprise entreprise) {
        return new ResponseEntity<>(this.entrepriseService.create(entreprise), HttpStatus.OK);
    }

    @PutMapping("/modify/{numEntreprise}")
    public ResponseEntity<Entreprise> modify(
            @RequestBody final Entreprise entreprise,
            @PathVariable(value = "numEntreprise") Integer numEntreprise) {
        return new ResponseEntity<>(this.entrepriseService.modify(entreprise, numEntreprise), HttpStatus.OK);
    }

    @DeleteMapping("/{numEntreprise}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Integer numEntreprise) {
        this.entrepriseService.delete(numEntreprise);
        return ResponseEntity.noContent().build();
    }
}
