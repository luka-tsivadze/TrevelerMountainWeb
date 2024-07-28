let data = [
  { 
    name:'Everest',
    Num:[2,4,1,5],
    duration:20,
    height:8845,
    distance:35,
    id:0,
    price:450,
    category:['popular','Europe'],
    img:'../photos/newFile-3.avif',
     imgrow:['photos/EverestInfoL.png','photos/EverestInfoS.png'],
    header:'Everest (68700 m) is one of those places that everyone should visit at least once in a lifetime. The mountain Everest and the glorious view of the Everest are unforgettable.',
    text:`Mount Everest (Nepali: सगरमाथा, romanized: Sagarmāthā; Standard Tibetan: ཇོ་མོ་གླང་མ, romanized: Chomolungma; Chinese: 珠穆朗玛峰; pinyin: Zhūmùlǎngmǎ Fēng) is Earth's highest mountain above
    sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point.[3] Its elevation (snow height) of 8,848.86 m (29,031 ft 8+1⁄2 in) was most recently established in 2020 by the Chinese and Nepali authorities.[4][5]`
  },
  {
    id:1,
    price:350,
    name:'Fuji',
    Num: [4,3,5,4],
    duration:10,
    height:4260,
    distance:28,
    category:['popular','ASIA'],
    img:'../photos/fuji1.png',
    imgrow:['../photos/fujili.webp','../photos/fujimap.webp'],
    header:'Mt. Fuji: More Than  just a Mountain'
   ,text:`Mount Fuji (富士山, Fujisan, Japanese: [ɸɯꜜ(d)ʑisaɴ] ⓘ) is an active stratovolcano located on the Japanese island of Honshū, with a summit elevation of 3,776.24 m (12,389 ft 3 in). 
   It is the tallest mountain in Japan, the second-highest volcano located on an island in Asia (after Mount Kerinci on the Indonesian island of Sumatra), and seventh-highest peak of an island on Earth.[1] Mount Fuji last erupted from 1707 to 1708.[4][5] The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from the Japanese capital on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year,
    is commonly used as a cultural icon of Japan and is frequently depicted in art and photography, as well as visited by sightseers, hikers and mountain climbers.[6]`
  },
  { 
    id:2,
    price:660,
    name:'Whitney',
    Num: [5,1,4,3] ,
    duration:30,
    height:4530,
    distance:68.5,
    category:['popular','NORTH AMERICA'],
    img:'../photos/EverestM.avif',
    imgrow:['https://tmrrealestate.com/wp-content/uploads/2019/10/Mt-Whitney.jpg','https://www.sherpaguides.com/california/mountains/maps/mount_whitney.gif'],
    header:'mountain whitney '
  ,text:`Mount Mitchell, known in Cherokee as Attakulla (Tsalagi: ᎠᏔᎫᎳ),[3] is the highest peak of the Appalachian Mountains and the highest peak in mainland North America east of the Mississippi River. It is located near Burnsville in Yancey County, North Carolina in the Black 
  Mountain subrange of the Appalachians about 19 miles (31 km) northeast of Asheville. It is protected by Mount Mitchell State Park and surrounded by the Pisgah National Forest. Mount Mitchell's elevation is 6,684 feet (2,037 m) above sea level.[1] Mount Mitchell is ranked 31st by topographic isolation.`
  
  },
  { 
    id:3,
    price:250,
    name:'Mitchell',
    Num: [3,2,4,5], 
    duration:21,
    height:3000,
    distance:42,
    category:['popular','NORTH AMERICA'],
    img:'../photos/mt-mitchell-sp.jpg',
    imgrow:['../photos/mitchell.jpg','https://www.google.com/maps/d/thumbnail?mid=1fshqjJIlLqKVwK7W9c_9R0UxiCU&hl=en'],
    header:'Find yourself surrounded by an amazing 360° view as you stand atop the highest peak of the Appalachian Mountains.'
 ,text:`Mount Mitchell, known in Cherokee as Attakulla (Tsalagi: ᎠᏔᎫᎳ),[3] is the highest peak of the Appalachian Mountains and the highest peak in mainland North America east of the Mississippi River. It is located near Burnsville in Yancey County, North Carolina in the Black 
 Mountain subrange of the Appalachians about 19 miles (31 km) northeast of Asheville. It is protected by Mount Mitchell State Park and surrounded by the Pisgah National Forest. Mount Mitchell's elevation is 6,684 feet (2,037 m) above sea level.[1] Mount Mitchell is ranked 31st by topographic isolation.`
  }
];

