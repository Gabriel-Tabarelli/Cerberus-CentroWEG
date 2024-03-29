import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { BarraNavegacaoModule } from 'src/app/components/barra-navegacao/barra-navegacao.module';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { ItemFrameModule } from 'src/app/components/item-frame/item-frame.module';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { SalesModule } from 'src/app/components/sales/sales.module';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    ItemFrameModule,
    CommonModule,
    BarraNavegacaoModule,
    ProductPageRoutingModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    SalesModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
