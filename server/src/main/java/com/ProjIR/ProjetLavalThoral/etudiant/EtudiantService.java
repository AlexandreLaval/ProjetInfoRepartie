package com.ProjIR.ProjetLavalThoral.etudiant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtudiantService {
    @Autowired
    EtudiantRepository etudiantRepository;

    public List<Etudiant> findAllEtudiant() {
        return this.etudiantRepository.findAll();
    }

    public Etudiant findEtudiantByLogin(String login) {
        return this.etudiantRepository.findEtudiantByLogin(login);
    }

    public Etudiant findEtudiantByNumEtudiant(Integer numEtudiant) {
        return this.etudiantRepository.findById(numEtudiant).orElseThrow();
    }

    Etudiant create(Etudiant etudiant) {
        return this.etudiantRepository.save(etudiant);
    }

    Etudiant modify(Etudiant newEtudiant, Integer id) {
        return this.etudiantRepository.findById(id)
                .map(etudiant -> {
                    etudiant.setNomEtudiant(newEtudiant.getNomEtudiant());
                    etudiant.setPrenomEtudiant(newEtudiant.getPrenomEtudiant());
                    etudiant.setLogin(newEtudiant.getLogin());
                    etudiant.setMdp(newEtudiant.getMdp());
                    etudiant.setAnneeObtention(newEtudiant.getAnneeObtention());
                    etudiant.setEnActivite(newEtudiant.getEnActivite());
                    etudiant.setNumClasse(newEtudiant.getNumClasse());
                    return this.etudiantRepository.save(etudiant);
                })
                .orElseGet(() -> {
                    newEtudiant.setNumEtudiant(newEtudiant.getNumEtudiant());
                    return this.etudiantRepository.save(newEtudiant);
                });
    }

    Boolean authEtudiant(String login, String mdp) {
       return mdp.equals(this.etudiantRepository.findEtudiantByLogin(login).getMdp());
    }

    public void delete(Integer id) {
        this.etudiantRepository.deleteById(id);
    }
}
