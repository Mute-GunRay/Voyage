class Island {
    const  size = []
    const development = []
    const climate = []
    const biome = []
    const danger = []

    static sizeValue;
    static climateValue;
    static biomeValue;
    static populationValue;
    static developmentValue;
    static dangerValue;
    
    constructor () {
	sizeValue = size[Math.floor(Math.random() * size.length)];
	climateValue = climate[Math.floor(Math.random * climate.length)];
	biomeValue = biome[Math.floor(Math.random() * biome.length)];
	climateValue = climate[Math.floor(Math.random() * climate.length)];
	dangerValue  = danger[Math.floor(Math.random() * danger.length)];
    }

    
}
