//Strenger for utskrift av bilett
let utMeldingFornavn = "";
let utMeldingEtternavn = "";
let utMeldingEpost = "";
let utMeldingNummer = "";

    function inputValidering (){

    $("#fornavnValideringsmelding").html("");
    $("#etternavnValideringsmelding").html("");
    $("#epostValideringsmelding").html("");
    $("#nummerValideringsmelding").html("");

    //variabler for input og regex setninger som skal brukes til validering
    let fornavnInput = $('#fornavn').val();
    let etternavnInput = $('#etternavn').val();
    let epostInput = $('#epost').val();
    let nummerInput = $('#nummer').val();

    const regexNavn = /^[a-zA-Z]+$/;
    const regexEpost = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const regexNummer = /^((0047)?|(\+47)?)[4|9]\d{7}$/

    if (regexNavn.test(fornavnInput)) {
        utMeldingFornavn = $('#fornavn').val();
    } else {
        utMeldingFornavn = "feil";
        $("#fornavnValideringsmelding").html("skriv inn et fornavn!");
    }

    if (regexNavn.test(etternavnInput)) {
        utMeldingEtternavn = $('#etternavn').val();
    } else {
        utMeldingEtternavn = "feil";
        $("#etternavnValideringsmelding").html("skriv inn et etternavn!");
    }

    if (regexEpost.test(epostInput)) {
        utMeldingEpost = $("#epost").val();
    } else {
        utMeldingEpost = 'feil';
        $("#epostValideringsmelding").html("skriv inn en gyldig epost adresse!");
    }

    if (regexNummer.test(nummerInput)) {
        utMeldingNummer = $("#nummer").val();
    } else {
        utMeldingNummer = "feil";
        $("#nummerValideringsmelding").html("skriv inn et telefonnummer!");
    }
}

    function opprettBilett() {

    //variabler i bilett objekt blir opprettet med en verdi
    const bilett = {
        //kode for select isteden for radioknapper
        // film: document.getElementById("velgFilm").value,
        //variabler uten input validering
        film: $('input[name=velg-film]:checked').val(),
        antall: $("#antallPersoner").val(),
        //variabler med input validering
        fornavn: utMeldingFornavn,
        etternavn: utMeldingEtternavn,
        epost: utMeldingEpost,
        nummer: utMeldingNummer
    };

    //bilett blir pushet inn i array hvis alle valideringene har blitt godkjent
    if (utMeldingFornavn !== "feil" && utMeldingEtternavn !== "feil" && utMeldingEpost !== "feil" && utMeldingNummer !== "feil") {
        $.post("/lagre", bilett, function () {
            $("#antallPersoner").val("");
            hentAlle();
        });
    }

    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#epost").val("");
    $("#nummer").val("");
}

    function hentAlle(){
        $.get("/hentAlle", function (data) {
            formaterData(data);
        });
    }

    function formaterData(biletter){
        let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>Nummer</th></tr>";
        for (const x of biletter){
            ut+="<tr><td>"+x.film+"</td><td>"+x.antall+"</td><td>"+x.fornavn+"</td><td>"+x.etternavn+"</td><td>"+x.epost+"</td><td>"+x.nummer+"</td></tr>";
        }
        ut+="</table>";
        $("#output").html(ut);
    }

    function slettBiletter() {
    $.get("/slettAlle", function (){
        hentAlle()
    })
    //div-en med id = output blir rensket for tekst
    $('#output').HTML = '';
    //Sletter valideringsfeilmeldinger
    $("#fornavnValideringsmelding").HTML = "";
    $("#etternavnValideringsmelding").HTML = "";
    $("#epostValideringsmelding").HTML = "";
    $("#nummerValideringsmelding").HTML = "";
}