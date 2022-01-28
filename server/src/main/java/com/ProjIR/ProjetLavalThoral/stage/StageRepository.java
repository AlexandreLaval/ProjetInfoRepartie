package com.ProjIR.ProjetLavalThoral.stage;

import com.ProjIR.ProjetLavalThoral.entreprise.Entreprise;
import com.ProjIR.ProjetLavalThoral.etudiant.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StageRepository extends JpaRepository<Stage, Integer> {
    List<Stage> findAllByNumEntreprise(Entreprise numEntreprise);

    List<Stage> findAllByNumEtudiant(Etudiant numEtudiant);
}