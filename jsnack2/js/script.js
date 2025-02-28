const nomi = ["pippo", "PLUTO", "Paperino"]
const nomiFormattati = []

for (let i = 0; i < nomi.length; i++) {
    let nomeCorrente = nomi[i];
    let nomeFormattato = primaMaiuscola(nomeCorrente);
    nomiFormattati.push(nomeFormattato);
}
console.log(nomiFormattati);

function primaMaiuscola(parola) {
    return parola.charAt(0).toUpperCase() + parola.toLowerCase().slice(1);
}