import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { BarraNavegacaoModule } from 'src/app/components/barra-navegacao/barra-navegacao.module';
import { ItemFrameModule } from 'src/app/components/item-frame/item-frame.module';
import { FooterModule } from 'src/app/components/footer-component/footer.module';
import { SearchPageRoutingModule } from './search-page-routing.module';

@NgModule({
  declarations: [
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    BarraNavegacaoModule,
    ItemFrameModule,
    FooterModule,
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
