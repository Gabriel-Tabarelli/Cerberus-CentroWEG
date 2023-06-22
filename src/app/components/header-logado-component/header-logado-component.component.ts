import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header-logado-component',
  templateUrl: './header-logado-component.component.html',
  styleUrls: ['./header-logado-component.component.css']
})
export class HeaderLogadoComponentComponent {

  isOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  cartShow() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(document.body, 'no-scrollbar');
    } else {
      this.renderer.removeClass(document.body, 'no-scrollbar');
    }
  }

}
