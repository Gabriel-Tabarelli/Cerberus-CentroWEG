import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserStatusService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-header-logado-component',
  templateUrl: './header-logado-component.component.html',
  styleUrls: ['./header-logado-component.component.css']
})
export class HeaderLogadoComponentComponent implements OnInit {

  pesquisa: any = '';

  constructor(private renderer: Renderer2,
    private sessionService: SessionStorageService,
    private userService: UserStatusService,
    private router: Router,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.quantidadeProdutos = items.length;
      
    });
  }
  quantidadeProdutos: number = 0;
  isOpenCart: boolean = false;
  isOpenUser: boolean = false;

  cartShow() {

    this.isOpenCart = !this.isOpenCart;
    if (this.isOpenCart) {
      if (this.isOpenUser) {
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



  deslogar() {
    this.sessionService.clear();
    this.userService.setUserLoggedOut();
    this.userShow();
    this.router.navigate(['/']);
  }

  navegateTo(){
    this.userShow();
    this.router.navigate(['/profile-page']);
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
