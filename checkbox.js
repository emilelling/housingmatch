function onlyOneCheckBox () {
    var bachelor = document.getElementById("BA").checked;
    var master = document.getElementById("MA").checked;
        if (bachelor == false && master == false)
        {
           alert("Please check one box");
           return false; 
        }
    
        if (bachelor == true && master == true)
        {
            alert("Please just check one box");
            return false; 
        }
    }







        






