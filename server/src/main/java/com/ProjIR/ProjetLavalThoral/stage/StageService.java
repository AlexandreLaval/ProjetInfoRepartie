package com.ProjIR.ProjetLavalThoral.stage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StageService {
    @Autowired
    private StageRepository stageRepository;

    public Stage findStageByNumStage(Integer numStage) {
        return this.stageRepository.findById(numStage).orElseThrow();
    }

    public List<Stage> findAllStageByNumEntreprise(Integer numEntreprise) {
        return this.stageRepository.findAllByNumEntreprise(numEntreprise);
    }

    public List<Stage> findAllStage() {
        return this.stageRepository.findAll();
    }

    public Stage findStageByNumEtudiant(Integer numEtudiant) {
        return this.stageRepository.findStageByNumEtudiant(numEtudiant);
    }

    Stage create(Stage stage) {
        return this.stageRepository.save(stage);
    }

    Stage modify(Stage newStage, Integer id) {
        return this.stageRepository.findById(id)
                .map(stage -> {
                    stage.setNumEtudiant(newStage.getNumEtudiant());
                    stage.setNumEntreprise(newStage.getNumEntreprise());
                    stage.setDebutStage(newStage.getDebutStage());
                    stage.setFinStage(newStage.getFinStage());
                    stage.setTypeStage(newStage.getTypeStage());
                    stage.setObservation(newStage.getObservation());
                    stage.setNumProf(newStage.getNumProf());
                    stage.setDescProjet(newStage.getDescProjet());
                    stage.setObservationStage(newStage.getObservationStage());
                    return this.stageRepository.save(stage);
                })
                .orElseGet(() -> {
                    newStage.setNumStage(newStage.getNumStage());
                    return this.stageRepository.save(newStage);
                });
    }

    public void delete(Integer id) {
        this.stageRepository.deleteById(id);
    }
}
