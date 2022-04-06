export class Usuario {
    pass:string="";
    mail:string="";
    
    defPass="1234";
    defMail="daniel@utn.com";

    
    Login(){ 
      if(this.pass == this.defPass
        && this.mail == this.defMail){
            console.info("sos un capo entraste!")
      } else {
          console.info("flasheaste");
      }
    }
}
