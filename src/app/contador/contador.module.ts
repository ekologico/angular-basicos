/*
esto es el módulo que a su vez tiene componentes que a su vez es llamado
por el modulo principal de la app.
creo
hermes
*/


import {NgModule  } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';




@NgModule({
declarations: [
 ContadorComponent   
],
exports: [
    ContadorComponent
]

})
export class ContadorModule{

}



