package com.ProjIR.ProjetLavalThoral.stage;

import com.ProjIR.ProjetLavalThoral.entreprise.Entreprise;
import com.ProjIR.ProjetLavalThoral.entreprise.EntrepriseService;
import com.ProjIR.ProjetLavalThoral.etudiant.Etudiant;
import com.ProjIR.ProjetLavalThoral.etudiant.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stage")
public class StageController {
    private final StageService stageService;
    private final EntrepriseService entrepriseService;
    private final EtudiantService etudiantService;

    @Autowired
    public StageController(StageService stageService,
                           EntrepriseService entrepriseService,
                           EtudiantService etudiantService) {
        this.stageService = stageService;
        this.etudiantService = etudiantService;
        this.entrepriseService = entrepriseService;
    }

    @GetMapping("/{numStage}")
    public ResponseEntity<Stage> description(
            @PathVariable(value = "numStage") Integer numStage) {
        return new ResponseEntity<>(this.stageService.findStageByNumStage(numStage), HttpStatus.OK);
    }

    @GetMapping("/etudiant/{numEtudiant}")
    public ResponseEntity<List<Stage>> listeAllStageOfAnEtudiant(
            @PathVariable(value = "numEtudiant") Integer numEtudiant) {
        return new ResponseEntity<>(this.stageService.findAllStageByNumEtudiant(
                this.etudiantService.findEtudiantByNumEtudiant(numEtudiant)), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Stage>> listeAllStage() {
        return new ResponseEntity<>(this.stageService.findAllStage(), HttpStatus.OK);
    }

    @GetMapping("/entreprise/{numEntreprise}")
    public ResponseEntity<List<Stage>> listeAllStageForOneEntreprise(@PathVariable(value = "numEntreprise") Integer numEntreprise) {
        return new ResponseEntity<>(this.stageService.findAllStageByNumEntreprise(
                this.entrepriseService.findByNumEntreprise(numEntreprise)), HttpStatus.OK);
    }

    @PostMapping("/creation")
    public ResponseEntity<Stage> create(@RequestBody final Stage stage) {
        return new ResponseEntity<>(this.stageService.create(stage), HttpStatus.OK);
    }

    @PutMapping("/modify/{numStage}")
    public ResponseEntity<Stage> modify(@RequestParam(value = "stage") final Stage newStage,
                                        @PathVariable(value = "numStage") Integer numStage) {
        return new ResponseEntity<>(this.stageService.modify(newStage, numStage), HttpStatus.OK);
    }

    @DeleteMapping("/{numStage}")
    public ResponseEntity<?> delete(@PathVariable Integer numStage) {
        this.stageService.delete(numStage);
        return ResponseEntity.noContent().build();
    }
}
