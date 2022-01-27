package com.ProjIR.ProjetLavalThoral.stage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stage")
public class StageController {
    private final StageService stageService;

    @Autowired
    public StageController(StageService stageService) {
        this.stageService = stageService;
    }

    @GetMapping("/{numStage}")
    public ResponseEntity<Stage> description(
            @PathVariable(value = "numStage") Integer numStage) {
        return new ResponseEntity<>(this.stageService.findStageByNumStage(numStage), HttpStatus.OK);
    }

    @GetMapping("/etudiant/{numEtudiant}")
    public ResponseEntity<Stage> descriptionStageOfOneEtudiant(
            @PathVariable(value = "numEtudiant") Integer numEtudiant) {
        return new ResponseEntity<>(this.stageService.findStageByNumEtudiant(numEtudiant), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<List<Stage>> listeAllStage() {
        return new ResponseEntity<>(this.stageService.findAllStage(), HttpStatus.OK);
    }

    @GetMapping("/prof/{numEntreprise}")
    public ResponseEntity<List<Stage>> listeAllStageForOneEntreprise(@PathVariable(value = "numEntreprise") Integer numEntreprise) {
        return new ResponseEntity<>(this.stageService.findAllStageByNumEntreprise(numEntreprise), HttpStatus.OK);
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
