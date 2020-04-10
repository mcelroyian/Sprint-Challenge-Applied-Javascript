// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('')



function makeCard(cardData) {
    const make = (el) => document.createElement(el) 
    // <div class="card">
    const card = make('div')
    card.classList.add('card')
    card.textContent = cardData.XXXXXX

    //   <div class="headline">{Headline of article}</div>
    const headline = make ('div')
    headline.classList.add('headline')
    headline.textContent = cardData.XXXXXX
    card.appendChild(headline)

    //   <div class="author">
    const author = make('div')
    author.classList.add('author')
    card.appendChild(author)

    //     <div class="img-container">
    const imgContainer = make('div')
    imgContainer.classList.add('img-container')
    author.appendChild(imgContainer)

    //       <img src={url of authors image} />
    const authorImg = make('img')
    authorImg.src = cardData.XXXXXX
    imgContainer.appendChild(authorImg)
    //     </div>

    //     <span>By {author's name}</span>
    const authorName = make('span')
    authorName.textContent = `By ${cardData.XXXXXX}`
    author.appendChild(authorName)
    //   </div>
    // </div>
    debugger
    return card
}
//makeCard({})