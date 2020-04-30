/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function searchFunction(){
   var input, filter, card, title, b, c, d, e, f, g, i, txtValueTitle, txtValueAuthor, txtValueTag, txtValueISBN10, txtValueISBN13, txtValueTopic;
   input = document.getElementById('myInput');
   filter = input.value.toUpperCase();
   card = document.getElementsByClassName("col-sm-4");
   
   for(i=0;i<card.length;i++){
       b = card[i].getElementsByClassName("title")[0];
	   c = card[i].getElementsByClassName("author")[0];
	   d = card[i].getElementsByClassName("tag")[0];
	   e = card[i].getElementsByClassName("isbn10")[0];
	   f = card[i].getElementsByClassName("isbn13")[0];
	   g = card[i].getElementsByClassName("topic")[0];
       txtValueTitle = b.textContent || b.innerText;
	   txtValueAuthor = c.textContent || c.innerText;
	   txtValueTag = d.textContent || d.innerText;
	   txtValueISBN10 = e.textContent || e.innerText;
	   txtValueISBN13 = f.textContent || f.innerText;
	   txtValueTopic = g.textContent || g.innerText;
       if(txtValueTitle.toUpperCase().indexOf(filter) > -1)
	   {
           card[i].style.display="";
       }
	   else if(txtValueAuthor.toUpperCase().indexOf(filter) > -1)
	   {
           card[i].style.display="";
       }
		else if(txtValueTag.toUpperCase().indexOf(filter) > -1)
	   {
           card[i].style.display="";
       }	 
		else if(txtValueISBN10.toUpperCase().indexOf(filter) > -1)
	   {
           card[i].style.display="";
       }	
		else if(txtValueISBN13.toUpperCase().indexOf(filter) > -1)
	   {
           card[i].style.display="";
       }
	   else if(txtValueTopic.toUpperCase().indexOf(filter) > -1)
	   {
           card[i].style.display="";
       }
	   else 
	   {
           card[i].style.display="none";
       }
   }
    
}

//
//  THIS IS THE DROP DOWN FOR SORT ---------------------------------------
//
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ----------------------------------------------------------------------

//
//  THIS IS THE DROP DOWN FOR Browse ------------------------------------
//
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function drop1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ----------------------------------------------------------------------

