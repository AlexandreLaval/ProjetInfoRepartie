package com.ProjIR.ProjetLavalThoral.mission;

import com.ProjIR.ProjetLavalThoral.stage.Stage;
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
@Table(name = "mission")
public class Mission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_mission", nullable = false)
    private Integer numMission;

    @Column(name = "libelle", nullable = false, length = 128)
    private String libelle;

    @ManyToOne(optional = false)
    @JoinColumn(name = "num_stage", nullable = false)
    private Stage numStage;
}
