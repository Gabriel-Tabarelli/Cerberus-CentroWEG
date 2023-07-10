import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderedPageComponent } from './ordered-page.component';
import { OrderedPageRoutingModule } from './ordered-page-routing.module';
import { OrderedDetailsComponent } from './ordered-details/ordered-details.component';



@NgModule({
  declarations: [
    OrderedPageComponent,
    OrderedDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderedPageRoutingModule
  ],
  exports: [
    OrderedPageComponent
  ]
})
export class OrderedPageModule { }
