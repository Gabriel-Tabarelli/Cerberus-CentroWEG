import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product/Product';
import { CartService } from 'src/app/services/cart.service';

import { DialogComponent } from 'src/app/components/dialog-component/dialog-component.component';
import { MatDialog } from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {


  listaDeProdutos: Product[] = []
  constructor(private cartService: CartService,
    private dialog: MatDialog,
    private requestService : RequestService,
    private sessionStorage: SessionStorageService,
    private route: Router,
    private activactedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(cart => {
      this.listaDeProdutos = cart?.produtos ?? [];
    });

  }

  @ViewChild('resumo') resumoElement: ElementRef;

  ngAfterViewInit() {
    window.scroll(0,0)
    this.activactedRouter.fragment.subscribe(fragment => {
      if (fragment === 'resumo') {
        setTimeout(() => {
          this.scrollToElement(this.resumoElement.nativeElement);
        }, 100);
      }

    });
  }

  private scrollToElement(element: any): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  removeProduto(produto: Product) {
    this.cartService.removeFromCart(produto)
  }

  limparCarrinho() {
    this.cartService.cleanCart();
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '25%',
      data: {
        message: 'Você deseja confirmar o pedido?',
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        title: 'Confirmar pedido'
      }
    });
  
    dialogRef.componentInstance.onConfirm.subscribe(() => {
      const idCart = this.sessionStorage.getItem("usuario").id
      this.requestService.saveRequest(idCart)
      dialogRef.close();
      this.limparCarrinho() // Limpando apenas para o elemento visual, após ser direcionado para a página de pedidos, ele irá buscar novamente o carrinho no banco para garantir que esteja vazio
      this.route.navigate(['profile-page'], {fragment: 'pedidos'})
      setTimeout(() => {
        this.cartService.findCart();
      }, 1000);
    });
  }

}
