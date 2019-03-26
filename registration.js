
// hard coded users
var users=[
 {
    firstName:"Amelie",
    lastName:"Schwall",
    eMail:"amsc15ab@student.cbs.dk", 
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
    eMail:"tilla@student.cbs.dk", 
    username:"tilla", 
    password:"cbsmatch"
    
}
]

// // Function for adding users const defines a constant reference to a value
// // we cannot change constant primitive values, but we can change the properties of constant objects
// const firstNameUI = document.getElementById('first-name')
// const lastNameUI = document.getElementById('last-name')
// const eMailUI = document.getElementById('e-mail')
// const usernameUI = document.getElementById('username') 
// const passwordUI = document.getElementById('password')
// const submitBtnUI = document.getElementById('submit')

// submitBtnUI.onclick = function () {

//       if(firstNameUI.value.length > 0 && lastNameUI.value.length > 0 && eMaail.value.length > 0 && usernameUI.value.length > 0 && passwordUI.value.length > 0){
//         if (passwordUI.value.length > 7) {
//           if (eMailUI.contains("@") || eMailUI.contains(".")) {
//         var firstName = firstNameUI.value
//         var lastName = lastNameUI.value
//         var username = usernameUI.value
//         var password = passwordUI.value
//         users.push({firstName: firstName, lastName: lastName, username: username, password: password})    
//         console.log(users);
//         firstNameUI.value ="";
//         lastNameUI.value = "";
//         usernameUI.value = "";
//         passwordUI.value = "";
//         window.location='file:///Users/oliverschwall/Documents/housingmatch/match.html'
//       }
// else { alert ("Please enter valid E-Mail") }

// else { alert ("Password is too short")}
//   }
//         }
//   else {
//         alert("Please fill out the form")
//       }
    
//       for (let i = 0; i < users.length; i++) {
//         if (usernameUI.value === users[i].username)
//       alert ("Username is already in use")
//         return false
//       }
    
//     users.push({firstName: firstname, lastName: lastname, username: username, password: password})
//   }

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

if (localStorage.getItem('users') === null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem('users'));
  for (let i = 0; i < users.length; i++) {
    users[i] = new User(users[i].first-name, users[i].last-name, user[i].e-eMail, users[i].username, users[i].password, users[i].lastAccess);
  }
}


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
