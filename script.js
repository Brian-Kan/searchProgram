// MVP
// get the value of the input
// onClick get the value of the input
// Error handling for 'no matches' and blanks/spaces


// STRETCH GOAL
// Go through the results of the array and give the word a background of yellow and text a color of dodgerBlue



// ====================================================================================================
// ***** NOTE TO SELF *****
//====================================================================================================

// inputText only grabs the word in the search bar.  Below at inputText.value the value is grabed.
// the wordSearch function matches the inputText.value against all instances of that word in the article.
// There is a difference between the word in the article (DOM) vs the word in the array that matchAll puts it into. 
// PROBLEM: As the word is found in the DOM i need the color to change to dodger blue and the background-color to turn yellow

// how to create a dom element.  Regardless, something in the dom needs to be targeted (GET).  From there we can crawl through and be as specfic as necessary.

// ====================================================================================================

// Namespacing
const searchedWords = {}

// This gets the article element and converts it into a string for ease of searching.
const textRetrieval = document.getElementsByTagName("article")[0].innerText
let inputText = document.getElementById("searchCriteria")

// This grabs the user search criteria.
document.getElementById("userSubmit").onclick = function(e) {
    e.preventDefault()

    if(inputText.value === ""){
        alert("Please input a search criteria");
    } else {
        wordSearch(inputText.value)
        textHighlight(inputText.value)
    }
}

// This matches the user search criteria and matches it against every word in the document.
// Each match is a value in a single array
const wordSearch = function (userInput) {
    const matchedWord = [...textRetrieval.matchAll(userInput)]

    if (matchedWord.length == 0){
        alert("No matches found")
    } else {        
        console.log(matchedWord)
        textHighlight(textRetrieval, inputText)
    }
}

const textHighlight = function (entireText, specificWord) {
    // [...textRetrieval.matchAll(userInput)].style.color = "red"
    // this won't work because it is targeting the item in the array instead of the DOM instead.
    // STILL not targeting the DOM element.
    // RegEx coupled with a filter or replace may be the ONLY solution.

    // console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);

    console.log(entireText.includes(specificWord))

}

