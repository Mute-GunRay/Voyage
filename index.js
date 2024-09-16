// crew members should be composed from the following arrays
// new crew members should become available from events
// crew list should be viewable by clicking on an icon next to the crew size text / on the crew size text itself (perhaps could pop up a small preview modal when hovering)
const personJobArray = [ "swordsman", "shipwright", "navigator", "cook", "doctor", "gunslinger", "musician", "archieologist"];
const personGoalArray = ["growth", "exploration", "wealth", "revenge", "research", "fame"];
const personExperianceArray = ["rookie", "novice", "apprentice", "skilled", "exceptional", "master"];
const personRelationArray = ["rival", "hated", "disliked", "neutral", "liked", "loved", "friend"];
const personReputaionArray = ["unknown", "known", "famous", "notorious", "beloved", "renowned"];

// islands should be composed of various modifiers pulled randomly from the following const arrays
const sizeArray = ["tiny", "small", "medium", "large", "huge"];
const populationArray = ["uninhabited", "inhabited", "sparse", "bustling", "crowded"];
const devlopmentArray = ["undeveloped", "ramshakle", "developing", "developed", "advanced"];
const climateArray = ["tropical", "temperate", "scorching", "chilly", "frozen"];
const biomeArray = ["forest", "grassland", "hills", "mountains", "swamp"];
const dangerArray = ["lethal", "dangerous", "wild", "calm", "peaceful", "joyous"];

// events should be composed of various modifiers pulled randomly from the following const arrays
// actions that can be taken in response will be generated based on the kind of event
// events should have a chance to

const eventArray = ["fight", "monster", "settlment", "government"];
const levelArray = ["deadly", "risky", "gamble", "fortunate", "surething"];
const rewardArray = ["reputation", "treasure", "crew", "supplies"];
const modifierArray = ["low", "medium", "high"];

// players should be forced to stay on each island for a number of days/ticks based on distance to next island
// each day should have a random chance to spawn an event
// distance between islands should be a random number pulled
// players should be able to buy supplies/items on items with a population

// creatures should be composed from the following const arrays
// relevent functions should only be called when an event needs them
const baseArray = ["mammal", "fish", "reptile", "bird", "plant"];
const creatureSizeArray = ["tiny", "small", "meduim", "larg", "huge"];
const creatureTempermentArray = ["friendly", "aggressive", "indifferent", "afraid"];
const creatureToughnessArray = ["flimsy", "weak", "sturdy", "tough", "beastly", "monsterous"];

