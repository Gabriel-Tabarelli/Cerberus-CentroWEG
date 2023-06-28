import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  private userLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userLoggedIn$ = this.userLoggedInSubject.asObservable();

  constructor() {
    const usuarioLogado = sessionStorage.getItem('usuario') !== null;
    this.userLoggedInSubject.next(usuarioLogado);
  }

  setUserLoggedIn() {
    this.userLoggedInSubject.next(true);
  }

  setUserLoggedOut() {
    this.userLoggedInSubject.next(false);
  }
}
