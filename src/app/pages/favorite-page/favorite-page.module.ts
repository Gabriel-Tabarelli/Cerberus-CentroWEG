import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePageComponent } from './favorite-page.component';
import { FavoritePageRoutingModule } from './favorite-page-routing.moduel';



@NgModule({
  declarations: [
    FavoritePageComponent
  ],
  imports: [
    CommonModule,
    FavoritePageRoutingModule
  ],
  exports: [
    FavoritePageComponent
  ]
})
export class FavoritePageModule { }
