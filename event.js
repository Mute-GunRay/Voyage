function event(){
    this.rank;
    this.reward;
    this.type;
}

function calculateRank(){
    return Math.floor(Math.random()* 4);
}

function  calculateReward(rank){
    return Math.floor(Math.random() * 100) * rank;
}

function chooseType(){
    return Math.floor(Math.random() * 10);
}
