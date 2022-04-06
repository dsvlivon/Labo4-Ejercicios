import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//todo lo q esta aca es lo q usa mi servicio. si agrego un componente o un control lo tengo q declarar
//CADA VEZ Q AGREGO ALGO, DELCARO, DOY REFERENCIA Y AGREGO
//lo q creas propio lo agrega solo ng
//si importo algo d otro lado lo tengo q hacer manual
