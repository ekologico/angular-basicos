/*
componente como si fuera un lego, con su clase

*/
import { Component } from "@angular/core"; // porque está hecho de angualar


@Component ({
    selector: 'app-contador',
    template:`
    <h1>{{titulo}}</h1>

<h3>La base es: <strong>5 </strong></h3>
<button (click)="acumular(base)"> {{base}}</button>
<span> {{numero}} </span>
<button (click)="acumular(-base)"> {{-base}} </button>
    `
})

export class ContadorComponent {

    titulo:string = 'Contador app';
    numero:number= 10;
    base  : number =5;
  
    acumular(valor:number){
      this.numero +=valor;
    }

}