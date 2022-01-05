package com.ProjIR.ProjetLavalThoral.specialite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/specialite")
public class SpecialiteController {
    SpecialiteService specialiteService;

    @Autowired
    SpecialiteController(SpecialiteService specialiteService) {
        this.specialiteService = specialiteService;
    }

    @PostMapping()
    public ResponseEntity<?> createSpecialite(@RequestBody Specialite specialite) {
        return new ResponseEntity<>(this.specialiteService.create(specialite), HttpStatus.OK);
    }

    @DeleteMapping("/{numSpecialite}")
    public ResponseEntity<?> delete(@PathVariable Integer numSpecialite) {
        this.specialiteService.delete(numSpecialite);
        return ResponseEntity.noContent().build();
    }
}
