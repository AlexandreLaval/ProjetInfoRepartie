package classe;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Classe {
    @Id
    private Integer numClasse;
    private String nomClasse;
    private Integer numProf;
}
