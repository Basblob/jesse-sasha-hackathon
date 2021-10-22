const spaceTrivia = axios.get("http://jservice.io/api/category?id=4567");

quizEl = document.querySelector(".quiz");

const buildQuizQuestions = () => {
  let quizQuestions = document.querySelectorAll(".quiz__question");
  quizQuestions.forEach((question) => {
    let questionText = document.createElement("p");
    questionText.classList.add("question__text");

    let questionOptions = document.createElement("ul");
    questionOptions.classList.add("question-options");
    for (let i = 0; i < 4; i++) {
      questionOptions.appendChild(document.createElement("li"));
    }
    question.appendChild(questionText);
    question.appendChild(questionOptions);
  });
};

const generate8Questions = (data) => {
  // console.log(data)
}

const fillQuestions = (clues) => {
  let filledQuestions = [];

  clues.forEach((clue) => {
    let question = new Question(clue.answer, [], clue.question)
    filledQuestions.push(question);
  })
  return filledQuestions;
}

//variables do not need to be exported/imported
//all actions done inside of the then()
//maybe delete the other js script and stick with 2?

class Question {
  constructor(rightAnswer, altAnswers, query)
  {
    this.rightAnswer = rightAnswer;
    this.altAnswers = altAnswers;
    this.query = query;
  }
}

spaceTrivia
  .then((response) => {
    const filledQuestions = fillQuestions(response.data.clues);
    console.log(filledQuestions)
    filledQuestions[0].altAnswers = ['phobos', 'europa', 'titan'];
    filledQuestions[1].altAnswers = ['Extra-Vehicular Affair', 'Exo-Vaulting Augment', 'Evil Vacation Abroad']
    filledQuestions[2].altAnswers = ['Buran', 'Apollo', 'Sputnik'];
    filledQuestions[3].altAnswers = ['Yuri Gagarin', 'Anna Kikina', 'Yelena Serova'];
    filledQuestions[4].altAnswers = ['Apollo Lunar Module', 'Gemini', 'Altair'];
    filledQuestions[5].altAnswers = ['Mars', 'Olympus Mons', 'The Shell Gas Station on 6th and Pine']
    filledQuestions[6].altAnswers = []
    // console.log(response.data.clues);
    buildQuizQuestions();
    generate8Questions(response.data.clues);
  })
  .catch((error) => {
    console.log(error);
  });
