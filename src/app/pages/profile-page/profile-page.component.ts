import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product/Product';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private sessionService: SessionStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.sessionService.getItem('usuario');
    this.userName = this.usuario.email
  }
  userName: string = '';
  usuario: any = {}


  listaDePedidos: any[] = [
    {
      id: 23233,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    },
    {
      id: 14353,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    },
    {
      id: 11213,
      data: '01/01/2021',
      status: 'Aguardando Pagamento'
    }
  ]

  listaDeProdutos: Product[] = []

  navigateTo(nome: string){
    const rotaProduto = "/product-page/" + encodeURIComponent(nome)
    this.router.navigate([rotaProduto])
  }
}
