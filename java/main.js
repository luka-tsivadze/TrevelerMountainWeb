
const dateInputs = document.getElementsByClassName('dateInput');
const result = document.getElementById('result');

for (let i = 0; i < dateInputs.length; i++) {
  dateInputs[i].addEventListener('input', function () {
    const selectedDate = new Date(dateInputs[i].value);
    const year = selectedDate.getFullYear();
    const selectedMonth = selectedDate.getMonth() + 1; // Months are 0-based
    const day = selectedDate.getDate();

    let monthDescription;

    switch (selectedMonth) {
      case 1:
        monthDescription = "January";
        break;
      case 2:
        monthDescription = "February";
        break;
      case 3:
        monthDescription = "March";
        break;
      case 4:
        monthDescription = "April";
        break;
      case 5:
        monthDescription = "May";
        break;
      case 6:
        monthDescription = "June";
        break;
      case 7:
        monthDescription = "July";
        break;
      case 8:
        monthDescription = "August";
        break;
      case 9:
        monthDescription = "September";
        break;
      case 10:
        monthDescription = "October";
        break;
      case 11:
        monthDescription = "November";
        break;
      case 12:
        monthDescription = "December";
        break;
      default:
        monthDescription = "Invalid month";
    }

    const newDateValue = `${year}-${monthDescription}-${day}`;
    
    result.textContent = newDateValue;
    console.log(result,dateInputs[i].value)
  });
}


let buttons = document.getElementsByClassName('btn');


let info=[
  {  img:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'
  ,
  header:'Everest'
  ,
  location:'napal'
  ,
  pricefrom:800
},
{
  img:'https://upload.wikimedia.org/wikipedia/commons/1/19/Whitney_Portal_Road_line_can_be_seen_front_from_us_-_Flickr_-_daveynin.jpg'
  ,
  header:'Whitney'
  ,
  location:'California'
 ,
  pricefrom:150
}
,
{
  img:'https://images.arigatotravel.com/wp-content/uploads/2019/06/27234354/shutterstock_119011768-e1560143978361.jpg'
  ,
  header:'Fuji'
  ,
  location:'Japan'
 ,
  pricefrom:250
}
,
{  img:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/262519802.jpg?k=4c0da808b2770443afbc9ce03053b337bc94ba73b9d287f659c6ec2bbbe0c3bb&o=&hp=1'
,
header:'Mitchell'
,
location:'California'
,
pricefrom:320
},
{  img:'https://images.memphistours.com/large/bb0c8432b78b126488d0c279ba0e19ea.jpg'
,
header:'Jabal Mousa'
,
location:'Egypt'
,
pricefrom:650
}
]
let RewievInfo=[{
  classnames: 'Rev1', //don't changeanything in this row
  h3: 'Best feeling1', //don't changeanything in this row
  img: 'photos/pexels-yaroslav-shuraev-4763907 1forexample.png',
  pText: 'Lorem ipsum dolor sit amet consectetur. Nulla in malesuada ipsum non. Tristique feugiat  ',
},
{
  classnames: 'Rev2',//don't changeanything in this row
  h3: 'Hard Decision1', //don't changeanything in this row
  img: 'https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais',
  pText: 'Lorem ipsum dolor sit amet consectetur. Nulla in malesuada ipsum non. Tristique feugiat  ',
}
];
//write popular places information
for (let i of buttons) {



  i.addEventListener('click', function () {
    for (let i of buttons) {
      i.classList.remove('actived')
    }
    i.classList.toggle('actived')
    content(i.textContent)
  })
}



