package com.ProjIR.ProjetLavalThoral.profClasse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfClasseService {
    @Autowired
    private ProfClasseRepository profClasseRepository;

    public List<ProfClasse> getAllProfClasse() {
        return this.profClasseRepository.findAll();
    }

    public ProfClasse getProfClasseFromNumProf(Integer numProf) {
        return this.profClasseRepository.findById(numProf).orElseThrow();
    }
}
