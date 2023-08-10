import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product/Product';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private sessionService: SessionStorageService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.usuario = this.sessionService.getItem('usuario');
    this.userName = this.usuario.nome
    this.userService.getEnderecoProjection(this.usuario.id).subscribe((data) => {
      this.endereco = data.endereco;
      console.log(this.endereco)
    })
    this.telefone = "(" + this.usuario.telefone[0] + this.usuario.telefone[1] + ") " 
    for (let i = 2; i < this.usuario.telefone.length; i++) {
      this.telefone += this.usuario.telefone[i]
    }
  }
  
  userName: string = '';
  usuario: any = {}
  endereco: any = {}
  telefone: string;
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
    const rotaProduto = "/product-page/" + nome
    this.router.navigate([rotaProduto])
  }
}
