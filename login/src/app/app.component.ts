import { Component } from '@angular/core';
import { Suma } from './Entidades/suma';
import { Usuario } from './Entidades/usuario';
import { Promedio } from './Entidades/promedio';
import { Calculos } from './Entidades/calculos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string|undefined = 'login';
  miTipo:number;
  calc:Calculos;
  miSuma:Suma;
  prom:Promedio;
  logUsuario:Usuario;


  constructor(){
    this.title='';
    this.miTipo = 0
    this.calc = new Calculos()
    this.miSuma = new Suma()
    this.prom = new Promedio()
    this.logUsuario = new Usuario()

  }
  mostrarAlert(){
    //this.title = "cambiando titulo"
    //this.miTipo =0
  }

  limpiarCampos(){
    this.calc.resP=0;
    this.calc.resS=0;
  }

}
