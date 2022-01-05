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

    @GetMapping("/{numEtudiant}")
    public ResponseEntity<Etudiant> description(
            @PathVariable(value = "numEtudiant") Integer numEtudiant) {
        return new ResponseEntity<>(this.etudiantService.findEtudiantByNumEtudiant(numEtudiant), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Etudiant>> listeAllEtudiants() {
        return new ResponseEntity<>(this.etudiantService.findAllEtudiant(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Etudiant> create(@RequestParam(value = "etudiant") final Etudiant etudiant) {
        return new ResponseEntity<>(this.etudiantService.create(etudiant), HttpStatus.OK);
    }

    @PutMapping("/{numEtudiant}")
    public ResponseEntity<Etudiant> modify(@RequestParam(value = "etudiant") final Etudiant newEtudiant,
                                           @PathVariable(value = "numEtudiant") Integer numEtudiant) {
        return new ResponseEntity<>(this.etudiantService.modify(newEtudiant, numEtudiant), HttpStatus.OK);
    }

    @DeleteMapping("/{numEtudiant}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Integer numEtudiant) {
        this.etudiantService.delete(numEtudiant);
        return ResponseEntity.noContent().build();
    }
}
