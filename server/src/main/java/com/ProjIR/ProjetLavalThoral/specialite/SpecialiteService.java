package com.ProjIR.ProjetLavalThoral.specialite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpecialiteService {
    @Autowired
    SpecialiteRepository specialiteRepository;

    public Specialite create(Specialite specialite) {
        return this.specialiteRepository.save(specialite);
    }

    public void delete(Integer numSpecialite) {
        this.specialiteRepository.deleteById(numSpecialite);
    }
}
