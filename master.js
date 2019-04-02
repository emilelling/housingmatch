
// Function for adding users 
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username')
const passwordUI = document.getElementById('password')
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
  var eMail =  eMailUI.value
  
 //if(firstNameUI.value.length === 0 || lastNameUI.value.length === 0 || usernameUI.value.length === 0 || passwordUI.value.length === 0) {
 //alert ("You need to fill out the form");
 //return false;
 //}
//  if(passwordUI.value.length < 5) {
//     alert ("Your password is too short");
//     return false;
//    }

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
   document.getElementById('moodpicturesFirst') .style.display = 'none';
   document.getElementById('moodpicturesSecond') .style.display = 'none';
   document.getElementById('imagesubmitbtn') .style.display ='none';

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
         document.getElementById('moodpicturesFirst') .style.display = 'block';
         document.getElementById('moodpicturesSecond') .style.display = 'none';
         document.getElementById ('imagesubmitbtn').style.display ='none';
      

         window.localStorage.setItem("users", JSON.stringify(users));
         JSON.parse(window.localStorage.getItem("users"));
         activeUser.levelofstudy = 'BA'
         return false;
        
         
     }
 

     else if ((document.getElementById("BA").checked == false) && (document.getElementById("MA").checked == true)) {
         document.getElementById('registration') .style.display ='none';
         document.getElementById('checkbox') .style.display = 'none';
         document.getElementById('moodpicturesFirst') .style.display = 'block';
         document.getElementById('moodpicturesSecond') .style.display = 'none';
         document.getElementById ('imagesubmitbtn').style.display ='none';

  
     
         window.localStorage.setItem("users", JSON.stringify(users));
         JSON.parse(window.localStorage.getItem("users"));
         activeUser.levelofstudy = 'MA'
         return false;
        
     }


    //  document.getElementById ('checkbox1')
    //  addEventListener("click", checkBox);
    //  function () {
    //   window.localStorage.setItem("users", JSON.stringify(users));
    //   JSON.parse(window.localStorage.getItem("users"));
    }
     


// Image function 1
const imagesFirst = document.getElementsByClassName('imageFirst')

for (image of imagesFirst) {
  image.onclick = function() {
    console.log(this.dataset.itemid);
    activeUser.imagechoiceFirst = this.dataset.itemid

 
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

    window.localStorage.setItem("activeUser", activeUser.username);
    document.getElementById('moodpicturesFirst') .style.display = 'none';
    document.getElementById('moodpicturesSecond') .style.display = 'none';
    document.getElementById ('imagesubmitbtn').style.display ='block';


    document.getElementById('imagebtn').onclick = function() {
      window.location.href = "./match.html";
    }
  }
}

