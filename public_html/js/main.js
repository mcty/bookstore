/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var newDiv = document.createElement('div');
var imageHere = document.createElement('img');
var textHere = document.createTextNode('The Great Gatsby');
var textHere2 = document.createTextNode('$16.50');
var textHere3 = document.createTextNode('The Great Gatsby by F. Scott Fitzgerald. A truely classic novel.');
var button = document.createElement('button');
button.innerHTML = "Do something";

newDiv.className = "card";
textHere2.className = "price";

imageHere.setAttribute('src', 'imgs/theGreatGatsby');

newDiv.appendChild(imageHere);
newDiv.appendChild(textHere);
newDiv.appendChild(textHere2);
newDiv.appendChild(textHere3);
newDiv.appendChild(button);
addHere.appendChild(newDiv);