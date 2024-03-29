import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
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
    path: 'category-page/:id',
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
    path: 'search-page/:search',
    loadChildren: () => import('./pages/search-page/search-page.module').then(m => m.SearchPageModule)
  },
  {
    path: 'cart-page',
    loadChildren: () => import('./pages/cart-page/cart-page.module').then(m => m.CartPageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'ordered-page',
    loadChildren: () => import('./pages/ordered-page/ordered-page.module').then(m => m.OrderedPageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'edit-page',
    loadChildren: () => import('./pages/edit-page/edit-page.module').then(m => m.EditPageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'sales-page',
    loadChildren: () => import('./pages/sales-page/sales-page.module').then(m => m.SalesPageModule),
    canActivate: [AuthenticationGuard, AdminGuard ]
  },
  {
    path: 'not-found-page',
    loadChildren: () => import('./pages/not-found-page/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: "**",
    redirectTo: 'not-found-page',
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
