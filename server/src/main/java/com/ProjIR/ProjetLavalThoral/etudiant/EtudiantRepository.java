package com.ProjIR.ProjetLavalThoral.etudiant;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant, Integer> {
    Etudiant findEtudiantByLogin(String login);
}