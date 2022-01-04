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
        return this.entrepriseRepository.save(entreprise);
    }

    public Entreprise modify(Entreprise newEntreprise, Integer id) {
        return this.entrepriseRepository.findById(id).map(
                entreprise -> {
                    entreprise.setCpEntreprise(newEntreprise.getCpEntreprise());
                    entreprise.setFaxEntreprise(newEntreprise.getFaxEntreprise());
                    entreprise.setNumEntreprise(newEntreprise.getNumEntreprise());
                    entreprise.setRueEntreprise(newEntreprise.getRueEntreprise());
                    entreprise.setSiteEntreprise(newEntreprise.getSiteEntreprise());
                    entreprise.setEmail(newEntreprise.getEmail());
                    entreprise.setEnActivite(newEntreprise.getEnActivite());
                    entreprise.setNiveau(newEntreprise.getNiveau());
                    entreprise.setNomContact(newEntreprise.getNomContact());
                    entreprise.setRaisonSociale(newEntreprise.getRaisonSociale());
                    entreprise.setNomResp(newEntreprise.getNomResp());
                    entreprise.setVilleEntreprise(newEntreprise.getVilleEntreprise());
                    entreprise.setTelEntreprise(newEntreprise.getTelEntreprise());
                    entreprise.setObservation(newEntreprise.getObservation());
                    return this.entrepriseRepository.save(entreprise);
                }
        ).orElseGet(() -> {
            newEntreprise.setNumEntreprise(id);
            return this.entrepriseRepository.save(newEntreprise);
        });
    }
}
