//enter your vue here

new Vue({
  el: '#root',
  data: {
    message: 'Find the Wisdom You Seek',
    name: '',
    seen: false
  },
  //make the call to the api here

});


document.getElementById("getQuote").addEventListener("click", displayQuote) 


// Create a request variable and assign a new XMLHttpRequest object to it.

function displayQuote() {
  var xhReq = new XMLHttpRequest();
  xhReq.open("GET", 'https://api.quotable.io/random', false);
  xhReq.send(null);
  var jsonObject = JSON.parse(xhReq.responseText);
  console.log(jsonObject)
  document.getElementById("quote").innerHTML = jsonObject.content + " -" + jsonObject.author
}




