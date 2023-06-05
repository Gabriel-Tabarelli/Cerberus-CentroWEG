import { Component, Input } from '@angular/core';
import { PathBar } from 'src/app/interfaces/PathBar';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})

export class BarraNavegacaoComponent {

  @Input()
  links!: PathBar[];


  last(tipo:string, index:number):string {
    if (index < this.links.length-1 && tipo == "barra") {
      return "barra-normal";
    } if (index < this.links.length-1 && tipo == "textoLink") {
      return "textoLink-normal"
    } if (index >= this.links.length-1 && tipo == "barra") {
      return "barra-ultima"
    } if (index >= this.links.length-1 && tipo == "textoLink") {
      return "textoLink-ultima"
    }
    return "none" 
  }
}
