import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
    
    email = new FormControl('', [Validators.required, Validators.email]);
    senha: string
    hide = true;
    email2: string

  logar() {
    if (!(this.email.hasError('required') || this.email.hasError('email'))) {
      let usuario = {
        email: this.email2,
        senha: this.senha
      }
      console.log(usuario)
      this.sessionService.setItem("usuario", usuario);
      this.userState.setUserLoggedIn();
      const returnUrl = this.routeSnap.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigateByUrl(returnUrl);
    } 
    
  }



  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo obrigatório';
    }
    return this.email.hasError('email') ? 'Email inválido' : '';
  }
}
