
// hard coded users
var users=[
 {
    firstName:"Amelie",
    lastName:"Schwall",
    eMail:"amelie@student.cbs.dk", 
    username:"amelie", 
    password:"12345678"
},
{
    firstName:"Tilla Marie",
    lastName:"Lønnum",
    eMail:"tilla@student.cbs.dk", 
    username:"tilla", 
    password:"cbsmatch"
},
{
    firstName:"Emil Elling",
    lastName:"Jørgensen",
    eMail:"emil@student.cbs.dk", 
    username:"tilla", 
    password:"cbsmatch"
    
}
]


// Function for adding users 
const firstNameUI = document.getElementById ('first-name')
const lastNameUI = document.getElementById ('last-name')
const usernameUI = document.getElementById ('username')
const passwordUI = document.getElementById ('password')
const eMailUI = document.getElementById('e-mail')
const submitUI = document.getElementById('submit')

var firstName = firstNameUI.value
var lastName = lastNameUI.value
var username = usernameUI.value
var password = passwordUI.value

submitUI.onclick = function () {
 if(firstNameUI.value.length === 0 || lastNameUI.value.length === 0 || usernameUI.value.length === 0 || passwordUI.value.length === 0) {
 alert ("You need to fill out the form");
 return false;
 }
 if(passwordUI.value.length < 5) {
    alert ("Your password is too short");
    return false;
   }

//  if (eMailUI.value.endsWith("@student.cbs.dk")){

//      users.push({firstName: firstName, lastName: lastName, username: username, password: password})
//    //users.push(new User(firstName, lastName, username, password))
//    // class with  different propoerties assigned
//    // class firstName: lastName:  username:  password:
//      console.log(users);
    
//    }
//  else {
//    // firstNameUI.value ="";
//    // lastNameUI.value = "";
//    usernameUI.value = "";
//    passwordUI.value = "";
//    alert ("Please enter a valid CBS email");
//    }

   window.localStorage.setItem("users", JSON.stringify(users));
   JSON.parse(window.localStorage.getItem("users"));

   document.getElementById('registration') .style.display ='none';
   document.getElementById('checkbox') .style.display = 'block';
   document.getElementById('moodpictures') .style.display = 'none';
 }




const images = document.getElementsByClassName('image')
for (image of images) {
  image.onclick = function() {
    console.log(this.dataset.itemid);
  }
}
