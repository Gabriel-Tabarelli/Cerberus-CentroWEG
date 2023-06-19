import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { BarraNavegacaoModule } from 'src/app/components/barra-navegacao/barra-navegacao.module';
import { ProductPageRoutingModule } from './product-page-routing.module';



@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    BarraNavegacaoModule,
    ProductPageRoutingModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
