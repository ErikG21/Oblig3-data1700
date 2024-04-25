package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BilettRepo {

    @Autowired
    private JdbcTemplate db;

    //Her blir alle get kallene fra pojo-en kallet på for å hente alle variabler
    //som er lagret der. De blir så puttet inn i en sql settning som blir sendt til
    //server ved bruk av database.update funksjonen
    public void lagreBilett(Bilett innBilett){
        String sql = "INSERT INTO BILETT (fornavn, etternavn, epost, nummer, antall, film) VALUES(?,?,?,?,?,?)";
        db.update(sql,innBilett.getFornavn(), innBilett.getEtternavn(), innBilett.getEpost(), innBilett.getNummer(), innBilett.getAntall(), innBilett.getFilm());
    }

    //BeanPropertyRowMapper her brukes for å gjøre om sql resultatene fra
    //databsse spørringen til java objektet Bilett (Bilett.class)
    //resultatet fra sql spørringen blir også organisert etter etternavn som
    //er etterspurt i oppgaven
    public List<Bilett> hentBilett(){
        String sql = "SELECT * FROM BILETT ORDER BY etternavn";
        return db.query(sql, new BeanPropertyRowMapper(Bilett.class));
    }

    public void slettBilett(){
        String sql = "DELETE FROM BILETT";
        db.update(sql);
    }

    public void slettEnBilett(int id){
        String sql = "DELETE FROM BILETT WHERE id=?";
        db.update(sql, id);
    }
}
