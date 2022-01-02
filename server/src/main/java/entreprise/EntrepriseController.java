package entreprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/entreprise")
public class EntrepriseController {
    private final EntrepriseService entrepriseService;

    @Autowired
    public EntrepriseController(EntrepriseService entrepriseService) {
        this.entrepriseService = entrepriseService;
    }

    @GetMapping("/{numEntreprise}")
    public ResponseEntity<Entreprise> description(
            @RequestParam(value = "numEntreprise", defaultValue = "0") Integer numEntreprise) {
        return new ResponseEntity<>(this.entrepriseService.findByNumEntreprise(numEntreprise), HttpStatus.OK);
    }

    @GetMapping("/s")
    public ResponseEntity<List<Entreprise>> Entreprises() {
        return new ResponseEntity<>(this.entrepriseService.findAllEntreprise(), HttpStatus.OK);
    }

    @GetMapping()
    public String Ent() {
        return "Hello";
    }

    public ResponseEntity<Entreprise> create(
            @RequestParam(value = "entrepriseInput") final EntrepriseInput entrepriseInput) {
        return new ResponseEntity<>(this.entrepriseService.create(entrepriseInput), HttpStatus.OK);
    }


}
