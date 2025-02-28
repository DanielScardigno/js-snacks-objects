const animali = [
    { nome: "Lupo", famiglia: "Canidi", classe: "Mammiferi" },
    { nome: "Volpe", famiglia: "Canidi", classe: "Mammiferi" },
    { nome: "Blue-jay", famiglia: "Corvidi", classe: "Uccelli" }
]

const mammiferi = []

for (let i = 0; i < animali.length; i++) {
    let animaleCorrente = animali[i];
    let classeAnimale = animaleCorrente.classe;
    if (classeAnimale === "Mammiferi") {
        mammiferi.push(animaleCorrente);
    }
}
console.log(mammiferi);