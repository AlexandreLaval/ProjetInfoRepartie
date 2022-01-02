package etudiant;

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
public class Etudiant {
    @Id
    private Integer numEtudiant;
    private String prenomEtudiant;
    private String nomEtudiant;
    private Integer numClasse;
    private String login;
    private String mdp;
    private Boolean enActivite;
    private LocalDate anneeObtention;
}
