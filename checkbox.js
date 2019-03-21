function onlyOneCheckBox() {
var checkbox = document.getElementById ("checkbox").getElementsByTagName("input");
var limit = 1; 
for (var i = 0; i< checkbox.length; i++){
    checkbox[i].onclick = function () {
        var checkedcount = 0; 
        for (var i = 0; i < checkbox.length; i++){
            checkedcount +=(checkbox[i].checked) ? 1 : 0; 

        }
    }
    if (checkedcount > limit) {
        alert ("Plese select only one degree");
        this.checked = false;
    }
}

}








        






