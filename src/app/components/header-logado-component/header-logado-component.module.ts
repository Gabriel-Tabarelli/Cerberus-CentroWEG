import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogadoComponentComponent } from './header-logado-component.component';
import { CartComponentModule } from '../cart-component/cart-component.module';
import { RouterModule } from '@angular/router';
import { ItemFrameModule } from '../item-frame/item-frame.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderLogadoComponentComponent
  ],
  imports: [
    CommonModule,
    CartComponentModule,
    RouterModule,
    ItemFrameModule,
    FormsModule
  ],
  exports: [
    HeaderLogadoComponentComponent
  ]
})
export class HeaderLogadoComponentModule { }
