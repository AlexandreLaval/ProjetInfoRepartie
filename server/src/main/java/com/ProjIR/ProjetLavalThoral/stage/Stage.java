package com.ProjIR.ProjetLavalThoral.stage;

import com.ProjIR.ProjetLavalThoral.entreprise.Entreprise;
import com.ProjIR.ProjetLavalThoral.etudiant.Etudiant;
import com.ProjIR.ProjetLavalThoral.professeur.Professeur;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.Instant;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "stage")
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_stage", nullable = false)
    private Integer numStage;

    @Column(name = "debut_stage", nullable = false)
    private Instant debutStage;

    @Column(name = "fin_stage", nullable = false)
    private Instant finStage;

    @Column(name = "type_stage", length = 128)
    private String typeStage;

    @Lob
    @Column(name = "desc_projet")
    private String descProjet;

    @Lob
    @Column(name = "observation_stage")
    private String observationStage;

    @ManyToOne(optional = false)
    @JoinColumn(name = "num_etudiant", nullable = false)
    private Etudiant numEtudiant;

    @ManyToOne(optional = false)
    @JoinColumn(name = "num_prof", nullable = false)
    private Professeur numProf;

    @ManyToOne(optional = false)
    @JoinColumn(name = "num_entreprise", nullable = false)
    private Entreprise numEntreprise;

    @Column(name = "observation")
    private String observation;

}
