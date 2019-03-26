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
            window.location='./BA.html';
            return false;
        }
    

        else if ((document.getElementById("BA").checked == false) && (document.getElementById("MA").checked == true)) {
            window.location='./MA.html';
            return false;
        }
    }
       
    




// // only if one box is checked it should redirect to two more index.html sides
// // one for BA
// // one for MA

// function checkBA(){
// if (document.getElementById("BA").checked) {
//         window.location='file:///Users/oliverschwall/Documents/housingmatch/BA.html';
//         return false;
//     }
//     return true;

// }

// function checkMA(){
//     if (document.getElementById("MA").checked) {
//             window.location='file:///Users/oliverschwall/Documents/housingmatch/MA.html';
//             return false;
//         }
//         return true;
    
//     }