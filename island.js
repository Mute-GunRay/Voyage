function Island() {
    this.size = convertSizeToText(generateRandomValue());
    this.population = convertPopulationToText(generateRandomValue());
    this.development = convertDevelopmentToText(generateRandomValue());
    this.climate = convertClimateToText(generateRandomValue());
    this.danger = convertDangerToText(generateRandomValue())
}

function generateRandomValue(){
    return Math.floor(Math.random() *  100);
}

function convertSizeToText(value){
    if(value <= 25){
	return "small";
    } else if(value <= 50){
	return "medium";
    } else if(value <= 75){
	return "large";
    } else {
	return "huge";
    }
}

function convertPopulationToText(value){
    if(value <= 25){
	return "sparse";
    } else if(value <= 50){
	return "small";
    } else if(value <= 75){
	return "average";
    } else {
	return "metropolitan";
    }
}

function convertDevelopmentToText(value){
    if(value <= 25){
	return "primative";
    } else if(value <= 50){
	return "medieval";
    } else if(value <= 90){
	return "industrial";
    } else {
	return "advanced";
    }
}

function convertClimateToText(value){
    if(value <= 25){
	return"arctic";
    } else if(value <= 50){
	return "frigid";
    } else if(value <= 75){
	return "temperate";
    } else {
	return "arid";
    } 
}

function convertDangerToText(value){
    if(value <= 25){
	return"tranquil";
    } else if(value <= 50){
	return "calm";
    } else if(value <= 75){
	return "dangerous";
    } else {
	return "savage";
    } 
}

function displayIslandDetails(island){
    let islandClimate = document.getElementById("island-climate");
    let islandPop = document.getElementById("island-population");
    let islandDevelopment = document.getElementById("island-development");
    let islandDanger = document.getElementById("island-danger");

    islandClimate.textContent = `Climate: ${island["climate"]}`;
    islandPop.textContent = `Population: ${island["population"]}`;
    islandDevelopment.textContent = `Development: ${island["development"]}`;
    islandDanger.textContent = `Danger: ${island["danger"]}`;
}

function IslandNode(value, previous, next){
    this.value = value;
    this.previous = previous;
    this.next = next;
}
