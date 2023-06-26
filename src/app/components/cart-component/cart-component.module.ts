import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponentComponent } from './cart-component.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CartComponentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    CartComponentComponent
  ]
})
export class CartComponentModule { }
