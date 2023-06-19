import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { HeaderLoginComponentComponent } from './components/header-login-component/header-login-component.component';
import { CadastroModule } from './components/cadastro-component/cadastro.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { FooterModule } from './components/footer-component/footer.module';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HeaderLogadoComponentModule } from './components/header-logado-component/header-logado-component.module';
import { CategoryPageModule } from './pages/category-page/category-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ProductPageModule } from './pages/product-page/product-page.module';
import { SigninPageModule } from './pages/signin-page/signin-page.module';
import { SignupPageModule } from './pages/signup-page/signup-page.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HeaderLoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    CarouselModule,
    FooterModule,
    HeaderLogadoComponentModule,
    CategoryPageModule,
    HomePageModule,
    ProductPageModule,
    SigninPageModule,
    SignupPageModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
