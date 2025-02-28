const persone = [
    { nome: "Kimi", cognome: "Antonelli", eta: 18 },
    { nome: "Dwayne", cognome: "Johnson", eta: 52 },
    { nome: "Zachary", cognome: "Watterson", eta: 12 }
]

for (i = 0; i < persone.length; i++) {
    let personaCorrente = persone[i];
    let etaPersona = personaCorrente.eta;
    let messaggio = `${personaCorrente.nome} ${personaCorrente.cognome} ha ${personaCorrente.eta} anni e`;
    if (etaPersona >= 18) {
        messaggio += " può guidare.";
    } else {
        messaggio += " non può ancora guidare.";
    }
    console.log(messaggio);
}