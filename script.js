// MVP
// get the value of the input
// onClick get the value of the input
// Error handling for 'no matches' and blanks/spaces


// STRETCH GOAL
// Go through the results of the array and give the word a background of yellow and text a color of dodgerBlue


// This gets the article element and converts it into a string for ease of searching.
const textRetrieval = document.getElementsByTagName("article")[0].innerText

// This grabs the user search criteria.
document.getElementById("userSubmit").onclick = function(e) {
    e.preventDefault()

    let inputText = document.getElementById("searchCriteria")

    if(inputText.value === ""){
        alert("Please input a search criteria");
    } else {
        wordSearch(inputText.value)
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
    }
}


