// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

//Get data
axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then( res => {
            const topics = res.data.topics

            //loop over topics
            topics.forEach( topic => {
                // Create div.tab
                const tab = document.createElement('div')
                tab.classList.add('tab')

                // set textContents to the topic name
                tab.textContent = topic

                //append to .topics
                document.querySelector('.topics').appendChild(tab)
            })
            
        })
        .catch( err => {
            console.log('Whoops, did not get data from Lambda times')
            
        })

