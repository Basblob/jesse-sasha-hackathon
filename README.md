#Project is a trivia game themed around space, space travel, and NASA.

#Uses jService trivia question api to generate quizzes.

##Planning:

2 - 3 pages. 
  - One home page with details about the site and navigation
  - One trivia page where the game will be played.
  - (Potentially) One "practice" page with assets brought in from NASA's api to learn about space.

##Design goals:
  ###Home Page:
      - Long page with concave header/footer.
      - Circular "sun" element after scrolling which contains details and links.
      - A title and logo at the top.
  ###Quiz Page: 
      - No header.
      - rounded boxes that align down the center and (ideally) scroll in from the sides as the user scrolls down the page.
      - Boxes contain multiple choice questions and prompt.
      - 3 MC Qs will be made by us, one will be the correct answer and compared against the value obtained through the API
      - submit button

##Diving Deeper:
  If we have the time we will attempt to implement additional features:
    - A Practice Page which utilizes assets from NASA's API
    - On the home page, a menu drop down shaped like a sun that follows the user down the home page and drops down links with planet bullet points.
    - On the home page, a large transparent arrow that will move to the quiz page.
    - Smooth page transitions, where the pages don't reload, but slide from one to the next.
    - on the quiz page, a drop down labeled similar to "need to change your answers?" next to the submit button that can be scrolled through linking to all the questions.