import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroModule } from './components/cadastro-component/cadastro.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { FooterModule } from './components/footer-component/footer.module';
import { HeaderLogadoComponentModule } from './components/header-logado-component/header-logado-component.module';
import { CategoryPageModule } from './pages/category-page/category-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ProductPageModule } from './pages/product-page/product-page.module';
import { SigninPageModule } from './pages/signin-page/signin-page.module';
import { SignupPageModule } from './pages/signup-page/signup-page.module';
import { HeaderModule } from './components/header-component/header.module';
import { HeaderLoginModule } from './components/header-login-component/header-login.module';
import { CartPageModule } from './pages/cart-page/cart-page.module';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CadastroModule,
    CarouselModule,
    FooterModule,
    HeaderLogadoComponentModule,
    CategoryPageModule,
    HomePageModule,
    ProductPageModule,
    SigninPageModule,
    SignupPageModule,
    HeaderModule,
    HeaderLoginModule,
    CartPageModule,
    ProfilePageModule,
    HttpClientModule
  ], 
  providers: [],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
