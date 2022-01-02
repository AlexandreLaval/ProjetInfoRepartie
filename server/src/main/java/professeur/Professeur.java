package professeur;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Professeur {
    @Id
    private Integer numProf;
    private String login;
    private String mdp;
    private String email;
    private String nomProf;
    private String prenomProf;
    private String numClasse;
}
