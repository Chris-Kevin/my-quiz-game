class Quiz{
    constructor(){
    
    
    }
    getState(){
    var gamestateref = database.ref();
    gamestateref.on("value",function(data){
    
    gameState = data.val();
    
    })    
    }
    update(state){
        database.ref('/').update({
            gameState: state
          });
    }
    async start(){
if (gameState === 0){
contestant = new Contestant();
var contestantCountref = await database.ref('contestantCount').once("value");
if(contestantCountref.exists()){
contestantcount = contestantCountref.val();
contestant.getCount();

}
question = new Question();
question.display();
    
}


    }
    }