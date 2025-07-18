const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },
  {
    id: 3,
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    answer: "France",
  },
  {
    id: 4,
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest",
  },
  {
    id: 5,
    question: "Which is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

let counter = 0;
let corAns = 0;

const ShowQuestions = (Q) => {
  let box = document.querySelector(".box");

  if (counter >= Q.length) {
    let scoreBox = document.querySelector(".score");
    scoreBox.style.opacity = "0";
    let res = `
            <h1>Finish!</h1>
            <h3>Your score is: ${corAns} out of 5</h3>
            <button onclick="window.location.reload()">Restart</button>
        `;
    box.innerHTML = res;
  } else {
    let Que = `
            <div class="question">
                <h2>${Q[counter].id}. ${Q[counter].question}</h2>
            </div>
            <div class="option">
                <div class="options">
                    <input type="radio" name="value" id="1" value="${Q[counter].options[0]}">
                    <label for="1">${Q[counter].options[0]}</label>
                </div>
                <div class="options">
                    <input type="radio" name="value" id="2" value="${Q[counter].options[1]}">
                    <label for="2">${Q[counter].options[1]}</label>
                </div>
                <div class="options">
                    <input type="radio" name="value" id="3" value="${Q[counter].options[2]}">
                    <label for="3">${Q[counter].options[2]}</label>
                </div>
                <div class="options">
                    <input type="radio" name="value" id="4" value="${Q[counter].options[3]}">
                    <label for="4">${Q[counter].options[3]}</label>
                </div>
            </div>
            <div class="btns">
                <button onclick="Sub('${Q[counter].answer}')">Submit</button>
            </div>
        `;
    box.innerHTML = Que;
  }
};

const Sub = (ans) => {
  let selected = document.querySelector('input[name="value"]:checked');

  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (selected.value === ans) {
    corAns++;
  }
  counter++;
  ShowQuestions(quizData);
  ShowScore(quizData);
};

const ShowScore = (Q) => {
  let scoreBox = document.querySelector(".score");

  let score = `
        <h3>${counter} Out of ${Q.length}</h3>
            <p>Score: ${corAns}</p>
    `;
  scoreBox.innerHTML = score;
};

ShowScore(quizData);
ShowQuestions(quizData);
