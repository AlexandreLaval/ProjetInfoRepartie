package com.ProjIR.ProjetLavalThoral.entreprise;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "entreprise")
public class Entreprise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_entreprise", nullable = false)
    private Integer numEntreprise;

    @Column(name = "raison_sociale", nullable = false, length = 128)
    private String raisonSociale;

    @Column(name = "nom_contact", length = 128)
    private String nomContact;

    @Column(name = "nom_resp", length = 128)
    private String nomResp;

    @Column(name = "rue_entreprise", length = 128)
    private String rueEntreprise;

    @Column(name = "cp_entreprise")
    private Integer cpEntreprise;

    @Column(name = "ville_entreprise", nullable = false, length = 128)
    private String villeEntreprise;

    @Column(name = "tel_entreprise", length = 32)
    private String telEntreprise;

    @Column(name = "fax_entreprise", length = 32)
    private String faxEntreprise;

    @Column(name = "email", length = 128)
    private String email;

    @Lob
    @Column(name = "observation")
    private String observation;

    @Column(name = "site_entreprise", length = 128)
    private String siteEntreprise;

    @Column(name = "niveau", nullable = false, length = 32)
    private String niveau;

    @Column(name = "en_activite", nullable = false)
    private Boolean enActivite = false;

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Entreprise))
            return false;
        Entreprise entreprise = (Entreprise) o;
        return Objects.equals(this.numEntreprise, entreprise.numEntreprise)
                && Objects.equals(this.cpEntreprise, entreprise.cpEntreprise)
                && Objects.equals(this.raisonSociale, entreprise.raisonSociale)
                && Objects.equals(this.niveau, entreprise.niveau)
                && Objects.equals(this.nomResp, entreprise.nomResp)
                && Objects.equals(this.enActivite, entreprise.enActivite);
    }

}