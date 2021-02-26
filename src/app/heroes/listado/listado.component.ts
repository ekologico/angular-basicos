import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent  {

heroes: string[]=['spiderman', 'otroSuper', 'batman'];
heroeBorrado: string='';

borrarHeroe(){

  console.log("borrado");
   this.heroeBorrado = this.heroes.pop() || '';
   

}

}
