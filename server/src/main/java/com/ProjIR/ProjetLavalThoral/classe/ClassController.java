package com.ProjIR.ProjetLavalThoral.classe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/classe")
public class ClassController {
    private final ClasseService classeService;

    @Autowired
    public ClassController(ClasseService classeService) {
        this.classeService = classeService;
    }

    @GetMapping()
    public ResponseEntity<List<Classe>> getAllClasses() {
        return new ResponseEntity<>(this.classeService.getAllClasses(), HttpStatus.OK);
    }
}
