// Get the root element of the unordered list
const ulElement = document.querySelector("#questionList");

// Request data from the Trivia API & return this data
const getData = async function(){

  // Define & set API parameters for flexibility
  let typeAnswer        = 'boolean';

  //Build API endpoint
  let getQuestions = `https://opentdb.com/api.php?amount=${questionsAmount}&category=${categoryFilm}&type=${typeAnswer}`;
  let allCategories = "https://opentdb.com/api_category.php";

  // Request 12 questions & answers from the film category
  return fetch(allCategories)
  .then(result => result.json())
  .then(jsonReturnData => {

    // console.log(jsonReturnData);
     log(jsonReturnData);

  });
}

const log = function(data){
  // console.log(data.results);
  console.log(data.trivia_categories);
  console.log(data.trivia_categories[11]);
  console.log(data.trivia_categories[14]);
  // data.results.map(x => {
  //
  //   ulElement.insertAdjacentHTML('beforeend', `<li>${x.question}</li>`);
  //   ulElement.insertAdjacentHTML('beforeend', `<p>${x.correct_answer}</p>`);
  // })

  data.trivia_categories.map((item, key) => {
    ulElement.insertAdjacentHTML('beforeend', `<li class="category" data-category="${item.id}">${item.name}</li>`);
  })
  const categories = document.querySelectorAll('.category')
  categories.forEach((category) => {
    fetch(`url.com/endpoit?category=${category.dataset.category}`)
  });
}



// call funtction to get Data from API
getData();

// data.trivia_categories.map((item, key) => {
//   ulCategoryList.insertAdjacentHTML('beforeend', `<li class="category" data-category="${item.id}">${item.name}</li>`);
// })
// const categories = document.querySelectorAll('.category')
// categories.forEach((category) => {
//   console.log(category.dataset.category)
// });

// const fallBackTriviaCategoryData = {"trivia_categories":[{"id":9,"name":"General Knowledge"},{"id":10,"name":"Entertainment: Books"},{"id":11,"name":"Entertainment: Film"},{"id":12,"name":"Entertainment: Music"},{"id":13,"name":"Entertainment: Musicals & Theatres"},{"id":14,"name":"Entertainment: Television"},{"id":15,"name":"Entertainment: Video Games"},{"id":16,"name":"Entertainment: Board Games"},{"id":17,"name":"Science & Nature"},{"id":18,"name":"Science: Computers"},{"id":19,"name":"Science: Mathematics"},{"id":20,"name":"Mythology"},{"id":21,"name":"Sports"},{"id":22,"name":"Geography"},{"id":23,"name":"History"},{"id":24,"name":"Politics"},{"id":25,"name":"Art"},{"id":26,"name":"Celebrities"},{"id":27,"name":"Animals"},{"id":28,"name":"Vehicles"},{"id":29,"name":"Entertainment: Comics"},{"id":30,"name":"Science: Gadgets"},{"id":31,"name":"Entertainment: Japanese Anime & Manga"},{"id":32,"name":"Entertainment: Cartoon & Animations"}]};

// const fallBackTriviaData = {"response_code":0,"results":[{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"Han Solo&#039;s co-pilot and best friend, &quot;Chewbacca&quot;, is an Ewok.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"The word &quot;Inception&quot; came from the 2010 blockbuster hit &quot;Inception&quot;.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"In the original script of &quot;The Matrix&quot;, the machines used humans as additional computing power instead of batteries.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"Shaquille O&#039;Neal appeared in the 1997 film &quot;Space Jam&quot;.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"Ewan McGregor did not know the name of the second prequel film of Star Wars during and after filming.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"In the original Star Wars trilogy, David Prowse was the actor who physically portrayed Darth Vader.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"medium","question":"Sean Connery wasn&#039;t in &quot;Indiana Jones and the Kingdom of the Crystal Skull&quot; because he found retirement too enjoyable.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"In the movie The Revenant, DiCaprio&#039;s character hunts down the killer of his son.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"medium","question":"Joan Cusack starred in the 2009 disaster movie, &quot;2012&quot;.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"&quot;Minions&quot; was released on the June 10th, 2015.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"easy","question":"Actor Tommy Chong served prison time.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Film","type":"boolean","difficulty":"medium","question":"The movie &quot;Tron&quot; received an Oscar nomination for Best Visual Effects.","correct_answer":"False","incorrect_answers":["True"]}]};
