// let users = localStorage.getItem ("users")
// users = JSON.parse(users)



matchArray = []
for(i = 0; i < users.length; i++) {
  if(activeUser.levelofstudy == hosts[i].levelofstudy && activeUser.imageChoiceFirst == hosts[i].imageChoiceFirst){
  matchArray.push(hosts[i])
  }

  else if(activeUsers.levelofstudy == hosts[i].levelofstudy && activeUser.imageChoiceSecond == hosts[i].imageChoiceSecond) {
  matchArray.push(hosts[i])
  }
}

 //retrieved from method in class

var htmlString = ""
var span1 = document.getElementById('match1')
var span2 = document.getElementById('match2')
 
 // Will run through every item in the random array and push to string
 //matchArray refers to the array of hosts that match the user


 for (i=0; i < matchArray.length; i++){
  htmlString += matchArray[i].createString()
 }
 //Push to html
 span1 += htmlString