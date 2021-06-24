// When button is clicked, a random quote pops up
// Remove previous quotes
// When a character name is searched, quote pops up
// Make Sure Previous Quotes are removed
// 

const URL = 'https://animechan.vercel.app/api/random'
const searchURL = `https://animechan.vercel.app/api/quotes/character?name=`

let characterSearch = document.querySelector('#search-name')
let randomSearch = document.querySelector('#random')
let searchButton = document.querySelector('input')
let quoteData = document.querySelector('section')

// let randomQuote = async () => {
//   try { 
//   axios.get(`${URL}`)
//     .then(response => {
//       console.log(response)
//       // const randomQuoteText = document.createElement('h1')
//       // randomQuoteText.textContent = randomQuote.data
//       // quoteData.append(randomQuoteText)
//     });
//   } catch (error) {
//     console.error(error)
// }
// };


// function renderRdQuote(random) {
//   for (let i = 0; i < random.length; i++) {
//     const randomQuoteText = document.createElement('p')
//     randomQuoteText.textContent = random[i].anime
//     quoteData.append(randomQuoteText)
//   }
// }

let characterName = async () => {
  try {
    axios.get(`${searchURL}&s=${searchButton.value}`)
      .then(response => {
        console.log(response)
    })
    
  } catch (error) {
    console.error(error)
  }
}
// quoteData.append(randomQuote)



// function renderRandomQuote(randomQuote) {
//   for (let i = 0; i < randomQuote.length; i++) {
//     const randomQuoteText = document.createElement('div')
//     randomQuoteText.textContent = randomQuote.response
//     quoteData.append(randomQuote)
// //   }
// }
// randomSearch.addEventListener('click', randomQuote)
characterSearch.addEventListener('click', characterName)
//   console.log(searchButton.value)
//   characterQuote(searchButton)
// }
// let characterQuote = async () => {
//   try {
//     const searchURL = `https://animechan.vercel.app/api/quotes/character?name=${searchButton.value}`
//     characterQuote = await axios.get(`${searchURL}`)
//     console.log(characterQuote.data.search)
//     renderList(characterQuote.data.search)
//   } catch (error) {
//     console.log(error)
//   }
// }

// function renderQuote(quote) {
//   for (let i = 0; i < quote.length; i++) {
     
//   }
// }

// characterSearch.addEventListener('click',  searchButton)