import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page.component';
import { EditPageRoutingModule } from './edit-page-routing.module';
import { CadastroModule } from 'src/app/components/cadastro-component/cadastro.module';



@NgModule({
  declarations: [
    EditPageComponent
  ],
  imports: [
    CommonModule,
    EditPageRoutingModule,
    CadastroModule
  ],
  exports: [
    EditPageComponent
  ]
})
export class EditPageModule { }
