import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {

  isOpen: boolean = false;

  cartShow() {
    this.isOpen = !this.isOpen;
  }

}
