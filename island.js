class Island {
    
    constructor (size, climate, populationm, development, danger) {
	this.size = size;
	this.climate = climate;
	this.population = population;
	this.development = development;
	this.danger = danger;
    }

	get size() {
		if(this.size <= 25){
	    	return "small";
		} else if(this.size<= 50){
	    	return "meduim";
		} else if(this.size <= 75){
	    	return "large";
		} else {
	    	return "huge";
		}
	}

    get climate() {
		if(this.climate <= 25){
	    	return "arctic";
		} else if(this.climate <= 50){
	    	return "temprate";
		} else if(this.climate <= 75){
	    	return "arid";
		} else{
	    	return "desert";
		}
	}

    get population() {
		if(this.population <= 25){
	    	return "uninhabited";
		} else if(this.population <= 50){
	    	return "sparse";
		} else if(this.population <= 75){
	    	return "booming";
		} else{
	    	return "metropolitan";
		}
	}

    get development(){
		if(this.development <= 25){
		    return "primative";
		} else if(this.development <= 50){
	    	return "medieval";
		} else if(this.development <= 75){
	    	return "modern";
		} else{
		    return "andvanced";
		}
	}

	get danger(){
		if(this.danger <= 25){
	    	return "tranquil";
		} else if(this.danger <= 50){
	    	return "risky";
		} else if(this.danger <= 75){
	    	return "wild";
		} else{
	    	return "hazardous";
		}
    }
}
