const spaceTrivia = axios.get("http://jservice.io/api/category?id=4567");

quizEl = document.querySelector(".quiz");

const buildQuizQuestions = () => {
  let quizQuestions = document.querySelectorAll(".quiz__question");
  let questionNumber = 0;

  quizQuestions.forEach((question) => {
    let questionNumberAsString = questionNumber + "";
    question.classList.add(questionNumberAsString);
    questionNumber++;
    let questionText = document.createElement("p");
    questionText.classList.add("question__text");

    let questionOptions = document.createElement("ul");
    questionOptions.classList.add("question-options");
    for (let i = 0; i < 4; i++) {
      let li = document.createElement("li");
      li.classList.add(i + 1 + "");
      questionOptions.appendChild(li);
    }
    question.appendChild(questionText);
    question.appendChild(questionOptions);
  });
};

const selectQuestions = (questions) => {
  let selectedQuestions = [];
  let alreadyPicked = [];
  while (alreadyPicked.length < 8) {
    let pick = Math.floor(Math.random() * questions.length);
    if (!alreadyPicked.includes(pick)) {
      alreadyPicked.push(pick);
      selectedQuestions.push(questions[pick]);
    }
  }
  return selectedQuestions;
};

const fillQuestions = (clues) => {
  let filledQuestions = [];

  clues.forEach((clue) => {
    let question = new Question(clue.answer, [], clue.question);
    filledQuestions.push(question);
  });
  return filledQuestions;
};

const fillQuestionsOnPage = (questions) => {
  let onPage = document.querySelectorAll(".quiz__question");
  let count = 0;
  let query = "";
  onPage.forEach((block) => {
    let allAnswers = questions[count].altAnswers;
    let rightAnswer = questions[count].rightAnswer;
    allAnswers.push(rightAnswer);
    query = questions[count].query;
    block.firstChild.innerHTML = query;
    let ul = block.lastChild;
    let indexUl = 0;
    ul.childNodes.forEach((li) => {
      li.innerHTML = allAnswers[indexUl];
      indexUl++;
    });
    count++;
  });
};

//variables do not need to be exported/imported
//all actions done inside of the then()
//maybe delete the other js script and stick with 2?

class Question {
  constructor(rightAnswer, altAnswers, query) {
    this.rightAnswer = rightAnswer;
    this.altAnswers = altAnswers;
    this.query = query;
  }
}

const fillAltAnswers = (filledQuestions) => {
  filledQuestions[0].altAnswers = ["phobos", "europa", "titan"];
  filledQuestions[1].altAnswers = [
    "Extra-Vehicular Affair",
    "Exo-Vaulting Augment",
    "Evil Vacation Abroad",
  ];
  filledQuestions[2].altAnswers = ["Buran", "Apollo", "Sputnik"];
  filledQuestions[3].altAnswers = [
    "Yuri Gagarin",
    "Anna Kikina",
    "Yelena Serova",
  ];
  filledQuestions[4].altAnswers = ["Apollo Lunar Module", "Gemini", "Altair"];
  filledQuestions[5].altAnswers = [
    "Mars",
    "Olympus Mons",
    "The Shell Gas Station on 6th and Pine",
  ];
  filledQuestions[6].altAnswers = ["Omuamua", "Borisov", "Encke"];
  filledQuestions[7].altAnswers = ["Apollo", "SpaceX Dragon", "Orion"];
  filledQuestions[8].altAnswers = ["China", "Taiwan", "Korea"];
  filledQuestions[9].altAnswers = [
    "Kuiper Belts",
    "Belt Buckles",
    "Hawking Radiation",
  ];
  filledQuestions[10].altAnswers = ["Japan", "Korea", "India"];
  filledQuestions[11].altAnswers = ["Saturn", "Neptune", "Venus"];
  filledQuestions[12].altAnswers = ["Mythodia", "Artemis", "Gemini"];
  filledQuestions[13].altAnswers = ["Copernicus", "Schöner", "Da Vinci"];
  filledQuestions[14].altAnswers = ["Gemini", "Traveller", "Pioneer"];
  filledQuestions[15].altAnswers = ["Mars", "The Moon", "Kepler-452b"];
  filledQuestions[16].altAnswers = [
    "Kelly Drown",
    "Amelia Earhart",
    "Betty White",
  ];
  filledQuestions[17].altAnswers = ["Sparrow", "Falcon", "Ostrich"];
  filledQuestions[18].altAnswers = ["Omuamua", "Borisov", "Encke"];
  filledQuestions[19].altAnswers = ["Phobos", "Saturn", "Deimos"];
};

spaceTrivia
  .then((response) => {
    //Create and fill with data the Question objects from api and manually added
    const filledQuestions = fillQuestions(response.data.clues); //returns array of Question Objects with answers and questions
    fillAltAnswers(filledQuestions); //Fills in alt answers for each Question Object
    //Builds question blocks in html
    buildQuizQuestions();
    // returns array of 8 questions randomly
    const selectedQuestions = selectQuestions(filledQuestions);
    fillQuestionsOnPage(selectedQuestions);

    const options = document.querySelectorAll(".question-options");
    options.forEach((opt) => {
      items = opt.childNodes;
      items.forEach((bullet) => {
        bullet.addEventListener("click", (e) => {
          console.log(e.target);
          e.target.classList.toggle("selected");
        });
      });
    });

    const correctAnwser = 4;
    const maxScore = 8;
    let rightAnswers = document.querySelectorAll('.selected');
    let answerList = [];
    answerList.forEach((ans) => {
      if (ans === 4) {
        userScore++;
      }
    });

    

  })
  .catch((error) => {
    console.log(error);
  });
