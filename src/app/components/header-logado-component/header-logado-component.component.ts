import { Component } from '@angular/core';

@Component({
  selector: 'app-header-logado-component',
  templateUrl: './header-logado-component.component.html',
  styleUrls: ['./header-logado-component.component.css']
})
export class HeaderLogadoComponentComponent {

  isOpen: boolean = false;

  cartShow() {
    this.isOpen = !this.isOpen;
  }

}
