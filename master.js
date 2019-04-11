
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
  console.log(activeUser)
  var firstName = firstNameUI.value
  var lastName = lastNameUI.value
  var username = usernameUI.value
  var password = passwordUI.value
  var eMail =  eMailUI.value
  
 // activate later!! 
 //if(firstNameUI.value.length === 0 || lastNameUI.value.length === 0 || usernameUI.value.length === 0 || passwordUI.value.length === 0) {
 //alert ("You need to fill out the form");
 //return false;
 //}
//  if(passwordUI.value.length < 5) {
//     alert ("Your password is too short");
//     return false;
//    }

 if (true ||eMailUI.value.endsWith("@student.cbs.dk")){
    // activeUser = {firstName: firstName, lastName: lastName, eMail: eMail, username: username, password: password}
  activeUser.push(new Users (firstName, lastName, username, password, eMail, null, null, null))
     users.push(activeUser);
     console.log(users);
     
    // localStorage.setItem ("activeuser", JSON.stringify(activeUser))
   }
 else {
   // firstNameUI.value ="";
   // lastNameUI.value = "";
   usernameUI.value = "";
   passwordUI.value = "";
   alert ("Please enter a valid CBS email");
   }

  //  window.localStorage.setItem("users", JSON.stringify(users));
  //  JSON.parse(window.localStorage.getItem("users"));

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
  let inputUsername = document.getElementById('username').value;
  let inputPassword = document.getElementById('password').value;

  if (inputPassword.length < 1 || inputUsername.length < 1) {
      alert("You should input something");
      return false;
  }

  if (localStorage.getItem('user' === null)) {
    users = [
      // // hardcoded user
      // new User ('Amelie', 'Schwall', 'amsc15ab@student.cbs.dk', 'cbsmatch')
    ];
    localStorage.setItem('users',JSON.stringify(users));
  }
  else {
    users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
      users[i] = new User(users[i].firstName, users[i].lastName, users[i].eMail, users[i].username, users[i].password);
    }
 }

// loop through all the user objects and confrim if the username and password are correct
for(var i = 0; i < users.length; i++) {
  // check to
  if(inputUsername == users[i].username && inputPassword == users[i].password) {
      alert(`Welcome ${username}`);
      // stop the statement if result is found true - this was a return in the video, break is best practice here
  }
}
// error if username and password don’t match
alert('Incorrect username or password');

}


//   for (let i = 0; i < users.length; i ++) {
//     if //we want to check if the username and password already excist in the local storage {  
//         alert('Login is correct')
//         localStorage.setItem('activeUser', JSON.stringify(users[i]));
//         document.getElementById('registration') .style.display ='none';
//         document.getElementById('checkbox') .style.display = 'block';
//         document.getElementById('moodpicturesFirst') .style.display = 'none';
//         document.getElementById('moodpicturesSecond') .style.display = 'none';
//         document.getElementById('imagesubmitbtn') .style.display ='none';
//         return true;
//     }
// }
   
 
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
         document.getElementById('moodpicturesFirst') .style.display = 'block';
         document.getElementById('moodpicturesSecond') .style.display = 'none';
         document.getElementById ('imagesubmitbtn').style.display ='none';
      

        //  window.localStorage.setItem("users", JSON.stringify(users));
        //  JSON.parse(window.localStorage.getItem("users"));
         activeUser[0].levelofstudy = 'BA'
         console.log(activeUser)
         return false;
        
         
     }
 

     else if ((document.getElementById("BA").checked == false) && (document.getElementById("MA").checked == true)) {
         document.getElementById('registration') .style.display ='none';
         document.getElementById('checkbox') .style.display = 'none';
         document.getElementById('moodpicturesFirst') .style.display = 'block';
         document.getElementById('moodpicturesSecond') .style.display = 'none';
         document.getElementById ('imagesubmitbtn').style.display ='none';

  
     
        //  window.localStorage.setItem("users", JSON.stringify(users));
        //  JSON.parse(window.localStorage.getItem("users"));
         activeUser[0].levelofstudy = 'MA'
         console.log(activeUser)
         return false;
        
     }


    }
     


// Image function 1
const imagesFirst = document.getElementsByClassName('imageFirst')

for (image of imagesFirst) {
  image.onclick = function() {
    console.log(this.dataset.itemid);
    activeUser[0].imagechoiceFirst = this.dataset.itemid

 
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
    activeUser[0].imagechoiceSecond = this.dataset.itemid

    window.localStorage.setItem("users", JSON.stringify(users));

    window.localStorage.setItem("activeuser", JSON.stringify(activeUser));
    document.getElementById('moodpicturesFirst') .style.display = 'none';
    document.getElementById('moodpicturesSecond') .style.display = 'none';
    document.getElementById ('imagesubmitbtn').style.display ='block';


    document.getElementById('imagebtn').onclick = function() {
      window.location.href = "./match.html";
    }
  }
}
