// crewmate composition arrays
const personJobArray = [ "swordsman", "shipwright", "navigator", "cook", "doctor", "gunslinger", "musician", "archieologist"];
const personGoalArray = ["growth", "exploration", "wealth", "revenge", "research", "fame"];
const personExperianceArray = ["rookie", "novice", "apprentice", "skilled", "exceptional", "master"];
const personRelationArray = ["rival", "hated", "disliked", "neutral", "liked", "loved", "friend"];
const personReputaionArray = ["unknown", "known", "famous", "notorious", "beloved", "renowned"];
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

let voyageButton = document.getElementById("voyage-button");

voyageButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.disabled = true;
    event.target.textContent = "Sailing. . .";
    let distance = Math.floor(Math.random() * 1000000);
    let interval = setInterval(() => {
	document.getElementById("timer").textContent = `${Math.floor(distance / (1000 * 60 * 60 * 24))}d ${Math.floor((distance % (1000 * 60 * 60 * 24))  / (1000  * 60 * 60))}h ${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}m ${Math.floor((distance % (1000 * 60)) / 1000)}s`;
	distance = distance - 1000;

	if(distance < 0){
	    clearInterval(interval);
	    island = new Island();
	    console.log( island.sizeValue);
	    voyageButton.disabled = false;
	    voyageButton.textContent = "Set Sail!"
	}
    }, 1000)
});
