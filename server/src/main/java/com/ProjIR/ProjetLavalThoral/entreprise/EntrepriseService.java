package com.ProjIR.ProjetLavalThoral.entreprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntrepriseService {
    @Autowired
    EntrepriseRepository entrepriseRepository;

    public Entreprise findByNumEntreprise(Integer numEntreprise) {
        return entrepriseRepository.findEntrepriseByNumEntreprise(numEntreprise);
    }

    public List<Entreprise> findAllEntreprise() {
        return entrepriseRepository.findAll();
    }

    public Entreprise create(Entreprise entreprise) {
        return entreprise;
    }
}
