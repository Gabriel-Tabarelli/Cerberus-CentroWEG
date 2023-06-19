import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './signin-page.component';
import { LoginModule } from 'src/app/components/login-component/login.module';
import { SigninPageRoutingModule } from './signin-page-routing.module';



@NgModule({
  declarations: [
    SigninPageComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    SigninPageRoutingModule
  ],
  exports: [
    SigninPageComponent
  ]
})
export class SigninPageModule { }
