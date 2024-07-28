
let i=0
let cards = [
    { 
        price: '200 $', 
        month: 'April',
        data: [
            { 
                day: "Monday", 
                amount: "230$", 
                date: "4/07",
                cards: [
                    { time: '8:00 AM', arTime: '16:02 PM' },
                    { time: '10:30 AM', arTime: '18:45 PM' },
                    { time: '12:45 PM', arTime: '20:20 PM' }
                ]
            },
            { 
                day: "Tuesday", 
                amount: "285$", 
                date: "4/09",
                cards: [
                    { time: '9:15 AM', arTime: '17:30 PM' },
                    { time: '11:45 AM', arTime: '19:00 PM' },
                    { time: '1:30 PM', arTime: '21:15 PM' }
                ]
            },
            { 
                day: "Wednesday",  
                amount: "390$", 
                date: "4/11",
                cards: [
                    { time: '10:00 AM', arTime: '18:02 PM' },
                    { time: '1:30 PM', arTime: '21:45 PM' },
                    { time: '3:45 PM', arTime: '23:20 PM' }
                ]
            },
            { 
                day: "Thursday", 
                amount: "310$", 
                date: "4/12",
                cards: [
                    { time: '9:45 AM', arTime: '17:10 PM' },
                    { time: '12:15 PM', arTime: '20:30 PM' },
                    { time: '3:00 PM', arTime: '23:45 PM' }
                ]
            },
            { 
                day: "Friday", 
                amount: "225$", 
                date: "4/22",
                cards: [
                    { time: '8:30 AM', arTime: '16:45 PM' },
                    { time: '11:00 AM', arTime: '19:15 PM' },
                    { time: '2:15 PM', arTime: '22:30 PM' }
                ]
            },
            { 
                day: "Saturday", 
                amount: "290$", 
                date: "4/23",
                cards: [
                    { time: '9:00 AM', arTime: '17:15 PM' },
                    { time: '12:30 PM', arTime: '20:45 PM' },
                    { time: '3:45 PM', arTime: '23:00 PM' }
                ]
            },
            { 
                day: "Sunday", 
                amount: "350$", 
                date: "4/26",
                cards: [
                    { time: '10:15 AM', arTime: '18:30 PM' },
                    { time: '1:45 PM', arTime: '21:00 PM' },
                    { time: '4:30 PM', arTime: '0:45 AM' }
                ]
            }
        ]
    },
    { 
        price: '250 $', 
        month: 'May',
        data: [
            { 
                day: "Monday", 
                amount: "250$", 
                date: "5/05",
                cards: [
                    { time: '8:30 AM', arTime: '16:45 PM' },
                    { time: '11:00 AM', arTime: '19:15 PM' },
                    { time: '2:15 PM', arTime: '22:30 PM' }
                ]
            },
            { 
                day: "Tuesday", 
                amount: "280$", 
                date: "5/09",
                cards: [
                    { time: '9:00 AM', arTime: '17:15 PM' },
                    { time: '12:30 PM', arTime: '20:45 PM' },
                    { time: '3:45 PM', arTime: '23:00 PM' }
                ]
            },
            { 
                day: "Wenesday", 
                amount: "225$", 
                date: "5/22",
                cards: [
                    { time: '8:30 AM', arTime: '16:45 PM' },
                    { time: '11:00 AM', arTime: '19:15 PM' },
                    { time: '2:15 PM', arTime: '22:30 PM' }
                ]
            },
            { 
                day: "Thursday", 
                amount: "310$", 
                date: "5/12",
                cards: [
                    { time: '9:45 AM', arTime: '17:10 PM' },
                    { time: '12:15 PM', arTime: '20:30 PM' },
                    { time: '3:00 PM', arTime: '23:45 PM' }
                ]
            },

            { 
                day: "Friday", 
                amount: "225$", 
                date: "5/22",
                cards: [
                    { time: '8:30 AM', arTime: '16:45 PM' },
                    { time: '11:00 AM', arTime: '19:15 PM' },
                    { time: '2:15 PM', arTime: '22:30 PM' }
                ]
            },
            { 
                day: "Saturday", 
                amount: "290$", 
                date: "5/23",
                cards: [
                    { time: '9:00 AM', arTime: '17:15 PM' },
                    { time: '12:30 PM', arTime: '20:45 PM' },
                    { time: '3:45 PM', arTime: '23:00 PM' }
                ]
            },

            { 
                day: "Sunday", 
                amount: "350$", 
                date: "5/26",
                cards: [
                    { time: '10:15 AM', arTime: '18:30 PM' },
                    { time: '1:45 PM', arTime: '21:00 PM' },
                    { time: '4:30 PM', arTime: '0:45 AM' }
                ]
            }
        ]
    },
    { 
        price: '300 $', 
        month: 'June',
        data: [
            { 
                day: "Monday", 
                amount: "310$", 
                date: "6/05",
                cards: [
                    { time: '8:30 AM', arTime: '16:45 PM' },
                    { time: '11:00 AM', arTime: '19:15 PM' },
                    { time: '2:15 PM', arTime: '22:30 PM' }
                ]
            },
            { 
                day: "Tuesday", 
                amount: "480$", 
                date: "6/09",
                cards: [
                    { time: '9:00 AM', arTime: '17:15 PM' },
                    { time: '12:30 PM', arTime: '20:45 PM' },
                    { time: '3:45 PM', arTime: '23:00 PM' }
                ]
            },
            { 
                day: "Wenesday", 
                amount: "370$", 
                date: "6/12",
                cards: [
                    { time: '9:45 AM', arTime: '17:10 PM' },
                    { time: '12:15 PM', arTime: '20:30 PM' },
                    { time: '3:00 PM', arTime: '23:45 PM' }
                ]
            },
            { 
                day: "Thursday", 
                amount: "410$", 
                date: "6/12",
                cards: [
                    { time: '9:45 AM', arTime: '17:10 PM' },
                    { time: '12:15 PM', arTime: '20:30 PM' },
                    { time: '3:00 PM', arTime: '23:45 PM' }
                ]
            },
            { 
                day: "Friday", 
                amount: "425$", 
                date: "6/23",
                cards: [
                    { time: '8:30 AM', arTime: '16:45 PM' },
                    { time: '11:00 AM', arTime: '19:15 PM' },
                    { time: '2:15 PM', arTime: '22:30 PM' }
                ]
            },
            { 
                day: "Saturday", 
                amount: "356$", 
                date: "6/23",
                cards: [
                    { time: '9:00 AM', arTime: '17:15 PM' },
                    { time: '12:30 PM', arTime: '20:45 PM' },
                    { time: '3:45 PM', arTime: '23:00 PM' }
                ]
            },
            { 
                day: "Sunday", 
                amount: "350$", 
                date: "6/26",
                cards: [
                    { time: '10:15 AM', arTime: '18:30 PM' },
                    { time: '1:45 PM', arTime: '21:00 PM' },
                    { time: '4:30 PM', arTime: '0:45 AM' }
                ]
            }
        ]
    },
    { 
        price: '350 $', 
        month: 'July',
        data: [
            { 
                day: "Monday", 
                amount: "360$", 
                date: "7/07",
                cards: [
                    { time: '8:00 AM', arTime: '16:02 PM' },
                    { time: '10:30 AM', arTime: '18:45 PM' },
                    { time: '12:45 PM', arTime: '20:20 PM' }
                ]
            },
            { 
                day: "Tuesday", 
                amount: "585$", 
                date: "7/09",
                cards: [
                    { time: '9:15 AM', arTime: '17:30 PM' },
                    { time: '11:45 AM', arTime: '19:00 PM' },
                    { time: '1:30 PM', arTime: '21:15 PM' }
                ]
            },
            { 
                day: "Wednesday", 
                amount: "390$", 
                date: "7/11",
                cards: [
                    { time: '10:00 AM', arTime: '18:02 PM' },
                    { time: '1:30 PM', arTime: '21:45 PM' },
                    { time: '3:45 PM', arTime: '23:20 PM' }
                ]
            },
            { 
                day: "Thursday", 
                amount: "730$", 
                date: "7/12",
                cards: [
                    { time: '9:45 AM', arTime: '17:10 PM' },
                    { time: '12:15 PM', arTime: '20:30 PM' },
                    { time: '3:00 PM', arTime: '23:45 PM' }
                ]
            },
            { 
                day: "Friday", 
                amount: "425$", 
                date: "7/22",
                cards: [
                    { time: '8:30 AM', arTime: '16:45 PM' },
                    { time: '11:00 AM', arTime: '19:15 PM' },
                    { time: '2:15 PM', arTime: '22:30 PM' }
                ]
            },
            { 
                day: "Saturday", 
                amount: "370$", 
                date: "7/23",
                cards: [
                    { time: '9:00 AM', arTime: '17:15 PM' },
                    { time: '12:30 PM', arTime: '20:45 PM' },
                    { time: '3:45 PM', arTime: '23:00 PM' }
                ]
            },
            { 
                day: "Sunday", 
                amount: "350$", 
                date: "7/26",
                cards: [
                    { time: '10:15 AM', arTime: '18:30 PM' },
                    { time: '1:45 PM', arTime: '21:00 PM' },
                    { time: '4:30 PM', arTime: '0:45 AM' }
                ]
            }
        ]
    },
    { 
        price: '400 $', 
        month: 'August',
        data: [
            { 
                day: "Monday", 
                amount: "830$", 
                date: "8/07",
                cards: [
                    { time: '8:00 AM', arTime: '16:02 PM' },
                    { time: '10:30 AM', arTime: '18:45 PM' },
                    { time: '12:45 PM', arTime: '20:20 PM' }
                ]
            },
            { 
                day: "Tuesday", 
                amount: "585$", 
                date: "8/09",
                cards: [
                    { time: '9:15 AM', arTime: '17:30 PM' },
                    { time: '11:45 AM', arTime: '19:00 PM' },
                    { time: '1:30 PM', arTime: '21:15 PM' }
                ]
            },
            { 
                day: "Wednesday", 
                amount: "490$", 
                date: "8/11",
                cards: [
                    { time: '10:00 AM', arTime: '18:02 PM' },
                    { time: '1:30 PM', arTime: '21:45 PM' },
                    { time: '3:45 PM', arTime: '23:20 PM' }
                ]
            },
            { 
                day: "Thursday", 
                amount: "410$", 
                date: "8/12",
                cards: [
                    { time: '9:45 AM', arTime: '17:10 PM' },
                    { time: '12:15 PM', arTime: '20:30 PM' },
                    { time: '3:00 PM', arTime: '23:45 PM' }
                ]
            },
            { 
                day: "Friday", 
                amount: "625$", 
                date: "8/25",
                cards: [
                    { time: '8:30 AM', arTime: '16:45 PM' },
                    { time: '11:00 AM', arTime: '19:15 PM' },
                    { time: '2:15 PM', arTime: '22:30 PM' }
                ]
            },
            { 
                day: "Saturday", 
                amount: "890$", 
                date: "8/27",
                cards: [
                    { time: '9:00 AM', arTime: '17:15 PM' },
                    { time: '12:30 PM', arTime: '20:45 PM' },
                    { time: '3:45 PM', arTime: '23:00 PM' }
                ]
            },
            { 
                day: "Sunday", 
                amount: "750$", 
                date: "8/29",
                cards: [
                    { time: '10:15 AM', arTime: '18:30 PM' },
                    { time: '1:45 PM', arTime: '21:00 PM' },
                    { time: '4:30 PM', arTime: '0:45 AM' }
                ]
            }
        ]
    },
    { 
        price: '250 $', 
        month: 'September',
        data: [
            { 
                day: "Monday", 
                amount: "260$", 
                date: "9/13",
                cards: [
                    { time: '8:00 AM', arTime: '16:02 PM' },
                    { time: '10:30 AM', arTime: '18:45 PM' },
                    { time: '12:45 PM', arTime: '20:20 PM' }
                ]
            },
            { 
                day: "Tuesday", 
                amount: "285$", 
                date: "9/15",
                cards: [
                    { time: '9:15 AM', arTime: '17:30 PM' },
                    { time: '11:45 AM', arTime: '19:00 PM' },
                    { time: '1:30 PM', arTime: '21:15 PM' }
                ]
            },
            { 
                day: "Wednesday", 
                amount: "320$", 
                date: "9/17",
                cards: [
                    { time: '10:00 AM', arTime: '18:02 PM' },
                    { time: '1:30 PM', arTime: '21:45 PM' },
                    { time: '3:45 PM', arTime: '23:20 PM' }
                ]
            },
            { 
                day: "Thursday", 
                amount: "270$", 
                date: "9/18",
                cards: [
                    { time: '9:45 AM', arTime: '17:10 PM' },
                    { time: '12:15 PM', arTime: '20:30 PM' },
                    { time: '3:00 PM', arTime: '23:45 PM' }
                ]
            },
            { 
                day: "Friday", 
                amount: "265$", 
                date: "9/22",
                cards: [
                    { time: '8:30 AM', arTime: '16:45 PM' },
                    { time: '11:00 AM', arTime: '19:15 PM' },
                    { time: '2:15 PM', arTime: '22:30 PM' }
                ]
            },
            { 
                day: "Saturday", 
                amount: "290$", 
                date: "9/25",
                cards: [
                    { time: '9:00 AM', arTime: '17:15 PM' },
                    { time: '12:30 PM', arTime: '20:45 PM' },
                    { time: '3:45 PM', arTime: '23:00 PM' }
                ]
            },
            { 
                day: "Sunday", 
                amount: "320$", 
                date: "9/26",
                cards: [
                    { time: '10:15 AM', arTime: '18:30 PM' },
                    { time: '1:45 PM', arTime: '21:00 PM' },
                    { time: '4:30 PM', arTime: '0:45 AM' }
                ]
            }
        ]
    },
    

];