let inputs = document.getElementsByClassName('inputs');
let pies = document.getElementsByClassName('pie');
let span=document.getElementsByClassName('ngval')
let buttons = document.getElementsByClassName('PL');
let activedbtn='popular';

for (let i of buttons) {


  i.addEventListener('click', function () {
  
    for (let i of buttons) {
      i.classList.remove('actived')
    }
    i.classList.toggle('actived')
activedbtn=i.textContent
Select()  
})
}





let container = document.createElement('div');
container.classList.add('container');
let j=0;
let dataid=0;
let counter=0
Select()  
function Select() {
  container.innerHTML = '';

  for (let info of data) {
      if (info.category.includes(activedbtn)) {
          var mountainCard = document.createElement('div');
          mountainCard.classList.add('MountainCard');

          if (j == 0) {
              mountainCard.classList.add('focused');
              j++
          }
         
          var img = document.createElement('img');
          var h5 = document.createElement('h5');
          h5.classList.add('cover');

          mountainCard.appendChild(img);
          mountainCard.appendChild(h5);

          container.appendChild(mountainCard);

          img.src = info.img;
          h5.textContent = info.name;

          var secondRow = document.querySelector('.secondRow');
          secondRow.appendChild(container);

          let mountainCardsH = document.getElementsByClassName('cover');
          let mountainCards = document.getElementsByClassName('MountainCard');

          for (let k = 0; k < mountainCardsH.length; k++) {
              mountainCardsH[k].addEventListener('click', function handleClick() {
                  dataid = info.id;
                  if (!mountainCards[k].classList.contains('focused')) {
                       main()
                        chart();
                    
                      for (let k = 0; k < mountainCardsH.length; k++) {
                          if (mountainCards[k].classList.contains('focused')) {
                              mountainCards[k].classList.remove('focused');
                          }
                      }
                      mountainCards[k].classList.add('focused');
                  }
              });
          }
      }
  }
}

let parent = document.querySelector('.parent');
parent.innerHTML = `
<div class="headerRow">

<div class="left">
    <p>${data[dataid].name}</p>
    <span>from ${data[dataid].price}$</span>
</div>
<div class="right">
    <img src="icons/like.png" alt="">
    <img src="icons/share.png" alt="">
    <img src="icons/donwload.png" alt="">
</div>
</div>
<div class="imgRow">
<img src="photos/EverestInfoL.png" alt="">
<img src="photos/EverestInfoS.png" alt="">
</div>
`;

let mainFooter = document.querySelector('.mainFooter');
let mfl = document.createElement('div');
mfl.classList.add('MFL');
mfl.innerHTML = `
    <h3>${data[dataid].header}</h3>
    <p>${data[dataid].text}</p>
`;

let mfr = document.createElement('div');
mfr.classList.add('MFR');
mfr.innerHTML = `
    <div class="RightChart1">
        <div class="col"><img src="icons/stopwatch.png" alt=""> <h2>40days</h2> <p>Time</p></div>
        <div class="col"><img src="icons/destination.png" alt=""> <h2> 68.7 km</h2> <p>Distance</p></div>
        <div class="col"><img src="icons/Elevation.png" alt=""> <h2>8,848</h2> <p>Elevation</p></div>
    </div>
    <div class="ch"><img src="icons/characteristics.png" alt=""> <p>Characteristics</p></div>
    <div class="condrow"><p>Condition</p><p>Technique</p><p>Experience</p><p>Landscape</p></div>
    <div id="AC"></div>
    <div class="SQUARE"></div>
    <div class="MV"><img src="icons/sun.png" alt=""> <p>Best months to visit</p></div>
    <div class="mincard"> <div class="c">apr</div> <div class="c">may</div> <div class="c">jun</div> <div class="c">jul</div> </div>
`;
// Append the created elements to the mainFooter element
mainFooter.appendChild(mfl);
mainFooter.appendChild(mfr);

