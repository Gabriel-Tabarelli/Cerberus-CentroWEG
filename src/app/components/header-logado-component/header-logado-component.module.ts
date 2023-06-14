import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { HeaderLogadoComponentComponent } from './header-logado-component.component';



@NgModule({
  declarations: [
    HeaderLogadoComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderLogadoComponentComponent
  ]
})
export class HeaderLogadoComponentModule { }
