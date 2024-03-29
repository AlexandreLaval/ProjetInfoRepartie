package com.ProjIR.ProjetLavalThoral.classe;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "classe")
public class Classe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_classe", nullable = false)
    private Integer id;

    @Column(name = "nom_classe", nullable = false, length = 128)
    private String nomClasse;

    @Column(name = "num_prof")
    private Integer numProf;

}
