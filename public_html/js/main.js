/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function searchFunction(){
   var input, filter, card, title, b, i, txtValue;
   input = document.getElementById('myInput');
   filter = input.value.toUpperCase();
   card = document.getElementsByClassName("card");
   
   for(i=0;i<card.length;i++){
       b = card[i].getElementsByClassName("title")[0];
       txtValue = b.textContent || b.innerText;
       if(txtValue.toUpperCase().indexOf(filter) > -1){
           card[i].style.display="";
       } else {
           card[i].style.display="none";
       }
   }
    
}
