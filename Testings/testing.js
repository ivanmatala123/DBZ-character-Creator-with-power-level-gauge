/*function Saiyans (saiyanName,saiyanType, powerLevel, proffesion, kills){
    this.name = saiyanName
    this.type = saiyanType;
    this.level= powerLevel;
    this.class = proffesion;
    this.killcount = kills;
}

let saiyan = new Saiyans("Gohan","Human Hybrid", 1000, "Office works", 90000);
let text = "";

for(let keys in saiyan){
    
    text+= `${keys}: ${saiyan[keys]} `;


}
document.getElementById("display").innerHTML = `<h1> ${text} </h1>`;*/

//console.log("Hello World");
let db =[
    {   
        id: 1,
        name: "Goku",
        type: "Saiyan",
        powerLevel: 9000,
    },
    {
        id: 2,
        name: "Vegeta",
        type: "Saiyan",
        powerLevel: 8500,
    },

    {
        id: 3,
        name: "Frieza",
        type: "Alien",
        powerLevel: 12000,
    }
    
]

const check = () => {
    let list = "<ul>";
    db.forEach((character) => {
        if (character.powerLevel > 9000) {
            list += `<li>${character["name"]} has a power level of ${character["powerLevel"]} and has a planet buster power </li>`;
        }else{
            list += `<li>${character["name"]} has a power level of ${character["powerLevel"]} and has power to destroy continents</li>`;
        }
    });
    list += "</ul>";
    document.getElementById("display").innerHTML = list;
}

const addCharacter = (id, name, type, powerLevel) => {
    const newCharacter = {
        id: id + 1,
        name: name,
        type: type,
        powerLevel: powerLevel 
    };
    db.push(newCharacter);
    check();
}
const show = () => {
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let powerLevel = parseInt(document.getElementById("powerLevel").value);
    addCharacter(db.length, name, type, powerLevel);
}