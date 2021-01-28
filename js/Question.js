class Question{
constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3')
    this.button1 = createButton('enter');
    this.sentence = createElement('h2');
    this.input1 = createInput('enter the correct answer here');
}
hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
}


display(){
this.title.html("My quiz game");
this.title.position(300,20);
this.input.position(300,200);
this.button.position(450,200);
this.button1.position(2000,2000)
this.input1.position(2000,20000);
this.button.mousePressed(()=>{
this.input.hide();
 this.button.hide();
this.title.hide();
contestant.name = this.input.value();
contestantcount+=1;
contestant.index = contestantcount;
contestant.update();
contestant.updateCount(contestantcount);
this.greeting.html("hello "+contestant.name)
this.greeting.position(300,10); 
this.question.html("Question:- What starts and ends with the letter 'E' but has only 1 letter");   
this.question.position(50,70);
this.option1.html("(1) Everyone");
this.option1.position(50,130);
this.option2.html("(2) envelope");
this.option2.position(50,150);
this.option3.html("(3) Estimate");
this.option3.position(50,170);
this.option4.html("(4) Example");
this.option4.position(50,190);
this.button1.position(500,300);
this.input1.position(330,300);






});
this.button1.mousePressed(()=>{

    this.sentence.html("Correct answer is 2");
    this.sentence.position(330,330,20,20)
    
    
    })
}
}
//estimate,example