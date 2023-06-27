import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'category-page',
    loadChildren: () => import('./pages/category-page/category-page.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'signup-page',
    loadChildren: () => import('./pages/signup-page/signup-page.module').then(m => m.SignupPageModule)
  },
  {
    path: 'signin-page',
    loadChildren: () => import('./pages/signin-page/signin-page.module').then(m => m.SigninPageModule)
  },
  {
    path: 'product-page/:id',
    loadChildren: () => import('./pages/product-page/product-page.module').then(m => m.ProductPageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./pages/cart-page/cart-page.module').then(m => m.CartPageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: "**",
    redirectTo: 'home-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
