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

// <!-- Search Field -->
// <input type="text" id="searchCriteria">

// <!-- Button -->
// <input type="submit" id="userSubmit">

// ====================================================================================================

// Namespacing
const searchedWords = {}

// This gets the article element and converts it into a string for ease of searching.
// const textRetrieval = document.getElementsByTagName("article")[0].innerText
const textRetrieval = document.getElementsByTagName("article")[0].innerHTML

// This grabs the user search criteria.
document.getElementById("userSubmit").onclick = function(e) {
    e.preventDefault()   
    const inputText = document.getElementById("searchCriteria")
    const inputValue = inputText.value
    console.log("This is the inputValue:", inputValue)
    console.log("This is the inputValue's length:", inputValue.length)
    
    // Error handling for empty searches
    if(inputValue === ""){
        alert("Please input a search criteria");        
    } else {
        wordSearch(inputValue)  
    }
}

// This function finds all the instances of the user word and puts them into an array.
const matchedWord = function(input) {
    const matchesArray = [...textRetrieval.matchAll(input)]
    return matchesArray
}

// wordSearch is a function that takes the article, spreads it into an array and matches each instance to the userInput
// Each match is a value in a new, single array
// Currently it seems to be acting as an error handler
const wordSearch = function (userInput) {
    const inputText = document.getElementById("searchCriteria")
    const inputValue = inputText.value

    // How exactly does matchedWord work?
    matchedWord(userInput)
    console.log("matchedWord result:", matchedWord)
    if (matchedWord.length == 0){
        alert("No matches found")
    } else {
        textHighlight(textRetrieval, inputValue)
        // console.log(matchedWord)
        
    }
}

// Here, each instance of the iterable must be stored or be able to be called upon for manipulation

// This line of code gets the start of the article to the index[227]
const stringManipulation = function () {
    const substringEnd = matchedWord('nada')[0].index

    // This portion gets everything from the beginning of the article to the start of the searched word.  First instance only.
    console.log(`${textRetrieval.substring(0,substringEnd)}`)
    
    // this grabs the first instance of the match.  NOTE: when the matchedWord function is fired, it creates an ITERABLE containing all the found instances of the search.
    console.log(`${[...textRetrieval.matchAll("nada")][0]}`)

    // The rest of the article AFTER the first instance of the searched word
    console.log(`${textRetrieval.substring(substringEnd+document.getElementById("searchCriteria").value.length)}`)    

    // Complete version
    // console.log(`${textRetrieval.substring(0,substringEnd)}${[...textRetrieval.matchAll("nada")][0]}${textRetrieval.substring(substringEnd+document.getElementById("searchCriteria").value.length)}`)

}

const wordStart = function() {
    
}

const wordEnd = function() {

}

const preText = function() {
    const input = (document.getElementById("searchCriteria")).value
    const preTextEnd = matchedWord(input)[0].index
    // This portion gets everything from the beginning of the article to the start of the searched word.  First instance only.
    console.log(`${textRetrieval.substring(0,preTextEnd)}`)
}

const midText = function() {

}

const postText = function() {

}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Here I need to break down the components to more simpler tasks.
// So far:
// - Retrieved the word.
// - to find ALL the words (target them).
// - store all the words.
// - Error handled blank and 'no matches.'

// The next part has:
// -- style the words.
// -- separate the words from before and after.
// -- style the searched words / also clear the selection with each new search
// -- stitch everything back together.
// -- re-insert it back into the article with the stylings.
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



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
    
}

    // // This portion is to re-add the word with the stylings back into the article.
    // const markup = textRetrieval.split(" ").map(word => word.includes(specificWord) ? `<span class="highlight">${word}</span>` : word).join(' ')
    
    // document.querySelector('article').insertAdjacentHTML('beforeend', `<p>${markup}</p>`)
    // const test = document.querySelector('article')
    // console.log(test)



