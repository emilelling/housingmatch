class Host{
    constructor(firstName,lastName, eMail, username, password, price, location, levelofstudy, imagechoiceFirst, imagechoiceSecond) {
        this.firstName= firstName; 
        this.lastName= lastName; 
        this.eMail = eMail; 
        this.username = username; 
        this.password = password; 
        this.price =price; 
        this.location = location; 
        this.levelofstudy = levelofstudy;
        this.imagechoiceFirst = imagechoiceFirst;
        this.imagechoiceSecond = imagechoiceSecond; 
        
    }
   
}

var hosts=[]

hosts.push(new Host("Victoria", "Baker", "victoriabaker@student.cbs.dk","Viccy", "victoria123", "75000 DKK","Indre By", "BA", "1", "4"))
hosts.push(new Host("Fredrik", "Hansen","fredrikhansen@student.cbs.dk","Fred","hansenfredrik", "4300 DKK", "Nørrebro", "MA","2", "4"))
hosts.push(new Host  ("Phillip", "Thompsen", "phillip.th@student.cbs.dk", "Phillip-Th", "thompsen123", "5450 DKK", "Amager","MA", "1", "3"))
hosts.push(new Host    ("Louise", "Lang", "louiselang@student.cbs.dk", "Lang1", "lang123", "6100 DKK", "Fredriksberg", "BA", "2", "3"))
hosts.push(new Host   ("David", "Sørensen", "davidsørsensen@student.cbs.dk", "DavidS", "davidsørensen", "6700 DKK", "Vestrebro", "BA", "1", "4"))
hosts.push(new Host   ("Sophie ", "Herman", "sophieherman.cbs.dk", "Sophie.herman", "Sophieherman123", "3800 DKK", "Nørrebro", "MA", "2", "4"))
hosts.push(new Host  ("Tyco", "Beck", "tycobeck@student.cbs.dk", "Tyco", "Beck123", "6000 DKK", "Indreby", "MA", "1", "3"))
hosts.push(new Host  ("Lucy", "Watson", "lucyWatson@student.cbs.dk", "Lucywatson", "watson23","4000 DKK", "Østerbro", "BA", "2", "3"))
