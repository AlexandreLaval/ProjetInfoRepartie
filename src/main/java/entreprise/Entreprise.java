package entreprise;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Entreprise {
    @Id
    private Integer numEntreprise;
    private Integer cpEntreprise;
    private String email;
    private Boolean enActivite;
    private String nomContact;
    private String nomResponsable;
    private String observation;
    private String raisonSociale;
    private String rueEntreprise;
    private String siteEntreprise;
    private String telEntreprise;
    private String villeEntreprise;
}