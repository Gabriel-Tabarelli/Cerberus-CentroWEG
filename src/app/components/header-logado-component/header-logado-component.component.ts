import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-logado-component',
  templateUrl: './header-logado-component.component.html',
  styleUrls: ['./header-logado-component.component.css']
})
export class HeaderLogadoComponentComponent {

  isOpen = false;

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

}
