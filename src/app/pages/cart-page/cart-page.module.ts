import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { ItemFrameModule } from 'src/app/components/item-frame/item-frame.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    CartPageRoutingModule,
    ItemFrameModule,
    MatIconModule
  ],
  exports: [
    CartPageComponent
  ]
})
export class CartPageModule { }
