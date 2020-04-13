/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const slider = document.querySelector('.carousel-container')
slider.appendChild(newCarousel())

let index = 0
let imgArr = [1, 2, 3, 4]
let img = document.querySelector('.carousel').children[imgArr[index]]
img.style.display = 'block'

function updateIndex(dir) {
  if (index === 3 && dir === 1) {
    index = -1
  } else if (index === 0 && dir === -1) {
    index = 4
  }
  img.style.display = null
  index = index + dir
  img = document.querySelector('.carousel').children[imgArr[index]]
  img.style.display = "block"
}

function newCarousel() {
  const make = (el) => document.createElement(el)

  const carousel = make('div')
  carousel.classList.add('carousel')

  const left = make('div')
  left.classList.add('left-button')
  carousel.appendChild(left)

  left.addEventListener('click', e => {
    updateIndex(-1)
  })

  const img1 = make('img')
  img1.src = "./assets/carousel/mountains.jpeg"
  carousel.appendChild(img1)

  const img2 = make('img')
  img2.src = "./assets/carousel/computer.jpeg"
  carousel.appendChild(img2)

  const img3 = make('img')
  img3.src = "./assets/carousel/trees.jpeg"
  carousel.appendChild(img3)

  const img4 = make('img')
  img4.src = "./assets/carousel/turntable.jpeg"
  carousel.appendChild(img4)

  const right = make('div')
  right.classList.add('right-button')
  carousel.appendChild(right)

  right.addEventListener('click', e => {
    updateIndex(1)
  })

  return carousel
}
