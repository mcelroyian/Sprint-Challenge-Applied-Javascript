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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        const articles = res.data.articles
        const container = document.querySelector('.cards-container')

        const topics = Object.values(articles)
        topics.forEach(topic => {
            topic.forEach(article => {
                container.appendChild(makeCard(article))
            })
        })
    })
    .catch(err => {
        console.log('Could not get article data')
        debugger
    })



function makeCard(cardData) {
    const make = (el) => document.createElement(el)
    // <div class="card">
    const card = make('div')
    card.classList.add('card')

    //   <div class="headline">{Headline of article}</div>
    const headline = make('div')
    headline.classList.add('headline')
    headline.textContent = cardData.headline
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
    authorImg.src = cardData.authorPhoto
    imgContainer.appendChild(authorImg)
    //     </div>

    //     <span>By {author's name}</span>
    const authorName = make('span')
    authorName.textContent = `By ${cardData.authorName}`
    author.appendChild(authorName)
    //   </div>
    // </div>

    return card
}
//makeCard({})