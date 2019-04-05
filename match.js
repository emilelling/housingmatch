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

// the two above are the same as the callback function below


  const filteredHosts = hosts.filter(function (host) {
    return host.levelofstudy == activeUser.levelofstudy 
  })

  console.log(filteredHosts)

//   if(activeUser.levelofstudy == hosts[i].levelofstudy && activeUser.imageChoiceFirst == hosts[i].imageChoiceFirst){
//   matchArray.push(hosts[i])
//   }

//   else if(activeUsers.levelofstudy == hosts[i].levelofstudy && activeUser.imageChoiceSecond == hosts[i].imageChoiceSecond) {
//   matchArray.push(hosts[i])
//   }


//  //retrieved from method in class

// var htmlString = ""
// var span1 = document.getElementById('match1')
// var span2 = document.getElementById('match2')
 
//  // Will run through every item in the random array and push to string
//  //matchArray refers to the array of hosts that match the user


//  for (i=0; i < matchArray.length; i++){
//   htmlString += matchArray[i].createString()
//  }
//  //Push to html
//  span1 += htmlString