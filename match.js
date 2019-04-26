// let users = localStorage.getItem ("users")
// users = JSON.parse(users)



matchArray = []

// OTHER OPTIONS:
//1.
// hosts.forEach(function (host) {
//   console.log(host.name)
// })

//2.
// for (let i = 0; i < hosts.length; i++) {
//   console.log(hosts[i].name)
// }

// the two above are the same as the filter function below

var activeUser = JSON.parse(localStorage.getItem('activeUser'))
console.log(activeUser)
console.log(hosts)
  const filteredHosts = hosts.filter(function (host) {
    return host.levelofstudy == activeUser.levelofstudy 
  }) 

  const filteredHostImg = filteredHosts.filter (function (host) {
    return host.imagechoiceFirst == activeUser.imagechoiceFirst || host.imagechoiceSecond == activeUser.imagechoiceSecond
    
    
  })


console.log(filteredHostImg)
document.getElementById("hostmatch1").innerHTML = filteredHostImg[0].firstName + " " + filteredHostImg[0].lastName + "<br>" + filteredHostImg[0].eMail + "<br>" + filteredHostImg[0].price + "<br>" + filteredHostImg[0].location + "<br>" + filteredHostImg[0].levelofstudy;
document.getElementById("hostmatch2").innerHTML = filteredHostImg[1].firstName + " " + filteredHostImg[1].lastName + "<br>" + filteredHostImg[1].eMail + "<br>" + filteredHostImg[1].price + "<br>" + filteredHostImg[1].location + "<br>" + filteredHostImg[1].levelofstudy;
document.getElementById("hostmatch3").innerHTML = filteredHostImg[2].firstName + " " + filteredHostImg[2].lastName + "<br>" + filteredHostImg[2].eMail + "<br>" + filteredHostImg[2].price + "<br>" + filteredHostImg[2].location + "<br>" + filteredHostImg[2].levelofstudy;
document.getElementById("hostmatch4").innerHTML = filteredHostImg[3].firstName + " " + filteredHostImg[3].lastName + "<br>" + filteredHostImg[3].eMail + "<br>" + filteredHostImg[3].price + "<br>" + filteredHostImg[3].location + "<br>" + filteredHostImg[3].levelofstudy;
// console.log(filteredHostImg)
arrowright.onclick = function() {
  document.getElementById ('match1').style.display ='none';
  document.getElementById ('match2').style.display ='none';
  document.getElementById ('match3').style.display ='block';
  document.getElementById ('match4').style.display ='block';
}

arrowleft.onclick = function() {
  document.getElementById ('match1').style.display ='block';
  document.getElementById ('match2').style.display ='block';
  document.getElementById ('match3').style.display ='none';
  document.getElementById ('match4').style.display ='none';
}

console.log("check")
function textmatch(e) {
  let id = e.dataset.id
  alert ("email has been sent to " + filteredHostImg[id].eMail)

}

// If function of matches succeed
// Display value 0 Match in match1 ID + display value 1 match in match2 ID etc.
// Create predefined HTML that appears/dissapears when arrow is pushed (use code from index.html)



 //retrieved from method in class

// var htmlString = ""
// var li = document.getElementById('match1')
// var li = document.getElementById('match2')

//This string should retrieve host matches firstname of first match
// var htmlString = "";

// var li = htmlString.indexOf("loc);
// document.getElementById("firstName1").innerHTML = pos;


// var hostmatchfirstname1 = "boo";
// var hostmatchlastname1 = "hej hej hej";
// var hostmatchprice1 = "hej hej hej";
// var hostmatchlocation1 = "hej"; 

// document.getElementById("hostmatch").innerHTML = hostmatchfirstname1 + "<br>" + hostmatchlastname1 + "<br>"+ hostmatchprice1 + "<br>" + hostmatchlocation1;


 // Will run through every item in the random array and push to string
 //matchArray refers to the array of hosts that match the user


//  for (i=0; i < matchArray.length; i++){
//   htmlString += matchArray[i].createString()
//  }
//  //Push to html
//  span1 += htmlString