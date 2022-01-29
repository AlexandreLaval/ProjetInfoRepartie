package com.ProjIR.ProjetLavalThoral.specEntreprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/specEntreprise")
public class SpecEntrepriseController {
    private final SpecEntrepriseService specEntrepriseService;

    @Autowired
    public SpecEntrepriseController(SpecEntrepriseService specEntrepriseService) {
        this.specEntrepriseService = specEntrepriseService;
    }

    @GetMapping()
    public ResponseEntity<List<SpecEntreprise>> getAllSpecEntreprises() {
        return new ResponseEntity<>(this.specEntrepriseService.getAllSpecEntreprises(), HttpStatus.OK);
    }

    @PostMapping("/creation")
    public ResponseEntity<SpecEntreprise> createSpecEntreprise(@RequestBody final SpecEntreprise specEntreprise) {
        return new ResponseEntity<>(this.specEntrepriseService.createSpecEntreprise(specEntreprise), HttpStatus.OK);
    }
}