function sortAZ()
{
	card = document.getElementsByClassName("col-sm-4");
	//for(i = 0; i < card.length; i++)
	//{
		//console.log(card[i].getElementsByClassName("title")[0].textContent || card[i].getElementsByClassName("title")[0].innerText);
		//if (card[i].style.display !== "none")
		//{
			//console.log(card[i].getElementsByClassName("title")[0].textContent || card[i].getElementsByClassName("title")[0].innerText + " is hidden");
		//}
	//}
	
	
	var card, x, y, xTitle, yTitle, smallest, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			x = card[i].getElementsByClassName("title")[0];
			xTitle = x.textContent || x.innerText;
			//console.log(xTitle + " style = " + card[i].style.display);
			smallest = xTitle;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					//console.log("Subround " + (j) + "\n")
					y = card[j].getElementsByClassName("title")[0];
					yTitle = y.textContent || y.innerText;
					//console.log("Comparing " + xTitle + " to " + yTitle);
					if(yTitle < smallest)
					{
						
						smallest = yTitle;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			//console.log(largestHTML);
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
	drop();
	
}

function sortZA()
{
	var card, x, y, xTitle, yTitle, smallest, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			x = card[i].getElementsByClassName("title")[0];
			xTitle = x.textContent || x.innerText;
			//console.log(xTitle + " style = " + card[i].style.display);
			smallest = xTitle;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					//console.log("Subround " + (j) + "\n")
					y = card[j].getElementsByClassName("title")[0];
					yTitle = y.textContent || y.innerText;
					//console.log("Comparing " + xTitle + " to " + yTitle);
					if(yTitle > smallest)
					{
						
						smallest = yTitle;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
drop();
}

function sortPriceLowToHigh()
{
	var card, x, y, xTitle, yTitle, smallest, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			x = card[i].getElementsByClassName("price")[0];
			xTitle = x.textContent || x.innerText;
			console.log(xTitle + " style = " + card[i].style.display);
			smallest = xTitle;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					console.log("Subround " + (j) + "\n")
					y = card[j].getElementsByClassName("price")[0];
					yTitle = y.textContent || y.innerText;
					console.log("Comparing " + xTitle + " to " + yTitle);
					yTitle = yTitle.replace("$", "");
					smallest = smallest.replace("$", "");
					console.log(yTitle);
					if(parseFloat(yTitle) < parseFloat(smallest))
					{
						
						smallest = yTitle;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
 
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
drop();
}

function sortPriceHighToLow()
{
	var card, x, y, xTitle, yTitle, smallest, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			x = card[i].getElementsByClassName("price")[0];
			xTitle = x.textContent || x.innerText;
			console.log(xTitle + " style = " + card[i].style.display);
			smallest = xTitle;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					console.log("Subround " + (j) + "\n")
					y = card[j].getElementsByClassName("price")[0];
					yTitle = y.textContent || y.innerText;
					console.log("Comparing " + xTitle + " to " + yTitle);
					yTitle = yTitle.replace("$", "");
					smallest = smallest.replace("$", "");
					console.log(yTitle);
					if(parseFloat(yTitle) > parseFloat(smallest))
					{
						
						smallest = yTitle;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
drop();
}

function sortRatingHighToLow()
{
	var card, x, y, xTitle, yTitle, smallest, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			x = card[i].getElementsByClassName("rating")[0];
			xTitle = x.textContent || x.innerText;
			console.log(xTitle + " style = " + card[i].style.display);
			smallest = xTitle;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					console.log("Subround " + (j) + "\n")
					y = card[j].getElementsByClassName("rating")[0];
					yTitle = y.textContent || y.innerText;
					console.log("Comparing " + xTitle + " to " + yTitle);
					yTitle = yTitle.replace("$", "");
					smallest = smallest.replace("$", "");
					console.log(yTitle);
					if(parseFloat(yTitle) > parseFloat(smallest))
					{
						
						smallest = yTitle;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
drop();
}

function sortRatingLowToHigh()
{
	var card, x, y, xTitle, yTitle, smallest, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			x = card[i].getElementsByClassName("rating")[0];
			xTitle = x.textContent || x.innerText;
			console.log(xTitle + " style = " + card[i].style.display);
			smallest = xTitle;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					console.log("Subround " + (j) + "\n")
					y = card[j].getElementsByClassName("rating")[0];
					yTitle = y.textContent || y.innerText;
					console.log("Comparing " + xTitle + " to " + yTitle);
					yTitle = yTitle.replace("$", "");
					smallest = smallest.replace("$", "");
					console.log(yTitle);
					if(parseFloat(yTitle) < parseFloat(smallest))
					{
						
						smallest = yTitle;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
drop();
}



function sortAZAuthor()
{
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length; i++)
	{
		console.log(card[i].getElementsByClassName("title")[0].textContent || card[i].getElementsByClassName("title")[0].innerText);
		if (card[i].style.display !== "none")
		{
			console.log(card[i].getElementsByClassName("title")[0].textContent || card[i].getElementsByClassName("title")[0].innerText + " is hidden");
		}
	}
	
	
	var card, x, y, xTitle, yTitle, smallest, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			x = card[i].getElementsByClassName("author")[0];
			xTitle = x.textContent || x.innerText;
			console.log(xTitle + " style = " + card[i].style.display);
			smallest = xTitle;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					console.log("Subround " + (j) + "\n")
					y = card[j].getElementsByClassName("author")[0];
					yTitle = y.textContent || y.innerText;
					console.log("Comparing " + xTitle + " to " + yTitle);
					if(yTitle < smallest)
					{
						
						smallest = yTitle;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
drop();
}

function sortZAAuthor()
{
	var card, x, y, xTitle, yTitle, smallest, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			x = card[i].getElementsByClassName("author")[0];
			xTitle = x.textContent || x.innerText;
			console.log(xTitle + " style = " + card[i].style.display);
			smallest = xTitle;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					console.log("Subround " + (j) + "\n")
					y = card[j].getElementsByClassName("author")[0];
					yTitle = y.textContent || y.innerText;
					console.log("Comparing " + xTitle + " to " + yTitle);
					if(yTitle > smallest)
					{
						
						smallest = yTitle;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
drop();
}

function sortDateNewest()
{
	var card, xY, xM, xD, yY, yM, yD, xTitleY, xTitleM, xTitleD, yTitleY, yTitleM, yTitleD, smallest, smallestY, smallestM, smallestD, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			xY = card[i].getElementsByClassName("dateY")[0];
			xM = card[i].getElementsByClassName("dateM")[0];
			xD = card[i].getElementsByClassName("dateD")[0];
			xTitleY = xY.textContent || xY.innerText;
			xTitleM = xM.textContent || xM.innerText;
			xTitleD = xD.textContent || xD.innerText;
			console.log(xTitleY + " style = " + card[i].style.display);
			smallestY = xTitleY;
			smallestM = xTitleM;
			smallestD = xTitleD;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					console.log("Subround " + (j) + "\n")
					yY = card[j].getElementsByClassName("dateY")[0];
					yM = card[j].getElementsByClassName("dateM")[0];
					yD = card[j].getElementsByClassName("dateD")[0];
					yTitleY = yY.textContent || yY.innerText;
					yTitleM = yM.textContent || yM.innerText;
					yTitleD = yD.textContent || yD.innerText;
					console.log("Comparing " + xTitleY + " to " + yTitleY);
					if(parseFloat(yTitleY) == parseFloat(smallestY))
					{
						if(parseFloat(yTitleM) == parseFloat(smallestM))
						{
							if(parseFloat(yTitleD) > parseFloat(smallestD))
							{
								smallestY = yTitleY;
								smallestM = yTitleM;
								smallestD = yTitleD;
								smallestHTML = card[j].innerHTML;
								smallestIndex = j;
							}
						}
						else if(parseFloat(yTitleM) > parseFloat(smallestM))
						{
							smallestY = yTitleY;
							smallestM = yTitleM;
							smallestD = yTitleD;
							smallestHTML = card[j].innerHTML;
							smallestIndex = j;
						}
					}
					else if(parseFloat(yTitleY) > parseFloat(smallestY))
					{
						
						smallestY = yTitleY;
						smallestM = yTitleM;
						smallestD = yTitleD;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
	drop();
}



function sortDateOldest()
{
	var card, xY, xM, xD, yY, yM, yD, xTitleY, xTitleM, xTitleD, yTitleY, yTitleM, yTitleD, smallest, smallestY, smallestM, smallestD, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			xY = card[i].getElementsByClassName("dateY")[0];
			xM = card[i].getElementsByClassName("dateM")[0];
			xD = card[i].getElementsByClassName("dateD")[0];
			xTitleY = xY.textContent || xY.innerText;
			xTitleM = xM.textContent || xM.innerText;
			xTitleD = xD.textContent || xD.innerText;
			console.log(xTitleY + " style = " + card[i].style.display);
			smallestY = xTitleY;
			smallestM = xTitleM;
			smallestD = xTitleD;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					console.log("Subround " + (j) + "\n")
					yY = card[j].getElementsByClassName("dateY")[0];
					yM = card[j].getElementsByClassName("dateM")[0];
					yD = card[j].getElementsByClassName("dateD")[0];
					yTitleY = yY.textContent || yY.innerText;
					yTitleM = yM.textContent || yM.innerText;
					yTitleD = yD.textContent || yD.innerText;
					console.log("Comparing " + xTitleY + " to " + yTitleY);
					if(parseFloat(yTitleY) == parseFloat(smallestY))
					{
						if(parseFloat(yTitleM) == parseFloat(smallestM))
						{
							if(parseFloat(yTitleD) < parseFloat(smallestD))
							{
								smallestY = yTitleY;
								smallestM = yTitleM;
								smallestD = yTitleD;
								smallestHTML = card[j].innerHTML;
								smallestIndex = j;
							}
						}
						else if(parseFloat(yTitleM) < parseFloat(smallestM))
						{
							smallestY = yTitleY;
							smallestM = yTitleM;
							smallestD = yTitleD;
							smallestHTML = card[j].innerHTML;
							smallestIndex = j;
						}
					}
					else if(parseFloat(yTitleY) < parseFloat(smallestY))
					{
						
						smallestY = yTitleY;
						smallestM = yTitleM;
						smallestD = yTitleD;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
drop();
}


function sortBestSelling()
{
	var card, x, y, xTitle, yTitle, smallest, smallestHTML, largestHTML, smallestIndex;
	card = document.getElementsByClassName("col-sm-4");
	for(i = 0; i < card.length - 1; i++)
	{
		if (card[i].style.display !== "none")
		{
			x = card[i].getElementsByClassName("sold")[0];
			xTitle = x.textContent || x.innerText;
			console.log(xTitle + " style = " + card[i].style.display);
			smallest = xTitle;
			smallestHTML = card[i].innerHTML;
			smallestIndex = i;
			for(j = i + 1; j < card.length; j++)
			{
				if (card[j].style.display !== "none")
				{
					console.log("Subround " + (j) + "\n")
					y = card[j].getElementsByClassName("sold")[0];
					yTitle = y.textContent || y.innerText;
					console.log("Comparing " + xTitle + " to " + yTitle);
					yTitle = yTitle.replace("$", "");
					smallest = smallest.replace("$", "");
					console.log(yTitle);
					if(parseFloat(yTitle) > parseFloat(smallest))
					{
						
						smallest = yTitle;
						smallestHTML = card[j].innerHTML;
						smallestIndex = j;
					}
				}
			}
			largestHTML = card[i].innerHTML;
			card[i].innerHTML = smallestHTML;
			card[smallestIndex].innerHTML = largestHTML;
		}
	}
	// Get the button that opens the modal
var btn = document.querySelectorAll("button.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
drop();
}


function browseBest() 
{
    var card = document.getElementsByClassName("col-sm-4");
    var isBest = 1;
    var b;
    
    for(i=0;i<card.length;i++){
       b = card[i].getElementsByClassName("best")[0];
       c = b.textContent || b.innerText;
       console.log(c);
       if(parseFloat(c) > 0)
	   {
           card[i].style.display="";
       }
	   else 
	   {
           card[i].style.display="none";
       }
   }
    
}