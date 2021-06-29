# anime-quote-generator
# Project Overview

## Anime Quote Generator

[Anime Quote Generator](https://luzmlx.github.io/anime-quote-generator/)

## Project Description

This website will generate a random Anime Quote once you click the button. If you want a quote from a specific character, then you can use the search bar to generate a quote from that character. 

## API and Data Sample

(For Random Quote)
https://animechan.vercel.app/api/random 
```
{ "anime": "07 Ghost",
    "character": "Frau",
    "quote": "Don’t allow hatred to devour your heart. The one that you care for will only move farther away." 
    }
```
(Search Quote by Anime Character, data sample includes quote from naruto)
https://animechan.vercel.app/api/quotes/character?name=naruto 
```
{
        "anime": "Boruto: Naruto Next Generations",
        "character": "Naruto Uzumaki",
        "quote": "The many lives lost during long years of conflict... because of those selfless sacrifices, we are able to bathe in peace and prosperity now. To ingrain this history within the new generation will be a vital cog in helping to maintain the peace."
    }
  ```
## Wireframes


https://wireframe.cc/vU0buA 


### MVP/PostMVP

#### MVP 

- Use Axios to make a request to AnimeChan API
- Render data on page 
- Create button to allow users to press for new quotes
- Flexbox styles
- Media Query for different screen size
- Add Search bar to search quotes from specific characters
- Call API by Character Name
- Render Quotes by Character Name

#### PostMVP

- Style Random Quote Button
- Style Quotes

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 24| MVP  | Complete
|June 25| Advanced Styling | Complete
|June 28| Presentations | Incomplete

## Priority Matrix


https://ibb.co/ck9Fdv3

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create HTML, JS, CSS sheets and complete needed integrations | H | 1hrs| 1hr | 1hr |
| HTML content | H | 2hrs| 2.5hrs | 2.5hrs |
| CSS Styling | H | 2hrs| 4hrs | 4hrs |
| Add CSS Font | H | 1hrs| .5hrs | .5hrs |
| Add Background Image | H | .5hrs| 1.5hrs | 1.5hrs |
| PseudoCode | H | 2hrs| 2hrs | 2hrs |
| Functional Button | H | 1.5hrs| 1.5hrs | 1.5hrs |
| Flexbox | H | 2hrs| 3hrshrs | 3hrs |
| Axios/Rendering | H | 2hrs| 5hrs | 5hrs |
| Media Query | H | 2hrs| 5hrs | 5hrs |
| Working with API | H | 3hrs| 6hrs | 6hrs |
| Advanced Styling | H | 1.5hrs| 2hrs | 2hrs |
| Add Images to Webpage | H | 2hrs| 1hr | 1hr |
| Render Quotes by Character Name | H | 3hrs| 3.5hrs | 3.5hrs |
| Create Functional Search Button | H | 2hrs| 3hrs | 3hrs |
| Write Function to Clear Previous Output | H | 2.5hrs| 4hrs | 4hrs |
| POST MVP: Style Random Quote Button | L | 1hrs| 1hr | 1hr |
| POSTMVP: Style Quotes | L | 2hrs| N/A |
| Total | H | 33hrs| 48hrs | 48hrs |

## Code Snippet
I know it's a very simple code but this, along with appending to the DOM and the media query were my main struggles. This was the last part of my MVP as I had everything else in tact. But once I was able to figure out this code and where to place the removeRandomSearch function, I felt so much joy. I can say that I now understand how the remove function works. It's a bit easier when applying it to the search bar, but when it came to the random quote button, I had to place it in a specific spot in order for it to work. 

``` function removeQuotes(quoteArray) {
  while (quoteArray.lastChild) {
    quoteArray.removeChild(quoteArray.lastChild)
  }
}
function removeRandomSearch(response) {
  while (response.lastChild) {
    response.removeChild(response.lastChild)
  }
}
```
## Change Log
 I did decide not to style my quotes just because it was too late and I tend to stress for hours over the simplest code. 
 I also chose not to put images  on the sides of the webpage because I felt like it would have ended up looking messy. But I'm content with how simple it looks now, I'm pretty proud of myself for creating a functional website even though it's not the prettiest. 
