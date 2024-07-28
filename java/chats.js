
registred=false;



if( localStorage.getItem('registred:', registred ) ){
  window.location.href = 'profile.html';
}

function getFormValues() {
  var nameValue = document.getElementById('name').value;
  var passwordValue = document.getElementById('password').value;
  var emailValue = document.getElementById('email').value;

  // Check if all required fields are filled
  if (nameValue.trim() === '' || emailValue.trim() === '' || passwordValue.trim() === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // All checks passed, you can now use the values as needed
  console.log('Name:', nameValue);
  console.log('Password:', passwordValue);
  console.log('Email:', emailValue);

  // Adjust the URL to your specific Firebase database endpoint
  var url = 'https://chats-2c54b-default-rtdb.europe-west1.firebasedatabase.app/users.json';
  var data = {
    name: nameValue,
    password: passwordValue,
    email: emailValue,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(responseData => {
      console.log('Response:', responseData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
//registration >^<


let usersinfo=[];
function ChackFormValues() {
  var LnameValue = document.getElementById('Lname').value;
  var LpasswordValue = document.getElementById('Lpassword').value;
  var url = 'https://chats-2c54b-default-rtdb.europe-west1.firebasedatabase.app/users.json';
  
  if (LnameValue.trim() === '' || LpasswordValue.trim() === '') {
    alert('Please fill in all required fields.');
    return;
  }

  fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      // Ensure data is an array or iterable object
      const usersinfo = Array.isArray(data) ? data : Object.values(data);

      console.log('Data:', usersinfo);

      for (let user of usersinfo) {
       
        if (LpasswordValue === user.password || LnameValue==user.name) {
      
        registred=true;
       
        localStorage.setItem('registred:', registred );
        localStorage.setItem('info:', JSON.stringify(user)); 
          window.location.href = 'profile.html';
        }
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
var input=[
  {
    header:'Hello My Friend',
    body:`please sign in into your account
      account with the given
    details to continue 
  `,
  button:'Sign In'
  },
  {
    header:'Welcome Back',
    body:`
    please sign up into your account
     with the given
    details to continue
    `,
    button:'Sign up'
 
  }]

var i=0;

var cover = document.querySelector('.cover');

var header = document.createElement('h1');
header.textContent =  input[0].header;; 


var text = document.createElement('p');
text.textContent =input[0].body;

var button = document.createElement('button');
button.textContent = input[0].button; 


var checkbox = document.getElementById('ch');
console.log(checkbox)
cover.appendChild(header);
cover.appendChild(text);

cover.appendChild(button);

button.addEventListener('click',function(){
  
i++;
if(i%2==0){
  header.textContent = input[0].header;
  text.textContent = input[0].body;
  button.textContent = input[0].button; 
  checkbox.checked = false;
}else{
  checkbox.checked = true;
  header.textContent = input[1].header;
  text.textContent = input[1].body;
  button.textContent = input[1].button; 
}


})