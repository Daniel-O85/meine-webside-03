// Local Storage

/*****************************************************************************
 * * * * * * * * * * * * * * * * *  * Produkte * * * * * * * * * * * * * * * * 
 *****************************************************************************/
// Speicher beschreiben
const schreiben = () => {

    // verbindung zu input feldern
    const produktName = document.getElementById("inPro");
    const produktPreis = document.getElementById("inPreis");
    const produktMenge = document.getElementById("inMenge");
    const produktAnzeigen = document.getElementById("produkteAnzeigen");

    // prüfen ob felder nicht leer 
    if (produktName.value != "" &&
        produktPreis.value != "" &&
        produktMenge.value != "" &&
        produktAnzeigen
    ) {
        let produkt =
            localStorage.getItem("Produkt") == null
                ? 0
                : Number(localStorage.getItem("Produkt"));

        // daten Object
        let daten = {
            ProduktName: produktName.value,
            ProduktPreis: produktPreis.value,
            ProduktMenge: produktMenge.value,
        };

        // daten als Text in den Lokalen Speicher schreiben
        localStorage.setItem(`Produkt-${produkt}`, JSON.stringify(daten));

        produktAnzeigen.innerHTML += `<div class ="design" id = "eintrag-${produkt}">
             <div>Produkt: ${produktName.value}</div>
             <br>
             <div>Preis: ${produktPreis.value} €</div>
             <br>
             <div>Menge: ${produktMenge.value}</div>
            </div>`;

        // jeden Eintragwert um 1 erhöhen
        localStorage.setItem("Produkt", produkt + 1);

        // Inputfelder leeren
        produktName.value = "";
        produktPreis.value = "";
        produktMenge.value = "";
    } else alert("Bitte alle Felder ausfüllen");
};

// Speicher auslesen
const lesen = () => {
    const produktAnzeigen = document.getElementById("produkteAnzeigen");

    if (produktAnzeigen) {
        let produkt =
            localStorage.getItem("Produkt") == null
                ? 0
                : Number(localStorage.getItem("Produkt"))

        if (produkt > 0) {

            produktAnzeigen.innerHTML = "";
            for (let p = 0; p < produkt; p++) {
                let daten = JSON.parse(localStorage.getItem(`Produkt-${p}`));

                // HTML Ausgabe
                produktAnzeigen.innerHTML += `<div class ="design" id = "eintrag-${p}">
             <div>Produkt: ${daten.ProduktName}</div>
             <br>
             <div>Preis: ${daten.ProduktPreis} €</div>
             <br>
             <div>Menge: ${daten.ProduktMenge}</div>
            </div>`;
            }
        }
    }

};

// produkteinträge für die liste bereitstellen
const lesen2 = () => {
    let ergebnis = [];

    let produkt =
        localStorage.getItem("Produkt") == null
            ? 0
            : Number(localStorage.getItem("Produkt"))

    if (produkt > 0) {


        for (let p = 0; p < produkt; p++) {
            let daten = JSON.parse(localStorage.getItem(`Produkt-${p}`));

            // HTML Ausgabe
            ergebnis.push(daten.ProduktName);
        }
    }
    return ergebnis;

};
// Key aus Speicher entfernen
const entfernen = () => {
    const produkt = localStorage.getItem("Produkt");
    if (confirm("Soll der Eintrag wirklich gelöscht werden ?")) {
        if (produkt > 0) {
            const letzterIndex = produkt - 1;
            const letzterKey = `Produkt-${letzterIndex}`;

            // Den letzten Eintrag aus dem Local Storage löschen
            localStorage.removeItem(letzterKey);

            // Das HTML-Element des letzten Eintrags entfernen
            const letztesElement = document.getElementById(`eintrag-${letzterIndex}`);
            if (letztesElement) {
                letztesElement.remove();
            }

            // Die Anzahl der Produkte im Local Storage aktualisieren
            localStorage.setItem("Produkt", letzterIndex);
        }
    }
}