function content(clas) {
  switch (clas) {
 // informacia  adgilebis shesaxeb 
    case 'EUROPE':
      info = [
      {
        img:'https://georgiatours.info/wp-content/uploads/2016/10/tetnuldi2.jpg'
        ,
       header:' TETNULDI'
        ,
        location:'GEORGIA'
        ,
        pricefrom:500
      }
      ,
      {

        img:'https://www.muchbetteradventures.com/magazine/content/images/size/w1600/2022/05/elbrus.jpg'
        ,
        header:' MOUNT ELBRUS'
        ,
        location:' CAUCASUS'
        ,
        pricefrom:1300
        
      },
      {
        img:'https://www.muchbetteradventures.com/magazine/content/images/size/w1600/2022/05/shkara.jpg'
        ,
        header:'SHKHARA'
        ,
        location:'GEORGIA'
        ,
        pricefrom:700
      },

    ]
    //rewievinfo
      
RewievInfo=[{
  classnames: 'Rev1', //don't changeanything in this row
  h3: 'Best feelings', //don't changeanything in this row
  img: 'https://cdn.ramblers.org.uk/styles/xl/s3/2023-03/mountain.jpg?itok=h0cZc9BN',
  pText: 'Lorem ipsum dolor sit amet consectetur. Nulla in malesuada ipsum non. Tristique feugiat  ',
},
{
  classnames: 'Rev2',//don't changeanything in this row
  h3: 'Hard Decision', //don't changeanything in this row
  img: 'photos/example.png  ',
  pText: 'Lorem ipsum dolor sit amet consectetur. Nulla in malesuada ipsum non. Tristique feugiat  ',
}
];

     
      break;

    case 'ASIA':
   
      info = [
        {
          img:'https://images.arigatotravel.com/wp-content/uploads/2019/06/27234354/shutterstock_119011768-e1560143978361.jpg'
          ,
          header:'Fuji'
          ,
          location:'Japan'
         ,
          pricefrom:1250
        }
        ,
        {
        img:'https://jejutourism.files.wordpress.com/2017/05/mobileec849ceab780ed8faceb84a4eab1b0eba6acec8b9deb8bb9dsc08579_1-1.jpg'
        ,
        header:'Hallasan'
        ,
        location:'South Korea'
        ,
        pricefrom:400
      },
      {
        img:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'
        ,
        header:'Everest'
        ,
        location:'napal'
        ,
        pricefrom:900
      }];

      RewievInfo=[{
        classnames: 'Rev1', //don't changeanything in this row
        h3: 'Best feelings', //don't changeanything in this row
        img: 'https://cdn.pixabay.com/photo/2019/09/22/16/07/girls-4496420_960_720.jpg',
        pText: 'Lorem ipsum dolor sit amet consectetur. Nulla in malesuada ipsum non. Tristique feugiat  ',
      },
      {
        classnames: 'Rev2',//don't changeanything in this row
        h3: 'Hard Decision', //don't changeanything in this row
        img: 'https://i.guim.co.uk/img/media/765e1ebb3f2922dfc1b84d167fe373ea01db0493/0_374_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=72965e81d5af51e69ad9e609b91359da',
        pText: 'Lorem ipsum dolor sit amet consectetur. Nulla in malesuada ipsum non. Tristique feugiat  ',
      }
      ];

      break;

    case 'NORTH AMERICA':
 
      info = [{
        img:'https://upload.wikimedia.org/wikipedia/commons/8/8b/Denali_Mt_McKinley.jpg'
        ,
        header:'Denali '
        ,
        location:' Alaska'
        ,
        pricefrom:1800
      },
      {
        img:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Pico_Orizaba1.jpg'
        ,
        header:'Pico de Orizaba '
        ,
        location:'mexico'
        ,
        pricefrom:1500
      },
      {
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mount_Whitney_2003-03-25.jpg/1280px-Mount_Whitney_2003-03-25.jpg'
        ,
        header:' Mount Whitney'
        ,
        location:' California'
        ,
        pricefrom:2100
      },
 
      
      
    
    
    
    ];
      break;

    case 'SOUTH AMERICA':

      info = [{
        img:'https://images.memphistours.com/large/1387bd22f686f0616a4943df05122ea3.jpg'
        ,
        header:'Aconcagua '
        ,
        location:'Argentina'
        ,
        pricefrom:910
      }];

      break;

    case 'AFRICA':

      info = [{  img:'https://images.memphistours.com/large/bb0c8432b78b126488d0c279ba0e19ea.jpg'
      ,
      header:'Jabal Mousa'
      ,
      location:'Egypt'
      ,
      pricefrom:650
      }
    ,
    {  img:'https://images.memphistours.com/large/7dc8a986109c7b4363bc2f445d5d7c7a.jpg'
      ,
      header:'Table Mountain'
      ,
      location:'South Africa'
      ,
      pricefrom:750
      }
    
    ];
    
      break;

    default:
      info=[   {  img:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg'
      ,
      header:'Everest'
      ,
      location:'napal'
      ,
      pricefrom:800
    },
    {
      img:'https://upload.wikimedia.org/wikipedia/commons/1/19/Whitney_Portal_Road_line_can_be_seen_front_from_us_-_Flickr_-_daveynin.jpg'
      ,
      header:'Whitney'
      ,
      location:'California'
     ,
      pricefrom:150
    }
    ,
    {
      img:'https://images.arigatotravel.com/wp-content/uploads/2019/06/27234354/shutterstock_119011768-e1560143978361.jpg'
      ,
      header:'Fuji'
      ,
      location:'Japan'
     ,
      pricefrom:320
    }
    ,
    {  img:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/262519802.jpg?k=4c0da808b2770443afbc9ce03053b337bc94ba73b9d287f659c6ec2bbbe0c3bb&o=&hp=1'
    ,
    header:'Mitchell'
    ,
    location:'California'
    ,
    pricefrom:250
    }
    ,
    {  img:'https://images.memphistours.com/large/bb0c8432b78b126488d0c279ba0e19ea.jpg'
,
header:'Jabal Mousa'
,
location:'Egypt'
,
pricefrom:650
}];

    RewievInfo=[{
      classnames: 'Rev1', //don't changeanything in this row
      h3: 'Best feelings',
      img: 'photos/pexels-yaroslav-shuraev-4763907 1forexample.png',
      pText: 'lorem msoosfuoyb saduitf tyi86d f jhbxn 8 UYD GF  I DFGSDY  ILU78OD FTYUYA YCDGI76DF',
    },
    {
      classnames: 'Rev2',//don't changeanything in this row
      h3: 'Hard Decision',
      img: 'https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais',
      pText: 'lorem msoosfuoyb saduitf tyi86d f jhbxn 8 UYD GF  I DFGSDY  ILU78OD FTYUYA YCDGI76DF',
    }
    
    ];
}
updateCards();
}