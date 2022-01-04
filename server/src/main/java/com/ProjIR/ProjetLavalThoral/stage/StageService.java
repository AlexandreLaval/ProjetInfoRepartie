package com.ProjIR.ProjetLavalThoral.stage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StageService {
    @Autowired
    private StageRepository stageRepository;

    public List<Stage> findAllStageByNumEntreprise(Integer numEntreprise) {
        return this.stageRepository.findAllByNumEntreprise(numEntreprise);
    }

    public Stage findStageByNumEtudiant(Integer numEtudiant) {
        return this.stageRepository.findStageByNumEtudiant(numEtudiant);
    }
}
