package com.ProjIR.ProjetLavalThoral.specEntreprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecEntrepriseService {
    @Autowired
    private SpecEntrepriseRepository specEntrepriseRepository;

    List<SpecEntreprise> getAllSpecEntreprises() {
        return this.specEntrepriseRepository.findAll();
    }

    SpecEntreprise createSpecEntreprise(SpecEntreprise specEntreprise) {
        return this.specEntrepriseRepository.save(specEntreprise);
    }
}
