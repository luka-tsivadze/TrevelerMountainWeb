
let Finfo=[
    
    {
Img:'photos/Footer1.png',
header:'1s hut',
}
,
{
    Img:'photos/Footer2.png',
    header:'best feeling',
}
,
{
    Img:'photos/Footer3.png',
    header:'2nd hut',
}
,
{
    Img:'photos/Footer4.png',
    header:'best decision',
}
,
{
    Img:'photos/Footer5.png',
    header:'3rd hut',
}
,
{
    Img:'photos/Footer6.png',
    header:'best trip',
}


]






for (let inf of Finfo) {
let footercards=document.createElement('div');
footercards.classList.add('Fcard')
console.log(footercards)
footercards.innerHTML=`<img src=${inf.Img} alt=""> <div class="body"><h4>${inf.header}</h4> <p>Lorem ipsum dolor sit amet consectetur. Sit porta a nec at porttitor. Consectetur mi morbi ligula vivamus ut. Duis urna sed fermentum lacus lectus mollis enim.</p> </div>`
let fcards=document.querySelector('.Fcards')
fcards.appendChild(footercards)
}