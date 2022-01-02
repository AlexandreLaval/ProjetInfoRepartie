package entreprise;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "entreprise")
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
    private Integer numSpec;
}