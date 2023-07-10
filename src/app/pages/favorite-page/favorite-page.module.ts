import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePageComponent } from './favorite-page.component';
import { FavoritePageRoutingModule } from './favorite-page-routing.moduel';
import { ItemFrameModule } from 'src/app/components/item-frame/item-frame.module';



@NgModule({
  declarations: [
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoritePageRoutingModule,
    ItemFrameModule
  ],
  exports: [
    FavoritePageComponent
  ]
})
export class FavoritePageModule { }
