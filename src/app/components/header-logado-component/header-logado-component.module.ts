import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogadoComponentComponent } from './header-logado-component.component';
import { CartComponentModule } from '../cart-component/cart-component.module';
import { RouterModule } from '@angular/router';
import { ItemFrameModule } from '../item-frame/item-frame.module';
import { FormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import { DialogComponentModule } from '../dialog-component/dialog-component.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HeaderLogadoComponentComponent
  ],
  imports: [
    CommonModule,
    CartComponentModule,
    RouterModule,
    ItemFrameModule,
    FormsModule,
    MatBadgeModule,
    DialogComponentModule,
    MatSnackBarModule
  ],
  exports: [
    HeaderLogadoComponentComponent
  ]
 
})
export class HeaderLogadoComponentModule { }
