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

    createString () {
    return this.firstName + "" + this.lastName 
    }

}


