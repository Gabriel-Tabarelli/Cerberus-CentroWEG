import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
     
  }

  usuarioLogado: boolean; // Trabalhar na verificação de usuário logado
  paginaLogin: boolean;

  naPaginaLogin(): boolean {
    return this.router.url === '/signin-page' || this.router.url === '/signup-page';
  }

  title = 'Cerberus';
}
