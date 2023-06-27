import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserStatusService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router,
     private sessionService: SessionStorageService,
     private userState: UserStatusService,
     private routeSnap: ActivatedRoute){}

  email: string
  senha: string

  logar() {
    console.log(this.email)
    console.log(this.senha)
    let usuario = {
      email: this.email,
      senha: this.senha
    }
     console.log(usuario)
    this.sessionService.setItem("usuario", usuario);
    this.userState.setUserLoggedIn();
    const returnUrl = this.routeSnap.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigateByUrl(returnUrl);
  }

}
