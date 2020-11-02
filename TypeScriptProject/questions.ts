class questionTemplate {
    question: string;
    answer: string;
    constructor (question: string, answer: string){
        this.answer = answer;
        this.question = question;
    }
    questionText() {
        return this.question;
    }

    answerText() {
        return this.answer;
    }
}

let listOfQuestions = new Array();

function showAnswers(){
    let button = document.querySelector('#answerButton') as HTMLInputElement;
    button.disabled = true;
    let i : number = 0;
    let answerDiv = document.querySelector('#answer') as HTMLElement;
    listOfQuestions.forEach(element => {
        const p = document.createElement('li');
        p.textContent = element.answerText();
        let inputtedAnswer = document.querySelector('#question'+i) as HTMLInputElement;
        if(inputtedAnswer.value == listOfQuestions[i].answerText()){
            p.style.color = "green";
        }
        else {
            p.style.color = "red";
        }
        p.className+='list-group-item';
        answerDiv.appendChild(p);
        i++
    });
}


window.onload = function (){
    let button = document.querySelector('#answerButton') as HTMLElement;
    button.addEventListener('click', showAnswers);
    let q1 = new questionTemplate("2+2", "4");
    let q2 = new questionTemplate("Find dy/dx of y = x^2", "2x");
    let q3 = new questionTemplate("Solve the system of equations: \ny = x y = 2x", "y=0 x=0");
    listOfQuestions.push(q1);
    listOfQuestions.push(q2);
    listOfQuestions.push(q3);
    let questDiv = document.querySelector("#questions") as HTMLElement;
    let i :number = 0;
    listOfQuestions.forEach(element => {
        const p = document.createElement("li");
        p.className+='list-group-item';
        p.textContent=element.questionText();
        const br = document.createElement("br");
        p.appendChild(br);
        const qField = document.createElement('input');
        qField.id += 'question' + i.toString();
        p.appendChild(qField);
        questDiv.appendChild(p);
        i++;
    });
}