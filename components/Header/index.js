// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //helper
    let make = (el) => document.createElement(el)

    //create html elements
    const header = make('div')
    header.classList.add('header')

    const date = make('span')
    date.classList.add('date')
    date.textContent = "SMARCH 28, 2019"
    header.appendChild(date)

    const h1 = make('h1')
    h1.textContent = "Lambda Times"
    header.appendChild(h1)

    const temp = make('span')
    temp.classList.add('temp')
    temp.textContent = "98°"
    header.appendChild(temp)

    return header
}

// Cheeky one liner to invoke function and append to the header container
document.querySelector('.header-container').appendChild(Header())

