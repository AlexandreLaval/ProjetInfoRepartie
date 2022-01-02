package entreprise;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EntrepriseInput {
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
    private Integer numSpec;
}
