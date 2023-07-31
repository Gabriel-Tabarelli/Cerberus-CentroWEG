import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {

  isOpen: boolean = false;
  pesquisa: any = '';
  
  constructor(private renderer: Renderer2,
    private router: Router) { }

  cartShow() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(document.body, 'no-scrollbar');
    } else {
      this.renderer.removeClass(document.body, 'no-scrollbar');
    }
  }

  onEnter(event: KeyboardEvent | Boolean) {
    if (event instanceof KeyboardEvent && event.key === "Enter") {
      this.router.navigate(['/search-page/' + (<HTMLInputElement>event.target).value]);
      (<HTMLInputElement>event.target).value = "";
      (<HTMLInputElement>event.target).blur()
    } else if (event == true) {
      this.router.navigate(['/search-page/' + this.pesquisa]);
      this.pesquisa = "";
    }
  }

}
