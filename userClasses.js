class Users {
    constructor (firstName, lastName, eMail, username, password, levelofstudy, imagechoiceFirst,  imagechoiceSecond) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.eMail = eMail;
    this.username =username;
    this.password =password;
    this.levelofstudy = levelofstudy;
    this.imagechoiceFirst = imagechoiceFirst;
    this.imagechoiceSecond =imagechoiceSecond;
    }

    // createString () {
    // return this.firstName + "" + this.lastName 
    // }

}

var users=[]

users.push(new Users
  ("Amelie", "Schwall", "amsc15ab@student.cbs.dk", "amelie", "cbsmatch2", "levelofstudy", null, null ), 
  ("Tilla Marie", "Lønnum", "illa@student.cbs.dk", "tilla", "cbsmatch2", "levelofstudy", null, null),
  ("Emil Elling", "Jørgensen", "emil@student.cbs.dk", "emil", "cbsmatch3", "levelofstudy", null, null)
  )
 

