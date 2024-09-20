// crewmate composition arrays
const personJobArray = [ "swordsman", "shipwright", "navigator", "cook", "doctor", "gunslinger", "musician", "archieologist"];
const personGoalArray = ["growth", "exploration", "wealth", "revenge", "research", "fame"];
const personExperianceArray = ["rookie", "novice", "apprentice", "skilled", "exceptional", "master"];
const personRelationArray = ["rival", "hated", "disliked", "neutral", "liked", "loved", "friend"];
const personReputaionArray = ["unknown", "known", "famous", "notorious", "beloved", "renowned"];
// island composition arrays
const sizeArray = ["tiny", "small", "medium", "large", "huge"];
const populationArray = ["uninhabited", "inhabited", "sparse", "bustling", "crowded"];
const developmentArray = ["undeveloped", "ramshakle", "developing", "developed", "advanced"];
const climateArray = ["tropical", "temperate", "scorching", "chilly", "frozen"];
const biomeArray = ["forest", "grassland", "hills", "mountains", "swamp"];
const dangerArray = ["lethal", "dangerous", "wild", "calm", "peaceful", "joyous"];
// event composition arrays
const eventArray = ["fight", "monster", "settlment", "government"];
const levelArray = ["deadly", "risky", "gamble", "fortunate", "surething"];
const rewardArray = ["reputation", "treasure", "crew", "supplies"];
const modifierArray = ["low", "medium", "high"];
// creature composition arrays
const baseArray = ["mammal", "fish", "reptile", "bird", "plant"];
const creatureSizeArray = ["tiny", "small", "meduim", "larg", "huge"];
const creatureTempermentArray = ["friendly", "aggressive", "indifferent", "afraid"];
const creatureToughnessArray = ["flimsy", "weak", "sturdy", "tough", "beastly", "monsterous"];

function buildIsland(){
    let island = {
	"size": sizeArray[Math.floor(Math.random() * sizeArray.length)],
	"climate": climateArray[Math.floor(Math.random() * climateArray.length)],
	"biome": biomeArray[Math.floor(Math.random() * biomeArray.length)],
	"population": populationArray[Math.floor(Math.random() * populationArray.length)],
	"development": developmentArray[Math.floor(Math.random() * developmentArray.length)],
	"danger": dangerArray[Math.floor(Math.random() * dangerArray.length)],
    };
    let islandBackground = document.getElementById("island-background");
    let islandMiddleground = document.getElementById("island-middleground");
    let islandForeground = document.getElementById("island-foreground");
    islandBackground.className = island["climate"];
    islandMiddleground.className = island["biome"];
    islandForeground.className = `${island["population"]}-${island["development"]}`;
}

let voyageButton = document.getElementById("voyage-button");
voyageButton.addEventListener("click", (event) => {
    event.preventDefault();
    buildIsland();
});
