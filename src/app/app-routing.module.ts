import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'category-page',
    component: CategoryPageComponent
  },
  {
    path: 'signup-page',
    component: SignupPageComponent
  },
  {
    path: 'signin-page',
    component: SigninPageComponent
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
