import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogadoComponentComponent } from './header-logado-component.component';
import { CartComponentModule } from '../cart-component/cart-component.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderLogadoComponentComponent
  ],
  imports: [
    CommonModule,
    CartComponentModule,
    RouterModule
  ],
  exports: [
    HeaderLogadoComponentComponent
  ]
})
export class HeaderLogadoComponentModule { }
