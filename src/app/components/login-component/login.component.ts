import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { UserStatusService } from 'src/app/services/user-state.service';
import { UserService } from 'src/app/services/user.service';
import { tap, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router,
    private sessionService: SessionStorageService,
    private userState: UserStatusService,
    private routeSnap: ActivatedRoute,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private cartService: CartService) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  senha: string
  hide = true;
  email2: string

  logar() {
    if (!(this.email.hasError('required') || this.email.hasError('email'))) {
      this.userService.getOneByEmailAndPassword(this.email2, this.senha).pipe(tap((data: any) => {
        this.userState.setUserLoggedIn();
        this.sessionService.setItem("usuario", data); // ARRUMAR ISSO! ARMAZENAR NO TOKEN
        const returnUrl = this.routeSnap.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl);
        this.cartService.findCart();
      }), catchError((error: any) => {
        this._snackBar.open('Email ou senha incorretos', 'Fechar', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        setTimeout(() => {
          this._snackBar.ngOnDestroy();
        }, 3000);
        return of(null);
      })).subscribe();
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo obrigatório';
    }
    return this.email.hasError('email') ? 'Email inválido' : '';
  }



}
