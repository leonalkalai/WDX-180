/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

let firstParagraph = document.querySelector('p');

let paragraphOne = document.querySelector('#paragraph1');
let paragraphTwo = document.querySelector('#paragraph2');
let paragraphThree = document.querySelector('#paragraph3');
let paragraphFour = document.querySelector('#paragraph4');

let p = document.querySelectorAll('p');

p.forEach( function (p,index) {
    p.setAttribute("id",index);
    p.setAttribute('class',`class${index}`);
    p.setAttribute('data-index',index);
    p.setAttribute('title',p.innerHTML);
    p.style.color = `#${Math.floor(Math.random()*10)}${index}${Math.floor(Math.random()*10)}`;
    p.style.backgroundColor = `#${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`;
    p.setAttribute("style", `background-color: #${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`);
});