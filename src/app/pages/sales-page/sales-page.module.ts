import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesPageComponent } from './sales-page.component';
import { SalesPageRoutingModule } from './sales-page-routing.module';



@NgModule({
  declarations: [
    SalesPageComponent
  ],
  imports: [
    CommonModule,
    SalesPageRoutingModule
  ],
  exports: [
    SalesPageComponent
  ]
})
export class SalesPageModule { }
