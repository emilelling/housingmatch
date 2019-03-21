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