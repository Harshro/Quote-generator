const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitter = document.getElementById("twitter");
const generate = document.getElementById("new-quote");
// const loader = document.getElementById("loader");


// show loading
// function loading () {
//     loader.hidden = false;
//     quoteContainer = true;
// }

// hide loading
// function hide () {
//     quoteContainer = false;
//     loader.hidden = true;
// }

let apiQuotes = [];
// show one quote at a time
function newQuote () {
    // loading ();
    // pick a random quote
    const quote = apiQuotes[Math.floor (Math.random () * apiQuotes.length)];
   // check if author field is blank or not 
   if (!quote.author) {
     quoteAuthor.textContent = 'Unkown';
   }else {
      quoteAuthor.textContent = quote.author; 
   }

   // check quote length to determining styling
   if (quote.text.length > 80){
       quoteText.classList.add('long-quote');
   }else {
       quoteText.classList.remove('long-quote');
   }
//   set quote hide loader 
    quoteText.textContent = quote.text;
    // hide ();
}
// Getting quotes from api
async function getQuotes () {
    // loading ();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json ();
        newQuote ();
    }catch (error){
        // catch error here
    }
}

// Tweet the quote
 function tweetQuote () {
     const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}
     -${quoteAuthor.textContent}`;
     window.open(tweetUrl, '_blank');
 }

// Event Listener
  generate.addEventListener('click', newQuote );
  twitter.addEventListener('click', tweetQuote);
  
//  on load closing the function
 getQuotes ();
