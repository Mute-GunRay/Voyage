// crewmate composition arrays
const personJobArray = [ "swordsman", "shipwright", "navigator", "cook", "doctor", "gunslinger", "musician", "archieologist"];
const personGoalArray = ["growth", "exploration", "wealth", "revenge", "research", "fame"];
const personExperianceArray = ["rookie", "novice", "apprentice", "skilled", "exceptional", "master"];
const personRelationArray = ["rival", "hated", "disliked", "neutral", "liked", "loved", "friend"];
const personReputaionArray = ["unknown", "known", "famous", "notorious", "beloved", "renowned"];
// island composition arrays
const sizeArray = ["tiny", "small", "medium", "large", "huge"];
const populationArray = ["uninhabited", "inhabited", "sparse", "bustling", "crowded"];
const devlopmentArray = ["undeveloped", "ramshakle", "developing", "developed", "advanced"];
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

function inputName(event){
    // check against the id of the event target
    // convert target into a text box
    // convert input icon button into a submit button
    // add event listener to submit button
    switch(){
    case 'captain-input':
	break;
    case 'crew-input':
	break;
    case 'ship-input':
	break;
    }
}

function updateName(event){
    event.preventDefault();
    // create span element
    // set textContent to event value
    // remove event target from dom
    // append span element to event target parent container
    // update localStorage state
    
}
function updateStat(stat, change){
    let stat = document.getElementById(stat);
    stat.textContent = stat.textContent + change;
    // update localStorage state
}
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
    let islandMidlleground = document.getElementById("island-middleground");
    let islandForeground = document.getElementById("island-foreground");
    let islandBackground.className = island["climate"];
    let islandMiddleground.className = island["biome"];
    let islandForeground.className = `${island["population"]}-${island["development"]}`;
    
}
function buildPerson(){
    let person = {
	"job": jobArray[Math.floor(Math.random() * jobArray.length)],
	"goal": goalArray[Math.floor(Math.random() * goalArray.length)],
	"skill": skillArray[Math.floor(Math.random() * skillArray.length)],
	"relation": relationArray[Math.floor(Math.random() * relationArray.length)],
	"reputation": reputaionArray[Math.floor(Math.random() * reputationArray.length)],
    };
}
function buildCreature(){
    let creature = {
	"base": "",
	"size": "",
	"temperment": "",
	"toughness": "",
    };
}
function buildEvent(){
    let event = {
	"type": "",
	"difficulty": "",
	"reward": "",
	"modifier": "",
    };
}

/*
  stage 2:
  add functions to change css selectors to create basic island visuals;
  add functions to track time / countdown;
  add functions to travel between islands (pick a distance to next island, then generate next island);
  add functions for exploring islands ("rolls" for events);
  add functions for fighting (creating attack/health/defence etc. for crew and other creatures);
*/

/*
  stage 3: 
  add functions to allow for progression when tab is closed;
  add functions to allow adding/losing crew members;
  add functions to update crewmate stats 
 */
