

let nr=document.getElementById('nr');
let usersinfo
let k=0
if(localStorage.getItem('registred:')){

    nr.style.display='none'
    
    usersinfo=JSON.parse(localStorage.getItem('info:')) 
    let nam = document.getElementsByClassName('name');
    for (let i = 0; i < nam.length; i++) {
        nam[i].textContent = usersinfo.name;
      
    }


    }
   
let ProfileImg=document.getElementById('PP')
    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const imageUrl = event.target.result;
            console.log(event.target)
        
            ProfileImg.src = imageUrl;
          
            };

        reader.readAsDataURL(file);

    });

    let menu=document.querySelector('#menu')
let lines=document.getElementsByClassName('line')
let LineParent=document.getElementById('RC')
for (let i = 0; i < lines.length; i++) {
    lines[i]||LineParent.addEventListener('click',change)
  
}

LineParent.addEventListener('click', change);

function change(){
k++

    let DH=document.getElementById('DH')
    let line1 = document.querySelector('.RightCorner .line1');
    let line2 = document.querySelector('.RightCorner .line2');
    let line3 = document.querySelector('.RightCorner .line3');

   if(k%2==1){ 
    line1.classList.add('rotateMinus45');
    line2.classList.add('opacityZero');
    line3.classList.add('moveDown');
// menu.style.zIndex='3';     
    DH.classList.remove('DesktopHistory')
    DH.classList.add('opacityZero')
    DSt.classList.add('opacityZero')
    DSp.classList.add('opacityZero')
    menu.classList.add('menuClass')
   }else{
         
     DH.classList.add('DesktopHistory')
    DH.classList.remove('opacityZero')
    DSt.classList.remove('opacityZero')
    DSp.classList.remove('opacityZero')
    line1.classList.remove('rotateMinus45');
    line2.classList.remove('opacityZero');
    line3.classList.remove('moveDown');
    menu.classList.remove('menuClass')
   }
}

 let History=[
    {
        img:'photos/Fuji.png',
        Header:'Fuji',
        text:'Lorem ipsum dolor sit amet consectetur. Nulla in malesuada ipsum non. Tristique feugiat  ',
        price:'250',
        date:[10,10,2023]
    }

,
{
    img:'photos/everest.png',
    Header:'Everest',
    text:'Lorem ipsum dolor sit amet consectetur. Nulla in malesuada ipsum non. Tristique feugiat  ',
    price:'300',
    date:[10,9,2023]
}
,
{
    img:'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/05/01/202941.jpg',
    Header:'Mitchell',
    text:'Lorem ipsum dolor sit amet consectetur. Nulla in malesuada ipsum non. Tristique feugiat',
    price:'200',
    date:[10,9,2023]
}
]   
let cardParent=document.getElementById('cardP')

for(let i of History){


let div = document.createElement('div');
div.classList.add('card');

  cardParent.appendChild(div)

// Create and append the image element
let img = document.createElement('img');
img.src = i.img;
div.appendChild(img);

// Create and append the card body container
let cardBody = document.createElement('div');
cardBody.classList.add('CardBody');
div.appendChild(cardBody);

let h3 = document.createElement('h3');
h3.textContent = i.Header;
cardBody.appendChild(h3);

// Create and append the paragraph element
let p1 = document.createElement('p');
p1.textContent = i.text;
cardBody.appendChild(p1);

// Create and append the row container
let div2 = document.createElement('div');
div2.classList.add('Srow');
cardBody.appendChild(div2);

// Create and append the "Re-Order" paragraph
let p2 = document.createElement('p');
p2.textContent = 'Re-Order ';
let span1 = document.createElement('span');
span1.textContent = i.price+'$';
p2.appendChild(span1);
div2.appendChild(p2);

// Create and append the "Date" paragraph
let p3 = document.createElement('p');
p3.textContent = 'Date';
let span2 = document.createElement('span');
span2.textContent = i.date[0]+'/'+i.date[1]+'/'+i.date[2];
p3.appendChild(span2);
div2.appendChild(p3);



}
let DSp=document.getElementById('DSp')
let DSt=document.getElementById('DSt')

let Histor=document.getElementById('idH')
let Support=document.getElementById('idSp')
let Settings=document.getElementById('idSt')
let id=0;



Histor.addEventListener('click',function(){
id=0;

if(DH.classList.contains('display')){
    DH.classList.remove('display')
}

if(DSp.classList.contains('display')&&DSt.classList.contains('display')){

}else if(DSp.classList.contains('display')){
    DSt.classList.add('display')
}else{
DSp.classList.add('display')
}
change()
})

Support.addEventListener('click',function(){
    id=1;
    DSp.classList.remove('display')
    if(DH.classList.contains('display')&&DSt.classList.contains('display')){
    
    }else if(DH.classList.contains('display')){
        DSt.classList.add('display')
    }else{
    DH.classList.add('display')
    }
    change()
    })
    
    Settings.addEventListener('click',function(){
        id=2;
        DSt.classList.remove('display')
        if(DH.classList.contains('display')&&DSp.classList.contains('display')){
        
        }else if(DSp.classList.contains('display')){
            DH.classList.add('display')
        }else{
        DSp.classList.add('display')
        }
        change()
    })


let overflowbtn=document.getElementById('Sbtn')
console.log(overflowbtn.offsetHeight,'works')
      if ( overflowbtn.offsetHeight >=100 ) {
        console.log(overflowbtn,'works')
      }  
let logOut=document.getElementById('LO')
logOut.addEventListener('click',function(){
    window.location.href = 'chats.html';
localStorage.removeItem('registred:');
localStorage.removeItem('info:');
})

