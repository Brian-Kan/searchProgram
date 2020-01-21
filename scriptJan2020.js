
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
let getArticle = document.getElementsByTagName('article')[0].innerHTML

// Get the user input
let userInput = document.getElementById("searchCriteria").value

// Find all matches within article

// ***************  change "nada" to userInput
let findMatch = [...getArticle.matchAll("nada")]

// Save all the matched words in an array
let matchedWords = []
matchedWords.push(findMatch)

// Get the start of each instance of the word and store it
let wordStart = []
let wordStartIndex = matchedWords[0][0].index



matchedWords[0][0].index
matchedWords[0][1].index
matchedWords[0][2].index
matchedWords[0][3].index

// Get the end of the word and store it
let wordEnd = []
let wordEndIndex = wordStart + userInput.length


// Get the preText.  This is all the text right up to the start of the article, up to the FIRST INSTANCE of the matched word.
// getArticle.substring(0, index of the first match)

// Get the midText.  This is the text between found matches in the article.

// Get the postText.  This is the text from the end of the last match to the end of the article.





// Render the text


// Add the highlight class


// Utilize RegEx for further search refinement
