import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { BarraNavegacaoModule } from 'src/app/components/barra-navegacao/barra-navegacao.module';
import { ItemFrameModule } from 'src/app/components/item-frame/item-frame.module';
import { FooterModule } from 'src/app/components/footer-component/footer.module';
import { ItemFrameComponent } from 'src/app/components/item-frame/item-frame.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    CommonModule,
    BarraNavegacaoModule,
    ItemFrameModule,
    FooterModule
  ],
  exports: [
    CategoryPageComponent
  ]
})
export class CategoryPageModule { }
