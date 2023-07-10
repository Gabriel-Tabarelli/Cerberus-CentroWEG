import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderedPageComponent } from './ordered-page.component';
import { OrderedPageRoutingModule } from './ordered-page-routing.module';
import { OrderedDetailsComponent } from './ordered-details/ordered-details.component';
import { ItemFrameModule } from 'src/app/components/item-frame/item-frame.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrderedPageComponent,
    OrderedDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderedPageRoutingModule,
    ItemFrameModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    OrderedPageComponent
  ]
})
export class OrderedPageModule { }
