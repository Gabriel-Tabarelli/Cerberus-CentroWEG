import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponentComponent } from './cart-component.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CartComponentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CartComponentComponent
  ]
})
export class CartComponentModule { }
