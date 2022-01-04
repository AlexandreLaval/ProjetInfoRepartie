package com.ProjIR.ProjetLavalThoral.professeur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfesseurService {
    @Autowired
    private ProfesseurRepository professeurRepository;

}