// Speicher leeren
const leer = () => {
    const produktAnzeigen = document.getElementById("produkteAnzeigen");
    if (confirm("Soll wirklich alles unwiederuflich gelöscht werden ?")) {
        localStorage.clear();
        produktAnzeigen.innerHTML = "";
    }
}
/*****************************************************************************
 * * * * * * * * * * * * * * * * Kontakte * * * * * * * * * * * * * * * *  
 *****************************************************************************/

// speicher beschreiben
const sendeKontakt = () => {
    // verbindung zu input feldern
    const VorName = document.getElementById("inpVN");
    const NachName = document.getElementById("inpNN");
    const Telefon = document.getElementById("inpTEL");
    const Email = document.getElementById("inpMAIL");
    const Textarea = document.getElementById("inpTA");
    const kontaktAnzeigen = document.getElementById("kontakteAnzeigen");


    // prüfen ob felder nicht leer
    if (VorName.value != "" &&
        NachName.value != "" &&
        Telefon.value != "" &&
        Email.value != "" &&
        Textarea.value != ""
    ) {
        let kontakt =
            localStorage.getItem("Kontakt") == null
                ? 0
                : Number(localStorage.getItem("Kontakt"))

        // daten Object
        let daten = {
            Vname: VorName.value,
            Nname: NachName.value,
            Tel: Telefon.value,
            Mail: Email.value,
            Tarea: Textarea.value
        };
        // daten als Text in den Lokalen Speicher schreiben
        localStorage.setItem(`Kontakt-${kontakt}`, JSON.stringify(daten));

        kontaktAnzeigen.innerHTML += `<div class ="design" id = "eintrag-${kontakt}">
        <div>Vorname: ${VorName.value}</div>
        <br>
        <div>Nachname: ${NachName.value}</div>
        <br>
        <div>Telefon: ${Telefon.value}</div>
        <br>
        <div>E-Mail: ${Email.value}</div>
        <br>
        <div>Bemerkung: ${Textarea.value}</div>
       </div>`;

        // jeden Eintragwert um 1 erhöhen
        localStorage.setItem("Kontakt", kontakt + 1);

        // Inputfelder leeren
        VorName.value = "";
        NachName.value = "";
        Telefon.value = "";
        Email.value = "";
        Textarea.value = "";
    } else alert("Bitte alle Felder ausfüllen");
};
// Speicher auslesen
const auslesen = () => {
    const kontaktAnzeigen = document.getElementById("kontakteAnzeigen");

    if (kontaktAnzeigen) {
        let kontakt =
            localStorage.getItem("Kontakt") == null
                ? 0
                : Number(localStorage.getItem("Kontakt"))

        if (kontakt > 0) {
            kontaktAnzeigen.innerHTML = "";
            for (let k = 0; k < kontakt; k++) {
                let daten = JSON.parse(localStorage.getItem(`Kontakt-${k}`));

                // HTML Ausgabe
                kontaktAnzeigen.innerHTML += `<div class ="design" id = "eintrag-${k}">
                <div>Vorname: ${daten.Vname}</div>
                <br>
                <div>Nachname: ${daten.Nname}</div>
                <br>
                <div>Telefon: ${daten.Tel}</div>
                <br>
                <div>E-Mail: ${daten.Mail}</div>
                <br>
                <div>Bemerkung: ${daten.Tarea}</div>
               </div>`;
            }
        }
    }
};
// kontakteinträge für die liste bereitstellen
const auslesen2 = () => {
    let ergebnis = [];

    let kontakt =
        localStorage.getItem("Kontakt") == null
            ? 0
            : Number(localStorage.getItem("Kontakt"))

    if (kontakt > 0) {


        for (let k = 0; k < kontakt; k++) {
            let daten = JSON.parse(localStorage.getItem(`Kontakt-${k}`));

            // HTML Ausgabe
            ergebnis.push(daten.Vname + " " + daten.Nname);
        }
    }
    return ergebnis;

};


