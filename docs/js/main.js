// Get the root element of the unordered lists
const ulCategoryList  = document.querySelector("#categoryList");
const ulQuestionList  = document.querySelector("#questionList");

// A variabele to store user input
let userCategoryChoice  = "";

// ulQuestionList.textContent  = "";

// Retrieve list item ID that was clicked and proceed with
ulCategoryList.addEventListener("click", function (e) {

  // If it is a list item that has been clicked
  if(e.target.tagName == ("LI")){

    // Assign the list item ID to the variable
    userCategoryChoice = e.target.getAttribute("data-category-id");

    // Remove if any previous questions from the unordered list
    ulQuestionList.textContent = "";
    // let myNode = document.getElementById("questionList");
    // while (myNode.firstChild) {
    //   myNode.removeChild(myNode.firstChild);
    // }

    // call funtction to get Data from API
    getData();

  }
});

// Request data from the Trivia API & return this data
const getData = async function(){

  let questionsAmount   = 12;
  let typeAnswer        = 'boolean';

  //Build API endpoint
  let apiEndpoint = `https://opentdb.com/api.php?amount=${questionsAmount}&category=${userCategoryChoice}&type=${typeAnswer}`;

  // Request 12 questions & answers from the film category
  return fetch(apiEndpoint)
  .then(result => result.json())
  .then(jsonReturnData => {

    // console.log(jsonReturnData);
     renderDataToDom(jsonReturnData);

  });
}

const renderDataToDom = function(data){

  console.log(data.results);

  data.results.map(triviaObject => {

    ulQuestionList.insertAdjacentHTML('beforeend', `<li>${triviaObject.question}</li>`);
    ulQuestionList.insertAdjacentHTML('beforeend', `<p>${triviaObject.correct_answer}</p>`);

  })

}

// Define & set API parameters for flexibility
// let categoryFilm      = 11;
// let categoryMusic     = 12;
// let categoryTv        = 14;
// let categorySports    = 21;
// let categoryAnimals   = 27;
// let categoryVehicles  = 28;
