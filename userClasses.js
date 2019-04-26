class Users {
    constructor (firstName, lastName, eMail, username, password, levelofstudy = null, imagechoiceFirst = null,  imagechoiceSecond = null) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.eMail = eMail;
    this.username =username;
    this.password =password;
    this.levelofstudy = levelofstudy;
    this.imagechoiceFirst = imagechoiceFirst;
    this.imagechoiceSecond =imagechoiceSecond;
    }


    // constructor (properties you have) not same as variable (is just a label)
    // createString () {
    // return this.firstName + "" + this.lastName ^ 
    // }

}

function getUsers() {
  var users=[]
  
  users.push(new Users ("Amelie", "Schwall", "amsc15ab@student.cbs.dk", "amelie", "cbsmatch2", "MA", "1", "3" ))
  users.push(new Users ("Tilla Marie", "Lønnum", "illa@student.cbs.dk", "tilla", "cbsmatch2", "BA", "1", "4" ))
  users.push(new Users ("Emil Elling", "Jørgensen", "emil@student.cbs.dk", "emil", "cbsmatch3", "BA", "2", "3" ))

  return users
}
 

