import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { AppModule } from 'src/app/app.module';
import { ItemFrameModule } from '../item-frame/item-frame.module';



@NgModule({
  declarations: [ SalesComponent ],
  imports: [
    CommonModule,
    ItemFrameModule
  ],
  exports: [ SalesComponent ]
})
export class SalesModule { }
