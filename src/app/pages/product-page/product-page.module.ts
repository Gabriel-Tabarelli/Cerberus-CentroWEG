import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { BarraNavegacaoModule } from 'src/app/components/barra-navegacao/barra-navegacao.module';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { ItemFrameModule } from 'src/app/components/item-frame/item-frame.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    ItemFrameModule,
    CommonModule,
    BarraNavegacaoModule,
    ProductPageRoutingModule,
    FormsModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
