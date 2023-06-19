import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';



@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CartPageComponent]
})
export class CartPageModule { }
