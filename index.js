let voyageButton = document.getElementById("voyage-button");
let island = new Island();
  
voyageButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.disabled = true;
    event.target.textContent = "Sailing. . .";
    runInterval();
});

function runInterval(){
    let distance = Math.floor(Math.random() * 1000000);
    let interval = setInterval(() => {
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000)
	document.getElementById("timer").textContent = `${days}:${hours}:${minutes}:${seconds}`;
	distance = distance - 1000;
	if(distance < 0){
	    clearInterval(interval);
	    island =  new Island();
	    voyageButton.disabled = false;
	    voyageButton.textContent = "Set Sail!";
	}
    }, 1000)
}

