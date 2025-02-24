function Event(){
    this.rank = calculateRank();
    this.reward = calculateReward(this.rank);
    this.type = chooseType();
}

function calculateRank(){
    return Math.floor(Math.random()* 4) + 1;
}

function  calculateReward(rank){
    return Math.floor(Math.random() * 100) * rank;
}

function chooseType(){
    return Math.floor(Math.random() * 10);
}