let chosencard=cards[0]
let counter=0;
let tripsindex=0;

mincardAdder(chosencard.data)
generateCards();
test()

for(let k in cards[0].data[2].cards){
TripscardGenerator(cards[0].data[2].cards[k])
}
function generateCards() {
    let botparent = document.querySelector('.botParent');

    cards.forEach(card => {
        const div = document.createElement('div');
        div.classList.add('card',);
        div.setAttribute('id' , counter )  
        counter++
        i++
if(i==3){
 div.classList.add('active')
 
}
        div.innerHTML = `
            <h4>From</h4>
            <span>${card.price}</span>
            <p>${card.month}</p>
            <div class="none"></div>
        `;    
        div.addEventListener('click', function() {
        
            chosencard=cards[this.id]
            classAdder(this,'card');
            mincardAdder(chosencard.data)
            test()

        });
        botparent.appendChild(div);


        
    });


}


function classAdder(element,card) {

    let cards=document.getElementsByClassName(card)
   
    for(cd of cards){
        if(cd.classList.contains('active')){
            cd.classList.remove('active')
        }
    }
    element.classList.toggle('active');
}

function mincardAdder(dat){
    let minparent=document.querySelector('.CardPlace')
let id=0



let html = "";
dat.forEach(function(item) {
  html += `<div class="MinCard" id=${id} >`;
  html += '<h4>' + item.day + '</h4>';
  html += '<h2>' + item.amount + '</h2>';
  html += '<p>' + item.date + '</p>';
  html += '</div>';
  id++
});

minparent.innerHTML=html

}
function ScrollRight(){
    var container = document.querySelector('.CardPlaceParent');

    container.scrollLeft += 200;
    
}
function ScrollLeft(){
    var container = document.querySelector('.CardPlaceParent');
    container.scrollLeft -= 200;

}
function test(){
    let index=0;
    let mincards=document.getElementsByClassName('MinCard')
mincards = Array.from(mincards);


mincards.forEach(Mcard=>{
    index++
if(index==5){
    Mcard.classList.add('active')
}

Mcard.addEventListener('click',function(){
    classAdder(this,'MinCard');
    
for(let k in chosencard.data[this.id].cards){
   TripscardGenerator(chosencard.data[this.id].cards[k])
}

})
})
}

