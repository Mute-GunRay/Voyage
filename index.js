let voyageButton = document.getElementById("voyage-button");
let island = new Island();
let previousIsland = new Island();
let nextIsland = new Island();
voyageButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.disabled = true;
    event.target.textContent = "Sailing. . .";
    let distance = Math.floor(Math.random() * 1000000);
    let interval = setInterval(() => {
	document.getElementById("timer").textContent = `${Math.floor(distance / (1000 * 60 * 60 * 24))}d
${Math.floor((distance % (1000 * 60 * 60 * 24))  / (1000  * 60 * 60))}h
${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}m
${Math.floor((distance % (1000 * 60)) / 1000)}s`;
	distance = distance - 1000;

	if(distance < 0){
	    clearInterval(interval);
	    previousIsland = island;
	    console.log(previousIsland);
	    island = nextIsland;
	    console.log(island);
	    nextIsland = new Island();
	    console.log(nextIsland);
	    displayIslandDetails(island);
	    voyageButton.disabled = false;
	    voyageButton.textContent = "Set Sail!";
	}
    }, 1000)
});

