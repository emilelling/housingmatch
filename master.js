let users;
let activeUser;

/* It is checked whether the user is existing in the local storage, 
if it is equal to == null → we created a function within the userClasses.js file consisting of hard coded users and to an empty array*/
if (localStorage.getItem('users') == null) {
  users = getUsers();
} else {
  users = JSON.parse(localStorage.getItem("users"))
}
// var activeUser = JSON.parse(localStorage.getItem('activeUser'))
// console.log(activeUser)

// Function for adding users 
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username')
const passwordUI = document.getElementById('password')
const eMailUI = document.getElementById('e-mail')
const submitUI = document.getElementById('submit')
const loginUI = document.getElementById ('login')
//const bachelorUI = document.getElementById('BA')
//const masterUI = document.getElementById('MA')
// const checkBoxUI = document.getElementById ('checkbox1')


submitUI.onclick = function () {
  // console.log(activeUser)
  var firstName = firstNameUI.value
  var lastName = lastNameUI.value
  var username = usernameUI.value
  var password = passwordUI.value
  var eMail =  eMailUI.value
  
  // The password has to be longer than 5 characters, the fields can't be empty
  if(firstNameUI.value.length === 0 || lastNameUI.value.length === 0 || usernameUI.value.length === 0 || passwordUI.value.length === 0) {
    alert ("You need to fill out the form");
    return false;
  }

  if (eMailUI.value.endsWith("@student.cbs.dk")){
    console.log(users);
  }

  else {
    usernameUI.value = "";
    passwordUI.value = "";
    alert ("Please enter a valid CBS email");
    return false;
  }

  if(passwordUI.value.length < 5) {
    alert ("Your password is too short");
    return false;
  }

/*The newUser (variable) pushes by default to the users class, 
it is the same as our “new Users” but with a specific set of dataids in which it pushes*/  
  let newUser = new Users(firstName, lastName, eMail, username, password)
  
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users))
  
  activeUser = newUser
  localStorage.setItem('activeUser', JSON.stringify(activeUser))

  document.getElementById('registration') .style.display ='none';
  document.getElementById('checkbox') .style.display = 'block';
  document.getElementById('moodpicturesFirst') .style.display = 'none';
  document.getElementById('moodpicturesSecond') .style.display = 'none';
  document.getElementById('imagesubmitbtn') .style.display ='none';
  document.getElementById('loginfunction') .style.display ='none';
}

// Login function 
loginUI.onclick = function () {
  console.log ('loginUser')

  // retreive data from username and passowrd and store in username/password variable
  let inputUsername = document.getElementById('usernameLogin').value;
  let inputPassword = document.getElementById('passwordLogin').value;

  if (inputPassword.length < 1 || inputUsername.length < 1) {
    alert("You should input something");
    return false;
  }

  // // Checks if user is in localstorage - if not, creates empty array - if is it accesses the localstorage users array ---------------------  Screenshot for report?

  // loop through all the user objects and confrim if the username and password are correct
  for(var i = 0; i < users.length; i++) {
  // check to
    if(inputUsername == users[i].username && inputPassword == users[i].password) {
      activeUser = users[i]
      localStorage.setItem('activeUser', JSON.stringify(activeUser));
    // stop the statement if result is found true - this was a return in the video, break is best practice here
      window.location.href = "./match.html";
      return false;
    } 
  }
  // error if username and password don’t match
  alert('Try again');
}  

// Checkbox function
function checkBox () { 
  var bachelor = document.getElementById("BA").checked;
  var master = document.getElementById("MA").checked;
  if (bachelor == false && master == false) {
    alert("Please check one box");
    return false; 
  }

  else if (bachelor == true && master == true) {
    alert("Please check just one box");
    return false; 
  }

  if ((document.getElementById("BA").checked == true) && (document.getElementById("MA").checked == false)) {
    document.getElementById('registration') .style.display ='none';
    document.getElementById('checkbox') .style.display = 'none';
    document.getElementById('moodpicturesFirst') .style.display = 'block';
    document.getElementById('moodpicturesSecond') .style.display = 'none';
    document.getElementById ('imagesubmitbtn').style.display ='none';

    activeUser.levelofstudy = 'BA'
    users.levelofstudy = 'BA'

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    console.log(activeUser)
    return false;
  }
 
  else if ((document.getElementById("BA").checked == false) && (document.getElementById("MA").checked == true)) {
    document.getElementById('registration') .style.display ='none';
    document.getElementById('checkbox') .style.display = 'none';
    document.getElementById('moodpicturesFirst') .style.display = 'block';
    document.getElementById('moodpicturesSecond') .style.display = 'none';
    document.getElementById ('imagesubmitbtn').style.display ='none';
 
    activeUser.levelofstudy = 'MA'
    users.levelofstudy = 'MA'

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("activeUser", JSON.stringify(activeUser));
    console.log(activeUser);
    return false; 
  }
}
     
// Image function 1
const imagesFirst = document.getElementsByClassName('imageFirst')
for (image of imagesFirst) {
  image.onclick = function() {
    console.log(this.dataset.itemid);
    activeUser.imagechoiceFirst = this.dataset.itemid
    
    window.localStorage.setItem("users", JSON.stringify(users));
    window.localStorage.setItem("activeUser", JSON.stringify(activeUser));
 
    document.getElementById('moodpicturesFirst') .style.display = 'none';
    document.getElementById('moodpicturesSecond') .style.display = 'block';
    document.getElementById ('imagesubmitbtn').style.display ='none';
    
  }
}

// Image function 2
const imagesSecond = document.getElementsByClassName('imageSecond')
for (image of imagesSecond) {
  image.onclick = function() {
    console.log(this.dataset.itemid);
    activeUser.imagechoiceSecond = this.dataset.itemid

    window.localStorage.setItem("users", JSON.stringify(users));
    window.localStorage.setItem("activeUser", JSON.stringify(activeUser));


    document.getElementById('moodpicturesFirst') .style.display = 'none';
    document.getElementById('moodpicturesSecond') .style.display = 'none';
    document.getElementById ('imagesubmitbtn').style.display ='block';


    document.getElementById('imagebtn').onclick = function() {
      window.location.href = "./match.html";
    }
  }
}