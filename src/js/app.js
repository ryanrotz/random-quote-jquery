$(document).ready(function() {
  //e.preventDefault();             //stops the refresh that is the default

var quotes = [
{quote: "I mean it’s one banana Michael. What could it cost, $10?", character: "Lucille"},
{quote: "I'm a monster!", character: "Buster"},
{quote: "Steve Holt!", character: "Steve Holt"},
{quote: "I hear the jury’s still out on science", character: "GOB"},
{quote: "There’s always money in the banana stand", character: "George Sr."},
{quote: "I don’t understand the question and I won’t respond to it.", character: "Lucille"},
{quote: "Do these effectively hide my thunder?", character: "Tobias"}
];




// this will give me a random number between 0 and 6
// randomQuote = quotes[Math.floor(Math.random() * (quotes.length))];
// console.log(quotes[randomQuote]);

ranQuote = function(array) {
  var ranIndex = Math.floor(Math.random() * (quotes.length))
  return quotes[ranIndex].quote;
}


$('#button').click(function() {
  // console.log('hello there');
  var currentQuote = ranQuote(quotes)
  $('#quoteSpot').html(currentQuote);   //now we need to replace .html with something that grabs a random quote
  console.log(currentQuote);
});


});
