import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogadoComponentComponent } from './header-logado-component.component';
import { CartComponentModule } from '../cart-component/cart-component.module';



@NgModule({
  declarations: [
    HeaderLogadoComponentComponent
  ],
  imports: [
    CommonModule,
    CartComponentModule
  ],
  exports: [
    HeaderLogadoComponentComponent
  ]
})
export class HeaderLogadoComponentModule { }
