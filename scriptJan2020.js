
// =======================================
// MVP
// =======================================
// Find the word.
// Add the class to highlight it.
// Get the start of the word
// Get the end of the word

// Get pretext
// Get midtext

// Stitch it all back together
// =======================================


// Name spacing
const wordSearchContainer = {}

// Get the article
const getArticle = document.getElementsByTagName('article')[0].innerHTML

// Get the user input
const userInput = document.getElementById("searchCriteria")

// Find all matches within article
    


document.getElementById("userSubmit").onclick = function(e) {
    e.preventDefault()

    // ***************  change "nada" to userInput
    const findMatch = [...getArticle.matchAll(userInput)]

    if(userInput.value === ""){
        alert("Please input a search criteria")
    } else if(findMatch == 0){
        alert("No matches found")
    } else {
        executeMatchWord(findMatch)
    }
}

const executeMatchWord = function (userWord) {
    // ***************  change "nada" to userInput
    const findMatch = [...getArticle.matchAll(userInput.value)]

    // Save all the matched words in an array
    const matchedWords = []
    findMatch.forEach(function(match, index) {
        // console.log(match)
        // console.log(typeof match)
        matchedWords.push(match) 
        // console.log("MatchedWords Array", matchedWords)
    })
    
    // Get the START (index) of each instance of the word and store it
    const wordStart = []
    matchedWords.forEach(function(word, index){
        // console.log(word.index)
        const wordStartIndex = word.index
        wordStart.push(wordStartIndex)
        // console.log(wordStart)
    })
    
    // Get the end of the word and store it
    const wordEnd = []
    matchedWords.forEach(function(word, index){
        const wordStartIndex = word.index
        const wordEndIndex = word.index + word[0].length
        // console.log("wordStartIndex result:", wordStartIndex)
        // console.log("wordEndIndex result:", wordEndIndex)
        wordEnd.push(wordEndIndex)
    })
    
    // Get the preText.  This is all the text right up to the start of the article, up to the FIRST INSTANCE of the matched word.
    // getArticle.substring(0, index of the first match)
    const preText = getArticle.substring(0, wordStart[0])
    
    // Get the midText.  This is the text between found matches in the article.
    const midText = []
    // console.log(wordEnd[0])
    // console.log(wordStart[1])
    // console.log("Test:", getArticle.substring(wordEnd[0], wordStart[1]))
    
    wordEnd.forEach(function(word, index){
        midText.push(getArticle.substring(wordEnd[index], wordStart[index + 1]))
        // console.log("wordEnd:", wordEnd[index])
        // console.log("wordStart:", wordStart[index])
        // console.log("wordStart + 1:", wordStart[index] + 1)
    })
    
    
    // Add the highlight class
    const highlight = []
    
    matchedWords.forEach(function(word, index){    
        highlight.push(`<span class="highlight">${word}</span>`)
    })
    
    
    // Get the postText.  This is the midtext and the highlighted word stitched together
    const postText = []
    midCount = 0
    while (midCount < findMatch.length) {
        postText.push(highlight[midCount] + midText[midCount])
        midCount++
    }
    
    // Update the article with the highlighted word
    document.querySelector('article').innerHTML = (preText + postText.join(""))
    
    // Utilize RegEx for further search refinement
}

