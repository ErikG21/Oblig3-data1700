package com.example.oblig3data1700;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//her lager jeg en veldig enkel pojo ved bruk av lombok for å
//generere getter, setter, konstruktør og en tom konstruktør. Bare for morroskyld
public class Bilett {
    private int id;
    private String fornavn;
    private String etternavn;
    private String epost;
    private String nummer;
    private String antall;
    private String film;
}


