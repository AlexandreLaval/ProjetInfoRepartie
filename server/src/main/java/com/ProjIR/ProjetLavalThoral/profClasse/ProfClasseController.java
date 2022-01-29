package com.ProjIR.ProjetLavalThoral.profClasse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/profClasse")
public class ProfClasseController {
    private final ProfClasseService profClasseService;

    @Autowired
    public ProfClasseController(ProfClasseService profClasseService) {
        this.profClasseService = profClasseService;
    }

    @GetMapping()
    public ResponseEntity<List<ProfClasse>> getAllProfClasses() {
        return new ResponseEntity<>(this.profClasseService.getAllProfClass(), HttpStatus.OK);
    }
}