
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
// const bachelorUI = document.getElementById('BA')
// const masterUI = document.getElementById('MA')
// const checkBoxUI = document.getElementById ('checkbox1')


var activeUser
submitUI.onclick = function () {
  console.log(activeUser)
  var firstName = firstNameUI.value
  var lastName = lastNameUI.value
  var username = usernameUI.value
  var password = passwordUI.value
 if(firstNameUI.value.length === 0 || lastNameUI.value.length === 0 || usernameUI.value.length === 0 || passwordUI.value.length === 0) {
 alert ("You need to fill out the form");
 return false;
 }
 if(passwordUI.value.length < 5) {
    alert ("Your password is too short");
    return false;
   }

 if (true ||eMailUI.value.endsWith("@student.cbs.dk")){
    activeUser = {firstName: firstName, lastName: lastName, username: username, password: password}
     users.push(activeUser);
   //users.push(new User(firstName, lastName, username, password))
   // class with  different propoerties assigned
   // class firstName: lastName:  username:  password:
     console.log(users);
    
   }
 else {
   // firstNameUI.value ="";
   // lastNameUI.value = "";
   usernameUI.value = "";
   passwordUI.value = "";
   alert ("Please enter a valid CBS email");
   }

   window.localStorage.setItem("users", JSON.stringify(users));
   JSON.parse(window.localStorage.getItem("users"));

   document.getElementById('registration') .style.display ='none';
   document.getElementById('checkbox') .style.display = 'block';
   document.getElementById('moodpictures') .style.display = 'none';
 }
// Checkbox function
 function checkBox () {

  

 var bachelor = document.getElementById("BA").checked;
 var master = document.getElementById("MA").checked;
     if (bachelor == false && master == false)
     {
        alert("Please check one box");
        return false; 
     }
 
    else if (bachelor == true && master == true)
     {
         alert("Please check just one box");
         return false; 
     }
 


     if ((document.getElementById("BA").checked == true) && (document.getElementById("MA").checked == false)) {
         document.getElementById('registration') .style.display ='none';
         document.getElementById('checkbox') .style.display = 'none';
         document.getElementById('moodpictures') .style.display = 'block';

         activeUser.levelofstudy = 'BA'
         return false;
     }
 

     else if ((document.getElementById("BA").checked == false) && (document.getElementById("MA").checked == true)) {
         document.getElementById('registration') .style.display ='none';
         document.getElementById('checkbox') .style.display = 'none';
         document.getElementById('moodpictures') .style.display = 'block';
     
         activeUser.levelofstudy = 'MA'
         return false;
     }

    //  document.getElementById ('checkbox1')
    //  addEventListener("click", checkBox);
    //  function () {
    //   window.localStorage.setItem("users", JSON.stringify(users));
    //   JSON.parse(window.localStorage.getItem("users"));
    }
     
     // we need to notice the click on checkbox
     // then we need to store the choice (value) and assign it to the activeUser
     // Then we have to do the "same" for moodpictures
     // assign each picture to a value, register the choice(click)
     // assign to activeuser

     

     

// Image function
const images = document.getElementsByClassName('image')

for (image of images) {
  image.onclick = function() {
    console.log(this.dataset.itemid);
    activeUser.imagechoice = this.dataset.itemid
  }
  
}


// function checkBox () {
//   var bachelor = document.getElementById("BA").checked;
//   var master = document.getElementById("MA").checked;
//       if (bachelor == false && master == false)
//       {
//          alert("Please check one box");
//          return false; 
//       }
  
//      else if (bachelor == true && master == true)
//       {
//           alert("Please check just one box");
//           return false; 
//       }
  

//       if ((document.getElementById("BA").checked == true) && (document.getElementById("MA").checked == false)) {
//           document.getElementById('registration') .style.display ='none';
//           document.getElementById('checkbox') .style.display = 'none';
//           document.getElementById('moodpictures') .style.display = 'block';
      
//           return false;
//       }
  

//       else if ((document.getElementById("BA").checked == false) && (document.getElementById("MA").checked == true)) {
//           document.getElementById('registration') .style.display ='none';
//           document.getElementById('checkbox') .style.display = 'none';
//           document.getElementById('moodpictures') .style.display = 'block';
      
//           return false;
//       }
//     }   