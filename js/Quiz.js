class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();
    //write code to change the background color here
     background("orange");
    //write code to show a heading for showing the result of Quiz
     textSize(30);
     text("Result Of The Quiz",340,50);
     text("-----------------------------------------------------------------",320,65);
    //call getContestantInfo( ) here
     Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
     if(allContestants!==undefined)
     {
       var displayAnswer = 230;
       fill("blue");
       textSize(20);
       text("Correct Answer Is In Green",130,120);
     }
     for(var plr in allContestants)
     {
       var Ca = "2";
       if(Ca===allContestants[plr].answer)
       {
         fill("green");
       }
       else{
         fill("red");
       }
       displayAnswer+=30;
       text(allContestants[plr].name+": "+allContestants[plr].answer,250,displayAnswer)
     }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
