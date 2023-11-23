import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedSearchPageComponent } from './advanced-search-page.component';
import { AdvancedSearchPageRoutingModule } from './advanced-search-page-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdvancedSearchPageComponent
  ],
  imports: [
    CommonModule,
    AdvancedSearchPageRoutingModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [
    AdvancedSearchPageComponent
  ]
})
export class AdvancedSearchPageModule { }
