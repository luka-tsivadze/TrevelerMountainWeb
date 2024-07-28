let element=document.getElementsByClassName('places');
  let divSibling=document.getElementById('start')
for (const place of element) {
    place.addEventListener('click',function(){
        //
        if(divSibling){
            divSibling.classList.remove('toggle')
        }
for (const placeT of element) {
    placeT.classList.remove('activated')
}
       place.classList.add('activated')
   divSibling=place.previousElementSibling
   while (divSibling) {
    if (divSibling.tagName == 'DIV') {
        console.log('Found previous sibling <img>.', divSibling);
       divSibling.classList.add('toggle')
        break; 
    }
    divSibling = divSibling.previousElementSibling;
}   
    })
}