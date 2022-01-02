package stage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Stage {
    @Id
    private Integer numStage;
    private String typeStage;
    private String observation;
    private LocalDate debutStage;
    private LocalDate finStage;
    private String descProjet;
    private Integer numEntreprise;
    private Integer numEtudiant;
    private Integer numProf;
}
