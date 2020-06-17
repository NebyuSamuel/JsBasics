/*
coding challenge one : BMI


var johnWeight = parseFloat(prompt('Enter john\'s weight in Kg'));
var johnHeight = parseFloat(prompt('Enter john\'s height in Meters'));
var markWeight = parseFloat(prompt('Enter mark\'s weight in Kg'));
var markHeight = parseFloat(prompt('Enter mark\'s height in Meters'))

var johnBMI = (johnWeight) / (johnHeight * johnHeight);
var markBMI = (markWeight) / (markHeight * markHeight); 

var compare = johnBMI > markBMI

console.log('Is john BMI higher than mark?' + ' ' + compare);

*/

/*
coding challenge two : compare scores


var johnTeamScore = (89+109+103) / 3;
var markTeamScore = (100 + 89 + 67) / 3;

if (johnTeamScore > markTeamScore) {
    console.log('John\'s team is the winner');
} else if (johnTeamScore < markTeamScore) {
    console.log('Mark\'s team is the winner');
} else {
    console.log('It is draw');
}

*/

/* Coding challenge three : tip calculator

var bills = [124,48,268];

var tipCalculator = function (bill) {
    var tip = null;
    if (bill < 50) {
        tip = 0.2;
    } else if (bill >= 50 && bill < 200) {
        tip = 0.15;
    } else {
        tip = 0.1;
    }

    return parseInt(tip * bill);
}

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]),tipCalculator(bills[2])];
var total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log('The tips are : ' + tips);
console.log('The total payment including tips will be: ' + total);

*/

/* Coding challenge four : BMI using objects 

var johnWeight = parseFloat(prompt('Enter john\'s weight in Kg'));
var johnHeight = parseFloat(prompt('Enter john\'s height in Meters'));
var markWeight = parseFloat(prompt('Enter mark\'s weight in Kg'));
var markHeight = parseFloat(prompt('Enter mark\'s height in Meters'))

var john = {
    fullname : 'John',
    weight : johnWeight,
    height: johnHeight,
    calcBMI : function(text) {
        return text + this.weight / (this.height * this.height)
    }
};

var mark = {
    fullname : 'Mark',
    weight : markWeight,
    height : markHeight,
    calcBMI : function(text) {
        return text + this.weight / (this.height * this.height)
    }
};

var compare = function(j,m){
    if (j > m) {
        console.log('john has the highest bmi' + ' ' + j);
    } else if (j < m) {
        console.log('mark has the highest bmi' + ' ' + m);
    } else {
        console.log('john and mark have the same bmi')
    }
}

john.bmi = john.calcBMI('wait.......')
mark.bmi = mark.calcBMI('wait.......')

compare(john.bmi,mark.bmi);

*/

/* Coding challenge five : Tip calculator using objects and loops 


var john = {
    bills : [124,48,268,180,42],
    calcTip : function(){
        var tip = null;
        var tips = [];
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50){
                tip = 0.2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200){
                tip = 0.15
            } else {
                tip = 0.1
            }
            tips.push(parseInt(this.bills[i] * tip));
        }
        return tips;
    }
}

var total = [];

var tips = john.calcTip();

var bills = john.bills;


for (var i = 0; i < bills.length; i++){
    total.push(bills[i] + tips[i])
}

console.log('Bills: ' + bills);
console.log('Tips: ' + tips);
console.log('Bills + Tips: ' + total);


*/


/* coding challenge seven: fun quiz */

var Question = function (question,answers,correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};


var q1 = new Question('When was WWI started?',['1989','1915','1939','1945'],1);
var q2 = new Question('What is the day for celebrating Adwa?',['Feb 23','May 1','Mar 8','Sept 11'],0);

var questions = [q1,q2];

Question.prototype.displayQuestion = function(name){
    console.log('Hello ' + name);
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++){
        console.log(i + ' : ' + this.answers[i]);
    }
};

var questionAndAnswer = function () {
    var randomQuestion = Math.floor(Math.random() * questions.length);
    var name = prompt('Enter your name please ');
    questions[randomQuestion].displayQuestion(name);
    var userAnswer = parseInt(prompt('Enter the answer for the question ' + name));
    if (userAnswer === questions[randomQuestion].correctAnswer) {
        return 'Correct Answer!!!!!!!';
    } else {
        return questionAndAnswer();
    }
}


console.log(questionAndAnswer());





































