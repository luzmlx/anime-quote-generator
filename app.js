// When button is clicked, a random quote pops up
// Remove previous quotes
// When a character name is searched, quote pops up
// Make Sure Previous Quotes are removed
// 

const URL = 'https://animechan.vercel.app/api/random'
// const searchURL = `https://animechan.vercel.app/api/quotes/character?name=${searchButton.value}`

let characterSearch = document.querySelector('#search-name')
let randomSearch = document.querySelector('#random')
let searchButton = document.querySelector('input')
let quoteData = document.querySelector('.quotes')

let randomQuote = () => {
  axios.get(`${URL}`)
    .then(response => {
      console.log(response)
    });
};

randomSearch.addEventListener('click', randomQuote)

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