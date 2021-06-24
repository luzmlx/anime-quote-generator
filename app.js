// When button is clicked, a random quote pops up
// Remove previous quotes
// When a character name is searched, quote pops up
// Make Sure Previous Quotes are removed
// 

const URL = 'https://animechan.vercel.app/api/random'
const searchURL = `https://animechan.vercel.app/api/quotes/`

let characterSearch = document.querySelector('#search-name')
let randomSearch = document.querySelector('#random')
let searchButton = document.querySelector('input')
let quoteData = document.querySelector('section')

let randomQuote = async () => {
  try { 
   await axios.get(`${URL}`)
      .then(response => {
        console.log(response)
        return response;
      
        // const randomQuoteText = document.createElement('h1')
        // randomQuoteText.textContent = randomQuote.data
        // quoteData.append(randomQuoteText)
      });
    // renderRdQuote(randomQuote.data)
  } catch (error) {
    console.error(error)
}
};


// function renderRdQuote(random) {
//   for (let i = 0; i < random.length; i++) {
//     const randomQuoteText = document.createElement('p')
//     randomQuoteText.textContent = random.data.anime
//     quoteData.append(randomQuoteText)
//   }
// }

// function fetchCharaterQuote() {
//   fetch(`${searchURL}character?name=${searchButton.value}`)
//     .then(response => {
//       console.log(response)
//       return response.json();
//     })
//     .then(data => {
//     console.log(data.anime)
//     }).catch(error => {
//     console.log(error)
//   })
// }


let characterName = async () => {
  try {
   await axios.get(`${searchURL}`)
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
randomSearch.addEventListener('click', randomQuote)
characterSearch.addEventListener('click', characterName)



// function quotes() {
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