import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponentComponent } from './cart-component.component';



@NgModule({
  declarations: [
    CartComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponentComponent
  ]
})
export class CartComponentModule { }
