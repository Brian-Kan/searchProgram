// MVP
// search for a word.
// find all instances of the word in the article.
// target/retrieve that word.
// add stylings to the word in the article.
// Result: The article remains intact and the search word is highlighted.
// - Each search of a word will clear the previous search.


// STRETCH GOAL
// Go through the results of the array and give the word a background of yellow and text a color of dodgerBlue
// onClick get the value of the input
// Error handling for 'no matches' and blanks/spaces


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
// const textRetrieval = document.getElementsByTagName("article")[0].innerText
const textRetrieval = document.getElementsByTagName("article")[0].innerHTML
const inputText = document.getElementById("searchCriteria")

// This grabs the user search criteria.
document.getElementById("userSubmit").onclick = function(e) {
    e.preventDefault()   

    if(inputText.value === ""){
        alert("Please input a search criteria");
        
    } else {
        wordSearch(inputText.value)  
    }
}

// wordSearch is a function that takes the article, spreads it into an array and matches each instance to the userInput
// Each match is a value in a new, single array
// Currently it seems to be acting as an error handler
const wordSearch = function (userInput) {

    // How exactly does matchedWord work?
    const matchedWord = [...textRetrieval.matchAll(userInput)]
    console.log("matchedWord result:", matchedWord)
    if (matchedWord.length == 0){
        alert("No matches found")
    } else {        
        textHighlight(textRetrieval, inputText.value)
        // console.log(matchedWord)
        // textHighlight(textRetrieval, matchedWord)
    }
}


// This function is to highlight ALL instances of the search criteria
const textHighlight = function (entireText, specificWord) {
    // [...textRetrieval.matchAll(userInput)].style.color = "red"
    // this won't work because it is targeting the item in the array instead of the DOM instead.
    // STILL not targeting the DOM element.
    // RegEx coupled with a filter or replace may be the ONLY solution.

    // console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);

    console.log("Searched word:", specificWord)
    console.log("Searched word index [0]:", specificWord[0])
    console.log("Searched word index [0] length:", specificWord[0].length)    
    console.log("Searched word length:", specificWord.length)
    console.log("Article index[383]:", entireText[383])

    console.log("The article includes the specific search word:", entireText.includes(specificWord))
    // console.log(`The word "${specificWord}" ${entireText.includes(specificWord) ? 'is' : 'is not'} in the sentence`)


    // This portion is to re-add the word with the stylings back into the article.
    const markup = textRetrieval.split(" ").map(word => word.includes(specificWord) ? `<span class="highlight">${word}</span>` : word).join(' ')
    
    document.querySelector('article').insertAdjacentHTML('beforeend', `<p>${markup}</p>`)
    // const test = document.querySelector('article')
    // console.log(test)
}


// Methods to review: 

// innerHTML
// subString
// .index
// .join and .split


