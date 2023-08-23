import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesPageComponent } from './sales-page.component';
import { SalesPageRoutingModule } from './sales-page-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    SalesPageComponent
  ],
  imports: [
    CommonModule,
    SalesPageRoutingModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SalesPageComponent
  ]
})
export class SalesPageModule { }
