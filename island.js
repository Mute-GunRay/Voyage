class Island {

    static size;
    static climate;
    static population;
    static development;
    static danger;
    
    constructor () {
		this.size = evaluateSize(generateRandomValue());
		this.climate = setClimate(generateRandomValue());
		this.population = setPopulation(generateRandomValue());
		this.development = setDevelopment(generateRandomValue());
		this.danger = setDanger(generateRandomValue());
    }

	evaluateSize(randomValue) {
		if(randomValue <= 25){
	    	return "small";
		} else if(randomValue <= 50){
	    	return "meduim";
		} else if(randomValue <= 75){
	    	return "large";
		} else {
	    	return "huge";
		}
	}

    setClimate(randomValue) {
		if(randomValue <= 25){
	    	return "arctic";
		} else if(randomValue <= 50){
	    	return "temprate";
		} else if(randomValue <= 75){
	    	return "arid";
		} else{
	    	return "desert";
		}
	}

    setPopulation(randomValue) {
		if(randomValue <= 25){
	    	return "uninhabited";
		} else if(randomValue <= 50){
	    	return "sparse";
		} else if(randomValue <= 75){
	    	return "booming";
		} else{
	    	return "metropolitan";
		}
	}

    setDevelopment(randomValue){
		if(randomValue <= 25){
		    return "primative";
		} else if(randomValue <= 50){
	    	return "medieval";
		} else if(randomValue <= 75){
	    	return "modern";
		} else{
		    return "andvanced";
		}
	}

	setDanger(randomValue){
		if(randomValue <= 25){
	    	return "tranquil";
		} else if(randomValue <= 50){
	    	return "risky";
		} else if(randomValue <= 75){
	    	return "wild";
		} else{
	    	return "hazardous";
		}
    }
    
    generateRandomValue() {
		return Math.floor(Math.random() * 100);
    }
}
