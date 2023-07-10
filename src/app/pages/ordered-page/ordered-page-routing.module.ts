import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderedPageComponent } from './ordered-page.component';
import { OrderedDetailsComponent } from './ordered-details/ordered-details.component';

const routes: Routes = [
  {
    path: '',
    component: OrderedPageComponent
  },
  {
    path: ':id',
    component: OrderedDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderedPageRoutingModule { }
