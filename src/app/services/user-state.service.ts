import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  private userLoggedInSubject: BehaviorSubject<boolean[]> = new BehaviorSubject<boolean[]>([false,false]);
  userLoggedIn$ = this.userLoggedInSubject.asObservable();

  constructor() {
    const usuarioLogado = sessionStorage.getItem('usuario') !== null;
    
    const admin = usuarioLogado ? JSON.parse(sessionStorage.getItem('usuario')).admin : false;
    console.log(admin)
    this.userLoggedInSubject.next([usuarioLogado, admin]);
  }

  setUserLoggedIn() {
    const admin = JSON.parse(sessionStorage.getItem('usuario')).admin || false;
    this.userLoggedInSubject.next([true, admin]);
  }

  setUserLoggedOut() {
    this.userLoggedInSubject.next([false, false]);
  }
}
