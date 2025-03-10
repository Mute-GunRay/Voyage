let islandSize = document.getElementById("island-size");
let islandPopulation = document.getElementById("island-population");
let islandDevelopment = document.getElementById("island-development");
let islandClimate = document.getElementById("island-climate");
let islandDanger = document.getElementById("island-danger");

const sizeArray = [];
const populationArray = [];
const developmentArray = [];
const climateArray = [];
const dangerArray = [];

function Island() {
    this.size = sizeArray[generateRandomIndex(sizeArray.length())];
    this.population = populationArray[generateRandomIndex(populationArray.length())];
    this.development = developmentArray[generateRandomIndex(developmentArray.length())];
    this.climate = climateArray[generateRandomIndex(climateArray.length)];
    this.danger = dangerArray[generateRandomIndex(dangerArray.length())];

    islandSize.textContent = `Size: ${this.size}`;
    islandPopulation.textContent = `Population: ${this.population}`;
    islandDevelopment.textContent = `Development: ${this.development}`;
    islandClimate.textContent = `Climate: ${this.climate}`;
    islandDanger.textContent = `Danger: ${this.danger}`;
}

