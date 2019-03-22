/*This is the main function file for our registration page.
User (seeker) gets to this page when there is a match with a host
*/

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

// Function for adding users 
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const eMailUI = document.getElementById('email')
const usernameUI = document.getElementById('username') 
const passwordUI = document.getElementById('password')
const submitBtnUI = document.getElementById('submit')

submitBtnUI.onclick = function () {
   
      if(firstNameUI.value.length > 0 && lastNameUI.value.length > 0 && usernameUI.value.length > 0 && passwordUI.value.length > 0) {
        if(passwordUI.value.length > 7) { 
        var firstName = firstNameUI.value
        var lastName = lastNameUI.value
        var username = usernameUI.value
        var password = passwordUI.value
        users.push({firstName: firstName, lastName: lastName, username: username, password: password})
        document.getElementById('resultSpan').innerText = "The user has been created"
        console.log(users);
        firstNameUI.value ="";
        lastNameUI.value = "";
        usernameUI.value = "";
        passwordUI.value = "";
        }
        else {
          document.getElementById('resultSpan').innerText="Your password is too short"
        }
      }
      else {
        document.getElementById('resultSpan').innerText="You need to fill out the form"
        return false
      }
      for (let i = 0; i < users.length; i++) {
        if (usernameUI.value === users[i].username)
        document.getElementById('resultSpan').innerText="Username is already in use"
        return false
      }
    
    users.push({firstName: firstname, lastName: lastname, username: username, password: password})
  }
