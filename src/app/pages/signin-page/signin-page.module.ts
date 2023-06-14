import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './signin-page.component';
import { CadastroComponent } from 'src/app/components/cadastro-component/cadastro.component';
import { CadastroModule } from 'src/app/components/cadastro-component/cadastro.module';
import { LoginModule } from 'src/app/components/login-component/login.module';



@NgModule({
  declarations: [
    SigninPageComponent
  ],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [
    SigninPageComponent
  ]
})
export class SigninPageModule { }
