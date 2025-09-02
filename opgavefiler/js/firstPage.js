const { createElement } = require("react");

/* Opgave 1*/
const navn = "Miranda";
const year = "4";
const besked = `Hej ${navn} du har nu arbejdet i vores virksonmed i ${year} år.`;
document.getElementById("message").innerHTML = (besked)

// din kode her

const myData = [
    {
        "navn": "T-shirt",
        "beskrivelse": "En t-shirt lavet af bomuld",
        "pris": 99
    },
    {
        "navn": "Jeans",
        "beskrivelse": "Blå denim jeans med straight fit",
        "pris": 299
    },
    {
        "navn": "Hættetrøje",
        "beskrivelse": "En grå hættetrøje med lynlås",
        "pris": 199
    }
]
const produktList = document.getElementById("produktListe")
let html = "";
myData.forEach((produkt) => {
    html += `<article class = "produkt">
    <h2>${produkt.navn}</h2>
    <p>${produkt.beskrivelse}</p>
    <p>Pris: ${produkt.pris} kr.</p>
    </article>`
});
produktList.innerHTML = html;
/* Opgave 2*/


// din kode her



/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const myFormFelter = myForm.querySelectorAll('input');
    myPersons.push({
        navn: myFormFelter[0].value,
        alder: myFormFelter[1].value,
    });
})

console.log(myPersons)

const sorteretMyPersons = sorterEfterAlder (myPersons);
showList (sorteretMyPersons);

functionshowList (sorteretMyPersons) {
    let html = '';
    sorteretMyPersons.map ((person) => {
        html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
        });
        personList.innerHTML = html;
        }
    function sorterEfterAlder(myPersons) {
        return myPersons.sort((a, b) => a.alder - b.alder);
        }