function TripscardGenerator(card){
if(tripsindex<3){
let finalCardsDiv = document.createElement('div');

finalCardsDiv.classList.add('FinalCards');
if(tripsindex==0){
    finalCardsDiv.classList.add('chosenCard');
}




let leftDiv = document.createElement('div');
leftDiv.classList.add('left');
tripsindex++
let col1Div = document.createElement('div');
col1Div.classList.add('col');
let h3_1 = document.createElement('h3');
h3_1.textContent = 'Georgia';
let p_1 = document.createElement('p');
p_1.textContent = 'Tbilisi';
let span_1 = document.createElement('span');
span_1.classList.add('span1')
span_1.textContent = `${card.time}`;
col1Div.appendChild(h3_1);
col1Div.appendChild(p_1);
col1Div.appendChild(span_1);

let img = document.createElement('img');
img.src = 'photos/plane.png';
img.alt = '';

let col2Div = document.createElement('div');
col2Div.classList.add('col');
let h3_2 = document.createElement('h3');
h3_2.textContent = 'Nepal';
let p_2 = document.createElement('p');
p_2.textContent = 'Lukla Airport';
let span_2 = document.createElement('span');
span_2.classList.add('span2')
span_2.textContent = `${card.arTime}`;
col2Div.appendChild(h3_2);
col2Div.appendChild(p_2);
col2Div.appendChild(span_2);

let rightDiv = document.createElement('div');
rightDiv.classList.add('right');

let btnDiv = document.createElement('div');
btnDiv.classList.add('btn');
let p_btn = document.createElement('p');
p_btn.textContent = 'standard price';
let h3_btn = document.createElement('h3');
h3_btn.textContent = '300 $';
btnDiv.appendChild(p_btn);
btnDiv.appendChild(h3_btn);


leftDiv.appendChild(col1Div);
leftDiv.appendChild(img);
leftDiv.appendChild(col2Div);

rightDiv.appendChild(btnDiv);

finalCardsDiv.appendChild(leftDiv);
finalCardsDiv.appendChild(rightDiv);

   let main=document.querySelector('.mainFooter')
    if(main.classList.contains('chosenCard')){
   
    }


main.appendChild(finalCardsDiv);
}else{
    //erroria aniwebs marto bolo elementis dros radgan quaryselector igebs mxolod pirvel elements
console.log(card)
    tripsindex++
    let span_1=document.querySelector('.span1')
    span_1.textContent = `${card.time}`;
    let span_2=document.querySelector('.span2')
    span_2.textContent = `${card.arTime}`;
}



}