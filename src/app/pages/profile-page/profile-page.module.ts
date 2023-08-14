import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ItemFrameModule } from 'src/app/components/item-frame/item-frame.module';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    ItemFrameModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [
    ProfilePageComponent
  ]
})
export class ProfilePageModule { }
