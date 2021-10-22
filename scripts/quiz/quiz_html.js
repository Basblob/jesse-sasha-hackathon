quizEl = document.querySelector(".quiz");

const buildQuizQuestion = (questionNumber) => {
  quizQuestion = document.createElement("div");
  quizQuestion.classList.add("quiz__question");
};

//variables do not need to be exported/imported
//all actions done inside of the then()
//maybe delete the other js script and stick with 2?
spaceTrivia
  .then((response) => {
    // console.log(response.data);
    quizEl = document.querySelector(".quiz");
    let testDiv = document.createElement("div");
    testDiv.classList.add("test");
    testDiv.innerText = response.data.clues[0].question;
    quizEl.appendChild(testDiv);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(spaceTrivia.data.clues[0].question);
