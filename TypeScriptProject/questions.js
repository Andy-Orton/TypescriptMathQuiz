var questionTemplate = /** @class */ (function () {
    function questionTemplate(question, answer) {
        this.answer = answer;
        this.question = question;
    }
    questionTemplate.prototype.questionText = function () {
        return this.question;
    };
    questionTemplate.prototype.answerText = function () {
        return this.answer;
    };
    return questionTemplate;
}());
var listOfQuestions = new Array();
function showAnswers() {
    var button = document.querySelector('#answerButton');
    button.disabled = true;
    var i = 0;
    var answerDiv = document.querySelector('#answer');
    listOfQuestions.forEach(function (element) {
        var p = document.createElement('li');
        p.textContent = element.answerText();
        var inputtedAnswer = document.querySelector('#question' + i);
        if (inputtedAnswer.value == listOfQuestions[i].answerText()) {
            p.style.color = "green";
        }
        else {
            p.style.color = "red";
        }
        p.className += 'list-group-item';
        answerDiv.appendChild(p);
        i++;
    });
}
window.onload = function () {
    var button = document.querySelector('#answerButton');
    button.addEventListener('click', showAnswers);
    var q1 = new questionTemplate("2+2", "4");
    var q2 = new questionTemplate("Find dy/dx of y = x^2", "2x");
    var q3 = new questionTemplate("Solve the system of equations: \ny = x y = 2x", "y=0 x=0");
    listOfQuestions.push(q1);
    listOfQuestions.push(q2);
    listOfQuestions.push(q3);
    var questDiv = document.querySelector("#questions");
    var i = 0;
    listOfQuestions.forEach(function (element) {
        var p = document.createElement("li");
        p.className += 'list-group-item';
        p.textContent = element.questionText();
        var br = document.createElement("br");
        p.appendChild(br);
        var qField = document.createElement('input');
        qField.id += 'question' + i.toString();
        p.appendChild(qField);
        questDiv.appendChild(p);
        i++;
    });
};
