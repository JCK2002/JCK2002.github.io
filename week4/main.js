var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://jkc2002.github.io/week4/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData);
};
ourRequest.send();