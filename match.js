matchArray = []

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
