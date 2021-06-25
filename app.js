// When button is clicked, a random quote pops up
// Remove previous quotes
// When a character name is searched, quote pops up
// Make Sure Previous Quotes are removed
// 

const URL = 'https://animechan.vercel.app/api/random'
// const searchURL = `https://animechan.vercel.app/api/quotes/character?name=`

let characterSearch = document.querySelector('#search-name')
let randomSearch = document.querySelector('#random')
// let input = document.querySelector('input')
// let searchValue = input.value
let form = document.querySelector('form')
let section = document.querySelector('section')

const randomQuote = async () => {
  try {
    const response = await axios.get(`${URL}`)
    console.log(response)
    // createQuoteDiv
    let quoteDiv = document.createElement('div')
    section.append(quoteDiv)
    // Append QuoteDiv to section
    const anime = document.createElement('p')
    anime.textContent = `Anime: ${response.data.anime}`
    // Append anime to QuoteDiv
    quoteDiv.append(anime)

  // Append Character and Quote
    const animeCharacter = document.createElement('p')
    animeCharacter.textContent = `Character: ${response.data.character}`
    quoteDiv.append(animeCharacter)

    // Append Quote
    const getAnimeQuote = document.createElement('p')
    getAnimeQuote.textContent = `"${response.data.quote}"`
    quoteDiv.append(getAnimeQuote)
   
    
    return response
  } catch (error) {
    console.error(error)
}
};


// Include verb in functions


const inputCharacterName = async (searchValue) => {
  console.log(searchValue)
  try {
   const response = await axios.get(`https://animechan.vercel.app/api/quotes/character?name=${searchValue}`)
    console.log(response)
    getAnimeData(response.data)
   
   
    return response
  } catch (error) {
    console.error(error)
  }
}
const getAnimeData = (quoteArray) => {
  for (let i = 0; i < quoteArray.length; i++) {
    let quoteDiv = document.createElement('div')
    section.append(quoteDiv)
    const animeName = document.createElement('p')
    animeName.textContent = `Anime: ${quoteArray[i].anime}`
    quoteDiv.append(animeName)
    // Append Character Name and quote
    const characterName = document.createElement('p')
    characterName.textContent = `"Character: ${quoteArray[i].character}`
    quoteDiv.append(characterName)
    // Append Quote
    const characterQuote = document.createElement('p')
    characterQuote.textContent = `"${quoteArray[i].quote}"`
    quoteDiv.append(characterQuote)
  }
}
// when search remove last
// function remove() {
//   while (randomQuote.lastChild) {
//     randomQuote.removeChild(randomQuote.lastChild)
//   }
// }



randomSearch.addEventListener('click', randomQuote)
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchValue = document.querySelector('input').value
  inputCharacterName(searchValue)
})



