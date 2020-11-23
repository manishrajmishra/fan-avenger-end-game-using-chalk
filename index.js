//assignment: for levelOne

var readlineSync = require("readline-sync");
var quesposition = 0; // Question position variable
var position = 0;
var score = 0; // score counter
console.log("Welcome to Manish Raj's quiz on The Avengers:End-Game Movie");
const levelone = 2;
//Storing the question's of The Avengers:End-Game Movie in Array of Obejects
var EndGameQueslevelone = [{
		question: `
      1. What character saves Tony Stark from space?
      a: Captain Marvel
      b: Captain America
      c: Peter Quill
      d: Thor\n`,
        answer: "a"
	},{
		question: `
      2. What Guardians of the Galaxy characters were left after the snap?
      a: Nebula and Rocket
      b: Peter and Gamora
      c: Rocket and Groot
      d: Drax and Mantis\n`,
        answer: "a"
	},{
		question: `
      3. Where did Thor settle down with the rest of the Asgardians after the initial snap?
      a: Iceland
      b: Sweden
      c: Norway
      d: Denmark\n`,
        answer: "c"
	},{
		question: `
      4. Where did Ant-Man end up after returning from the Quantum Realm?
      a: A storage facility
      b: The middle of the ocean
      c: A rooftop
      d: An underground warehouse\n`, 
        answer: "a"
	},{
		question: `
      5. What was Hawkeye doing in the five-year time span while the Avengers were adjusting to the loss?
      a: Starting a new family
      b: Traveling to other planets
      c: Spending time with Black Widow
      d: Becoming a vigilante\n`,
          answer: "d"
	}];

  var EndGameQuesleveltwo = [{
		question: `
      6. What is the name of Iron Man’s daughter?
      a: Melody
      b: Morgan
      c: Megan
      d: Margaret\n`,
          answer: "b"
	},{
		question: `
      7. After reuniting with Tony and Nebula, how did the team track down Thanos?
      a: Thanos sent them a message
      b: Captain Marvel stumbled upon it
      c: Thanos used the Infinity Stones a second time
      d: Tony Stark invented a tracking device\n`,
          answer: "c"
	},{
		question: `
      8. Why was Tony Stark reluctant to help the team build the time machine?
      a: He didn't want to lose again
      b: He was getting too old
      c: Pepper asked him not to
      d: He didn’t want to jeopardize his family life\n`,
          answer: "d"
	},{
		question: `
      9. Who was responsible for ending Thanos after the team found him on the uninhabited planet?
      a: Iron Man
      b: Gamora
      c: Captain Marvel
      d: Thor\n`,
          answer: "d"
	},{
		question: `
      10. Where did Thor and Rocket travel to find the Reality Stone?
      a: Svartalfheim
      b: Asgard
      c: New York
      d: Sakaar\n`,
          answer: "b"
	}];

// starting the quiz
startingthequiz();  
function startingthequiz() {
    var answer = readlineSync.question("I challenge you to play this quiz if you are a Avenger's Fan? \n Press 0 to exit, or any other key to continue the quiz.  ");
    console.log("------------------------------------");
    var userName = readlineSync.question("What is your name? ");
    if(answer.toLowerCase() !== "0"){
      console.log("Hello " + userName + ", Welcome to the The Avenger's:End-Game Quiz! ");
      console.log("-------------------------------------");
      console.log("Rules are as follows : 1. Every Correct answer will give you 2 marks.\n                       2. Every InCorrect answer will reduce your marks by 1.");
      console.log("-------------------------------------");
      console.log("Welcome " + userName + ", to Level One of the Quiz");
      console.log("-------------------------------------");
      for(var i=0;i<EndGameQueslevelone.length;i++){
        question(EndGameQueslevelone[i].question, EndGameQueslevelone[i].answer);
        console.log("-------------------------------------");
      }
      if(score > levelone){
        var answer = readlineSync.question("You have cleared Level One, Do you want to go for Level Two? \n Press 0 to exit, or any other key to continue the quiz.  ");
        if(answer.toLowerCase() !== "0"){
          console.log("-------------------------------------");
        console.log("Welcome " + userName + ", to Level Two of the Quiz");
        console.log("------------------------------------");
        for(var i=0;i<EndGameQuesleveltwo.length;i++){
          questiontwo(EndGameQuesleveltwo[i].question, EndGameQuesleveltwo[i].answer);
          console.log("-------------------------------------");
        }
      }else{
        console.log("-------------------------------------");
        console.log("Thanks for playing the Quiz.");
        console.log("Your Final Score is  :  "   +   score);
        console.log("-------------------------------------");
        }
      }else{
        console.log("You haven't cleared the Level One. Better Luck Next Time.");
        console.log("-------------------------------------");
      }
    }else{
      console.log("-------------------------------------");
      console.log("Ohh no " + userName +  ", you haven't played the Quiz. It seems you are not the Fan of The Avenger:End-Game! ");
      console.log("Your Score is  :  "   +   score);
      console.log("-------------------------------------");
    }
}

//to check the correctness of question's from level one of the quiz
function question(question, answer) {
	 var answer = readlineSync.question(question);
		if (answer.toLowerCase() == EndGameQueslevelone[quesposition].answer.toLowerCase()) {
			console.log("Correct Option");
      score = score + 2;
			quesposition = quesposition + 1;
      checking();
		} else {
      score = score - 1;
      console.log("InCorrect Option");
      console.log("Correct Option is : " + EndGameQueslevelone[quesposition].answer);
      quesposition = quesposition + 1;
      checking();
		}
}

//to check the correctness of question's from level two of the quiz
function questiontwo(question, answer) {
	 var answer = readlineSync.question(question);
		if (answer.toLowerCase() == EndGameQuesleveltwo[position].answer.toLowerCase()) {
			console.log("Correct Option");
      score = score + 2;
			position = position + 1;
      checkingtwo();
		} else {
      score = score - 1;
      console.log("InCorrect Option");
      console.log("Correct Option is : " + EndGameQuesleveltwo[position].answer);
      position = position + 1;
     checkingtwo();
		}
}

//checking if the quesposition has reached the end of the array of object
function checking(){
  if (EndGameQueslevelone.length == quesposition) {
    console.log("-------------------------------------");
		console.log("Thanks for playing this quiz");
    console.log("Your level One Score is   :   " + score);
	}
}

//checking if the position has reached the end of the array of object
function checkingtwo(){
  if(EndGameQuesleveltwo.length == position){
    console.log("-------------------------------------");
		console.log("Thanks for playing this quiz");
    console.log("Your Final Score after level two is   :   " + score);
  }
}