//chart element

let testplace = document.createElement('div');
testplace.classList.add('testplace');

for (let i = 0; i < 4; i++) {
  let chartDiv = document.createElement('div');
  chartDiv.classList.add('chart');

  let pieDiv = document.createElement('div');
  pieDiv.classList.add('pie');

  let h3 = document.createElement('h3');
  let span = document.createElement('span');
  span.classList.add('ngval');
  span.textContent = '120';
  h3.appendChild(span);

  chartDiv.appendChild(pieDiv);
  chartDiv.appendChild(h3);

  let input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.classList.add('inputs');
  input.setAttribute('max', '220');
  input.setAttribute('value', '43');
  input.setAttribute('id', 'ng');

  testplace.appendChild(chartDiv);
  testplace.appendChild(input);
}

let appender=document.getElementById('AC')//add this to html 
appender.appendChild(testplace);
chart()

//chartelementFunctions
function main(){
  parent.innerHTML = `
  <div class="headerRow">

  <div class="left">
      <p>${data[dataid].name}</p>
      <span>from ${data[dataid].price}$</span>
  </div>
  <div class="right">
      <img src="icons/like.png" alt="">
      <img src="icons/share.png" alt="">
      <img src="icons/donwload.png" alt="">
  </div>
</div>
<div class="imgRow">
  <img src="${data[dataid].imgrow[0]}" alt="">
  <img src="${data[dataid].imgrow[1]}" alt="">
</div>
  `;

  mfl.innerHTML = `
  <h3>${data[dataid].header}</h3>
  <p>${data[dataid].text}</p>
`;
mfr.innerHTML = `
    <div class="RightChart1">
        <div class="col"><img src="icons/stopwatch.png" alt=""> <h2>${data[dataid].duration} days</h2> <p>Time</p></div>
        <div class="col"><img src="icons/destination.png" alt=""> <h2> ${data[dataid].distance}km</h2> <p>Distance</p></div>
        <div class="col"><img src="icons/Elevation.png" alt=""> <h2>${data[dataid].height}</h2> <p>Elevation</p></div>
    </div>
    <div class="ch"><img src="icons/characteristics.png" alt=""> <p>Characteristics</p></div>
    <div class="condrow"><p>Condition</p><p>Technique</p><p>Experience</p><p>Landscape</p></div>
    <div id="AC"></div>
    <div class="SQUARE"></div>
    <div class="MV"><img src="icons/sun.png" alt=""> <p>Best months to visit</p></div>
    <div class="mincard"> <div class="c">apr</div> <div class="c">mayy</div> <div class="c">jun</div> <div class="c">jul</div> </div>
`;


let testplace = document.createElement('div');
testplace.classList.add('testplace');

for (let i = 0; i < 4; i++) {
  let chartDiv = document.createElement('div');
  chartDiv.classList.add('chart');

  let pieDiv = document.createElement('div');
  pieDiv.classList.add('pie');

  let h3 = document.createElement('h3');
  let span = document.createElement('span');
  span.classList.add('ngval');
  span.textContent = '120';
  h3.appendChild(span);

  chartDiv.appendChild(pieDiv);
  chartDiv.appendChild(h3);

  let input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.classList.add('inputs');
  input.setAttribute('max', '220');
  input.setAttribute('value', '43');
  input.setAttribute('id', 'ng');
  mainFooter.appendChild(mfl);
  mainFooter.appendChild(mfr);
  
  testplace.appendChild(chartDiv);
  testplace.appendChild(input);
}
let appender=document.getElementById('AC')
appender.appendChild(testplace)


}


function chart(){


for (let i = 0; i < inputs.length; i++) {
  inputs[i].value =data[dataid].Num[i]; 
  span[i].innerHTML=data[dataid].Num[i];
  let degrees = (data[dataid].Num[i] / 8) * 360;//  
  if(data[dataid].Num[i]<6){
  pies[i].style.setProperty('--ng', degrees + 'deg');
  }else{
    console.log('wrong data for charts number must not be over 5')
  }
}


}

