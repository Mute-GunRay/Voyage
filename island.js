class Island {

    static size;
    static climate;
    static population;
    static development;
    static danger;
    
    constructor () {
	this.size = setSize(generateRandomValue());
	this.climate = setClimate(generateRandomValue());
	this.population = setPopulation(generateRandomValue());
	this.development = setDevelopment(generateRandomValue());
	this.danger = setDanger(generateRandomValue());
    }

    function setSize(randomValue){
	if(randomValue <= 25){
	    return "small";
	} else if(randomValue <= 50){
	    return "meduim";
	} else if(randomValue <= 75){
	    return "large";
	} else if(randomValue > 75){
	    return "huge";
	}
    }

        function setClimate(randomValue){
	if(randomValue <= 25){
	    return "arctic";
	} else if(randomValue <= 50){
	    return "temprate";
	} else if(randomValue <= 75){
	    return "arid";
	} else if(randomValue > 75){
	    return "desert";
	}
}

        function setPopulation(randomValue){
	if(randomValue <= 25){
	    return "uninhabited";
	} else if(randomValue <= 50){
	    return "sparse";
	} else if(randomValue <= 75){
	    return "booming";
	} else if(randomValue > 75){
	    return "metropolitan";
	}
}

        function setDevelopment(randomValue){
	if(randomValue <= 25){
	    return "primative";
	} else if(randomValue <= 50){
	    return "medieval";
	} else if(randomValue <= 75){
	    return "modern";
	} else if(randomValue > 75){
	    return "andvanced";
	}
	}

        function setDanger(randomValue){
	if(randomValue <= 25){
	    return "tranquil";
	} else if(randomValue <= 50){
	    return "risky";
	} else if(randomValue <= 75){
	    return "wild";
	} else if(randomValue > 75){
	    return "hazardous";
	}
    }
    
    function generateRandomValue(){
	return Math.floor(Math.random() * 100);
    }
}
