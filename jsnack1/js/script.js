const auto = [
    { marca: "Toyota", modello: "Supra mk4", alimentazione: "Benzina" },
    { marca: "FIAT", modello: "Panda 4x4", alimentazione: "Diesel" },
    { marca: "Porsche", modello: "Panamera 4s", alimentazione: "Diesel" },
    { marca: "Ferrari", modello: "296 GTB", alimentazione: "Benzina" },
    { marca: "Porsche", modello: "Tycan Turbo S", alimentazione: "Elettrico" },
    { marca: "Chevrolet", modello: "Camaro", alimentazione: "Benzina" },
    { marca: "Audi", modello: "A3 g-tron", alimentazione: "Metano" },
    { marca: "Dodge", modello: "Charger Daytona", alimentazione: "Elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "GPL" },
    { marca: "FIAT", modello: "500 GPL", alimentazione: "GPL" }
]

const autoBenzina = []
const autoDiesel = []
const autoAltro = []

for (let i = 0; i < auto.length; i++) {
    let autoCorrente = auto[i];
    let alimentazioneCorrente = autoCorrente.alimentazione;
    if (alimentazioneCorrente === "Benzina") {
        autoBenzina.push(autoCorrente);
    } else if (alimentazioneCorrente === "Diesel") {
        autoDiesel.push(autoCorrente);
    } else {
        autoAltro.push(autoCorrente);
    }
}
console.log(autoBenzina);
console.log(autoDiesel);
console.log(autoAltro);