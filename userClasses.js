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


    // constructor (properties you have) not same as variable (is just a label)
    // createString () {
    // return this.firstName + "" + this.lastName 
    // }

}

var users=[]

users.push(new Users
  ("Amelie", "Schwall", "amsc15ab@student.cbs.dk", "amelie", "cbsmatch2", null, null, null ), 
  ("Tilla Marie", "Lønnum", "illa@student.cbs.dk", "tilla", "cbsmatch2", null, null, null),
  ("Emil Elling", "Jørgensen", "emil@student.cbs.dk", "emil", "cbsmatch3", null, null, null)
  )
 

