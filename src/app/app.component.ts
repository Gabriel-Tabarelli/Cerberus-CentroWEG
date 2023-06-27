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
  }

  usuarioLogado: boolean;
  paginaLogin: boolean;

  naPaginaLogin(): boolean {
    return this.router.url === '/signin-page' || this.router.url === '/signup-page';
  }


  title = 'Cerberus';
}
