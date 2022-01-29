package com.ProjIR.ProjetLavalThoral.specialite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialiteService {
    @Autowired
    SpecialiteRepository specialiteRepository;

    public Specialite create(Specialite specialite) {
        return this.specialiteRepository.save(specialite);
    }

    public List<Specialite> getAllSpecialites() {
        return this.specialiteRepository.findAll();
    }

    public Specialite getSpecialiteFromNumSpec(Integer numSpec) {
        return this.specialiteRepository.findById(numSpec).orElseThrow();
    }

    public void delete(Integer numSpecialite) {
        this.specialiteRepository.deleteById(numSpecialite);
    }
}
