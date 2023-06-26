import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from './services/session-storage.service';
import { UserStatusService } from './services/user-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private sessionService: SessionStorageService, private userState: UserStatusService) { }
  usuario: any;
  ngOnInit(): void {

    this.userState.userLoggedIn$.subscribe((isLoggedIn: boolean) => {
      this.usuarioLogado = isLoggedIn;
    });
  //   this.usuario = this.sessionService.getItem("usuario");
  //   console.log(this.usuario)
  //   if (this.usuario){
  //     this.usuarioLogado = true
  //  } else {
  //   this.usuarioLogado = false
  //  }
    // console.log(this.usuarioLogado)
    console.log("iniciou")
  }

  usuarioLogado: boolean; // Trabalhar na verificação de usuário logado
  paginaLogin: boolean;

  naPaginaLogin(): boolean {
    return this.router.url === '/signin-page' || this.router.url === '/signup-page';
  }

  testeLogado(){
    console.log("Aa")
    if (this.sessionService.getItem("usuario")) {
      return true;
    } else {
      return false;
    }
  }

  title = 'Cerberus';
}
