// Front-end development:
// Basics
// JavaScript – functions
// The following exercise contains the following subjects:
// ● functions
// Instructions
// Please make the following changes to the HTML file while
// navigating the DOM.
// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your
// Note:
// On the next page, you have the HTML code

const ul = document.querySelector('ul');


ul.children[1].innerHTML = 'main title';


const li1 = document.createElement('li');
li1.insertAdjacentText('afterbegin', 'sub title 4');

const ul2 = ul.children[2].children[0];

ul2.append(li1)

ul.children[3].remove();

console.log(ul.firstChild)
ul.children[0].innerHTML = 'Master Of The Dom';

const p = document.querySelector('p');
p.innerHTML = 'my text here';