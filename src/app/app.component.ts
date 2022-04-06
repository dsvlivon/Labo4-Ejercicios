import { Component } from '@angular/core';
import { Suma } from './Entidades/suma';
import { Usuario } from './Entidades/usuario';

@Component({ // estp transforma en componente los atributos 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title:string = 'proyecto1';
  sexo:string = 'Humane';
  edad:number = 9;
  miTipo:string = "text";
  miSuma:Suma;
  miUsuario:Usuario;
  /**
   *
   */
  constructor() {
    this.title="";
    this.miSuma=new Suma();
    this.miUsuario=new Usuario();
    
  }

  mostrarAlert(){
    // this.title = "cambiando"
    // alert("Edad: "+this.edad);
    console.info(this.title);
  }

 

}


//esta seria la clase principal
//cada componente q haga es una clase
//cada clase tiene una etiqueta 
//ng generate class Entidades/Suma
//ng build para generar el dist