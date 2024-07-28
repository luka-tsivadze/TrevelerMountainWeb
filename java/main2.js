

  var cardContainer = document.getElementById('card-container');
  
  function updateCards() {
    cardContainer.innerHTML = ''; // Clear the existing card elements
  
    info.forEach(function (cardData) {
      var cardElement = document.createElement('div');
      cardElement.className = 'card';
  
      var imgElement = document.createElement('img');
      imgElement.src = cardData.img;
      imgElement.alt = '';
  
      var cover = document.createElement('div');
      cover.className = 'cover';
  
      var headerElement = document.createElement('h3');
      headerElement.className = 'headerM';
      headerElement.textContent = cardData.header;
  
      var locationElement = document.createElement('p');
      locationElement.className = 'location';
      locationElement.innerHTML = `<img class="icon" src="icons/Subtractlocation.png" alt="">${cardData.location}`;
  
      var priceElement = document.createElement('p');
      priceElement.className = 'price';
      priceElement.textContent = 'from ' + cardData.pricefrom + '$';
  
      var rowElement = document.createElement('div');
      rowElement.className = 'rowM';
      rowElement.appendChild(locationElement);
      rowElement.appendChild(priceElement);
  
      cover.appendChild(headerElement); 
      cover.appendChild(rowElement);
  
      cardElement.appendChild(imgElement);
      cardElement.appendChild(cover);
      cardContainer.appendChild(cardElement);
    });
  }
  


  // Create elements only once

const cardRightElement = document.createElement('div');
cardRightElement.className = 'cardRightSide';
const h3 = document.createElement('h3');
const p = document.createElement('p');
const btn = document.createElement('button');
btn.textContent = 'Read more';

cardRightElement.appendChild(h3);
cardRightElement.appendChild(p);
cardRightElement.appendChild(btn);

updateReviewCards(RewievInfo);
// Initial content for the review cards


// Display the default content initially


for (let i of buttons) {
  i.addEventListener('click', function () {
  
    updateReviewCards(RewievInfo);
  });
}

function updateReviewCards(data) {
  for (const reviewData of data) {
    let card = document.querySelector('.'+ reviewData.classnames);
    const cardImg = document.createElement('img');
    cardImg.src = reviewData.img;
      h3.textContent = reviewData.h3;
      p.textContent = reviewData.pText;

      card.innerHTML = ''; // Clear existing content
      card.appendChild(cardImg);
      card.appendChild(cardRightElement.cloneNode(true)); // Clone the cardRightElement
    
  }
}

updateCards(); // Assuming this function is defined elsewhere in your code

  