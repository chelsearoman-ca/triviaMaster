

const apiUrl = 'https://opentdb.com/api.php?amount=10&category=25'

fetch(apiUrl) // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json())
.then(function(data) {
    let categories = data.results;
    console.log(data.results)
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});

const page = document.querySelector('#landingPage');

page.addEventListener('click', gonuts)

function gonuts() {
    console.log('WHADDAP')
}