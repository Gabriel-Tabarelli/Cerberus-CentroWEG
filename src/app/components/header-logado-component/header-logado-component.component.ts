import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header-logado-component',
  templateUrl: './header-logado-component.component.html',
  styleUrls: ['./header-logado-component.component.css']
})
export class HeaderLogadoComponentComponent {

  isOpenCart: boolean = false;
  isOpenUser: boolean = false;

  constructor(private renderer: Renderer2) {}

  cartShow() {
    this.isOpenCart = !this.isOpenCart;
    if (this.isOpenCart) {
      if(this.isOpenUser) {
        this.userShow();
      }
      this.renderer.addClass(document.body, 'no-scrollbar');
    } else {
      this.renderer.removeClass(document.body, 'no-scrollbar');
    }
  }

  userShow() {
    this.isOpenUser = !this.isOpenUser;
    if (this.isOpenUser) {
      this.renderer.addClass(document.body, 'no-scrollbar');
    } else {
      this.renderer.removeClass(document.body, 'no-scrollbar');
    }
  }



}
