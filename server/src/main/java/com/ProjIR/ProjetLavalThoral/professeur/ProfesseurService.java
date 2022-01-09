package com.ProjIR.ProjetLavalThoral.professeur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfesseurService {
    @Autowired
    private ProfesseurRepository professeurRepository;

    public Professeur findProfesseurByLogin(String login) {
        return this.professeurRepository.findByLogin(login);
    }

    public boolean authentification(String login, String mdp) {
        return mdp.equals(findProfesseurByLogin(login).getMdp());
    }
}
