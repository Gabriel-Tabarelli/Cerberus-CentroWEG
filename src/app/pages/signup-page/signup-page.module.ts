import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroModule } from 'src/app/components/cadastro-component/cadastro.module';
import { SignupPageComponent } from './signup-page.component';
import { SignupPageRoutingModule } from './signup-page-routing.module';



@NgModule({
  declarations: [
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    CadastroModule,
    SignupPageRoutingModule
  ],
  exports: [
    SignupPageComponent
  ]
})
export class SignupPageModule { }
