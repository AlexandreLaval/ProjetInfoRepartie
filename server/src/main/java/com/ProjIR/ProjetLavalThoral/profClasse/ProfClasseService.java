package com.ProjIR.ProjetLavalThoral.profClasse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfClasseService {
    @Autowired
    private ProfClasseRepository profClasseRepository;

    List<ProfClasse> getAllProfClass() {
        return this.profClasseRepository.findAll();
    }
}
