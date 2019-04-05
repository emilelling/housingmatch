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

var activeUser = JSON.parse(localStorage.getItem('activeuser'))
console.log(activeUser)
console.log(hosts)
  const filteredHosts = hosts.filter(function (host) {
    return host.levelofstudy == activeUser[0].levelofstudy 
  }) 

  const filteredHostImg = filteredHosts.filter (function (host) {
    return host.imagechoiceFirst == activeUser[0].imagechoiceFirst || host.imagechoiceSecond == activeUser[0].imagechoiceSecond
  })

console.log(filteredHostImg)



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