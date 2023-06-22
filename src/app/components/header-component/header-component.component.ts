import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {

  isOpen: boolean = false;
  
  constructor(private renderer: Renderer2) { }

  cartShow() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(document.body, 'no-scrollbar');
    } else {
      this.renderer.removeClass(document.body, 'no-scrollbar');
    }
  }

}
