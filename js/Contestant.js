class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('playerCount');
      contestantCountRef.on("value",(data)=>{
        contestantcount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantcount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getcontestantInfo(){
      var contestantInfoRef = database.ref('players');
    contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  