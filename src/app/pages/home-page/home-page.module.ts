import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ItemFrameModule } from 'src/app/components/item-frame/item-frame.module';
import { FooterModule } from 'src/app/components/footer-component/footer.module';
import { MainMenuCategoriesModule } from 'src/app/components/main-menu-categories/main-menu-categories.module';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { SalesModule } from 'src/app/components/sales/sales.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ItemFrameModule,
    FooterModule,
    CarouselModule,
    MainMenuCategoriesModule,
    SalesModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
