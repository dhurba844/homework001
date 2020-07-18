

var question = document.getElementById("maintextarea");
var beginQuiz;
var textArea = document.getElementById("textarea");


function quizopening() {

    textArea.style.visibility = "hidden"
    

    beginQuiz = document.createElement("BUTTON");
    beginQuiz.innerHTML = "Begin";
    document.body.children[4].appendChild(beginQuiz);
    beginQuiz.addEventListener("click", function () {
        question1();
    });
}
quizopening();

///Timer function

var timeemaining;
var totaltimegiven = 100;
var timer = document.getElementById("timer");

function countdown() {
    timeRemaining = setInterval(function() {
    totaltimegiven --;
    timer.textContent = "Time left: " + totaltimegiven;
        if (totaltimegiven <= 0) {
            clearInterval (totaltimegiven);
            totaltimegiven = 0;
            timer.textContent = "Times up"
            postquiz();

        }
        


    }, 1000);
}



// function to subtract 15 seconds when question is answered incorrectly.

function wrong() {
    totaltimegiven -=15;
}



var a1;
var a2;
var a3;
var a4;

//Questions 
function question1() {
    beginQuiz.remove();
    countdown();
    question.textContent = "Q1-) who is presedent of united stae of america in 2019?";
        
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "linken()";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question2();
        wrong();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "obama()";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question2();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "mr.donal()";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question2();
        correct();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "none of the above";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question2();
        wrong();

    });
}


function question2() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Q2-) who is the founder of amozon?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "billgets";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question3();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "bej jessof";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question3();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "ambani";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question3();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "mark zukarber";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question3();
        wrong();
    });
}


function question3() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Q3-)  where is the mount everest?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "america";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question4();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "nepal";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question4();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "india";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question4();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "korea";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question4();
        wrong();
    });
}


function question4() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Q4-)  what is last anme of ambraham?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "linken";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question5();
        correct();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "trump";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question5();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "quentel";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question5();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "zukarber";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question5();
        wrong();
    });
}


function question5() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Q5-) how many words in english (a to z)?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "20";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
       
        postquiz();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "28";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        postquiz();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "36";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        postquiz();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "26";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        postquiz();
        correct();
        
    });
}
///function to add score
var score = 0
function correct() {
    score += 20;
}
var highscore = document.getElementById("textarea")

function postquiz() {
    
    timer.remove();
    
    a1.remove(); 
    a2.remove();
    a3.remove();
    a4.remove();
    textArea.style.visibility = "visible";
    question.textContent = "Quiz Complete! Your score is " +score+ "%. Please enter your initials below."
    
    submitButton = document.createElement("BUTTON");
    submitButton.innerHTML = "Submit";
    document.body.children[4].appendChild(submitButton);
    submitButton.addEventListener("click", function () {
        localStorage.setItem("user", highscore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
}



var mainText = document.getElementById("maintextarea");
var banner = document.getElementById("banner");


function scorepage() {
    submitButton.remove();
    
    highscore.style.visibility = "hidden";
    banner.textContent = "Scores"
    
    mainText.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("score");
    
    Restart = document.createElement("BUTTON");
    Restart.innerHTML = "Restart Quiz";
    document.body.children[4].appendChild(Restart);
    Restart.addEventListener("click", function () {
        location.reload();
    });

    clearScore = document.createElement("BUTTON");
    clearScore.innerHTML = "Clear Scores";
    document.body.children[4].appendChild(clearScore);
    clearScore.addEventListener("click", function () {
        localStorage.clear();
        question.textContent = "";
    });
}