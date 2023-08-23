import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { FooterModule } from 'src/app/components/footer-component/footer.module';



@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    FooterModule
  ], exports: [ NotFoundComponent ]
})
export class NotFoundModule { }
