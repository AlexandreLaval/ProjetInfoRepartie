package entreprise;

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

    public Entreprise create(EntrepriseInput entrepriseInput) {
        Entreprise entreprise = new Entreprise();
        entreprise.setCpEntreprise(entrepriseInput.getCpEntreprise());
        entreprise.setRueEntreprise(entrepriseInput.getRueEntreprise());
        entreprise.setEmail(entrepriseInput.getEmail());
        entreprise.setEnActivite(entrepriseInput.getEnActivite());
        entreprise.setNomContact(entrepriseInput.getNomContact());
        entreprise.setNomResponsable(entrepriseInput.getNomResponsable());
        entreprise.setObservation(entrepriseInput.getObservation());
        entreprise.setRaisonSociale(entrepriseInput.getRaisonSociale());
        entreprise.setSiteEntreprise(entrepriseInput.getSiteEntreprise());
        entrepriseInput.setTelEntreprise(entrepriseInput.getTelEntreprise());
        entreprise.setVilleEntreprise(entrepriseInput.getVilleEntreprise());
        entreprise.setNumSpec(entrepriseInput.getNumSpec());

        return this.entrepriseRepository.save(entreprise);
    }
}
