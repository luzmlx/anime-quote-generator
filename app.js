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
let quoteData = document.querySelector('.quotes')

function quotes() {
  console.log(searchButton.value)
  characterQuote(searchButton)
}
let characterQuote = async (searchButton) => {
  try {
    characterQuote = await axios.get(`${searchURL}$s=${searchButton.value}`)
  } catch (error) {
    console.log(error)
  }
}