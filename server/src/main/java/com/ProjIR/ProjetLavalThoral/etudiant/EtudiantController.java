package com.ProjIR.ProjetLavalThoral.etudiant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/etudiant")
public class EtudiantController {
    private final EtudiantService etudiantService;

    @Autowired
    public EtudiantController(EtudiantService etudiantService) {
        this.etudiantService = etudiantService;
    }

    @GetMapping("/{login}/{mdp}")
    public ResponseEntity<Boolean> authEtudiant(@PathVariable(value = "login") String login,
                                                @PathVariable(value = "mdp") String mdp) {
        System.out.println(login + " " + mdp);
        Etudiant etudiant = this.etudiantService.findEtudiantByLogin(login);
        return new ResponseEntity<>(mdp.equals(etudiant.getMdp()), HttpStatus.OK);
    }

    @GetMapping("/{numEtudiant}")
    public ResponseEntity<Etudiant> description(
            @PathVariable(value = "numEtudiant") Integer numEtudiant) {
        return new ResponseEntity<>(this.etudiantService.findEtudiantByNumEtudiant(numEtudiant), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Etudiant>> listeAllEtudiants() {
        return new ResponseEntity<>(this.etudiantService.findAllEtudiant(), HttpStatus.OK);
    }

    @PostMapping("/creation")
    public ResponseEntity<Etudiant> create(@RequestBody final Etudiant etudiant) {
        return new ResponseEntity<>(this.etudiantService.create(etudiant), HttpStatus.OK);
    }

    @PutMapping("/modify/{numEtudiant}")
    public ResponseEntity<Etudiant> modify(@RequestBody final Etudiant newEtudiant,
                                           @PathVariable(value = "numEtudiant") Integer numEtudiant) {
        return new ResponseEntity<>(this.etudiantService.modify(newEtudiant, numEtudiant), HttpStatus.OK);
    }

    @DeleteMapping("/{numEtudiant}")
    public ResponseEntity<?> delete(@PathVariable Integer numEtudiant) {
        this.etudiantService.delete(numEtudiant);
        return ResponseEntity.noContent().build();
    }
}
