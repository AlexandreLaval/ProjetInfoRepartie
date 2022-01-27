package com.ProjIR.ProjetLavalThoral.professeur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfesseurService {
    @Autowired
    private ProfesseurRepository professeurRepository;

    public Professeur findProfesseurByLogin(String login) {
        return this.professeurRepository.findByLogin(login);
    }

    public Professeur getProfesseurById(Integer id) {
        return this.professeurRepository.findById(id).orElseThrow();
    }

    public List<Professeur> findAllProfesseur() {
        return this.professeurRepository.findAll();
    }

    public boolean authentification(String login, String mdp) {
        return mdp.equals(findProfesseurByLogin(login).getMdp());
    }
}
