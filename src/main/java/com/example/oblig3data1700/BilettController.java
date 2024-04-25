package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BilettController {

//    Jeg skriver billet med en l fordi jeg fant ut at det skrives med en l
//    når jeg var halvveis ferdig med koden.

    @Autowired
    private BilettRepo rep;
    //postmapping tar inn billett fra postkall til localhost:8080/lagre,
    //og sender billetten videre til repo for å lagres på server
    @PostMapping("/lagre")
    public void lagreBilett (Bilett innBilett){
        rep.lagreBilett(innBilett);
    }
    //getmappingen henter her billett dataene fra repository som igjen henter fra server
    @GetMapping("/hentAlle")
    public List<Bilett> hentAlle(){
            return rep.hentBilett();
    }
    //sletter billetter
    @GetMapping ("/slettAlle")
    public void slettAlle(){
        rep.slettBilett();
    }
    //sletter en billett
    @GetMapping("/slettEnBilett")
    public void slettEnBilett(@RequestParam("id") int id){
        rep.slettEnBilett(id);
    }
}