package com.ProjIR.ProjetLavalThoral.stage;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StageRepository extends JpaRepository<Stage, Integer> {
    List<Stage> findAllByNumEntreprise(Integer numEntreprise);

    Stage findStageByNumEtudiant(Integer numEtudiant);
}