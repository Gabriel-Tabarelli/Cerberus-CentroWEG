import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { PageComponent } from './pages/page/page.component';
import { HeaderLoginComponentComponent } from './components/header-login-component/header-login-component.component';
import { MainMenuCategoriesComponent } from './components/main-menu-categories/main-menu-categories.component';
import { ItemFrameComponent } from './components/item-frame/item-frame.component';
import { CadastroModule } from './components/cadastro-component/cadastro.module';
import { LoginComponent } from './components/login-component/login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CarouselModule } from './components/carousel/carousel.module';
import { FooterModule } from './components/footer-component/footer.module';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { BarraNavegacaoComponent } from './components/barra-navegacao/barra-navegacao.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HeaderLogadoComponentComponent } from './components/header-logado-component/header-logado-component.component';
import { HeaderLogadoComponentModule } from './components/header-logado-component/header-logado-component.module';
import { CategoryPageModule } from './pages/category-page/category-page.module';
import { BarraNavegacaoModule } from './components/barra-navegacao/barra-navegacao.module';
import { ItemFrameModule } from './components/item-frame/item-frame.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ProductPageModule } from './pages/product-page/product-page.module';
import { SigninPageModule } from './pages/signin-page/signin-page.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HeaderLoginComponentComponent,
    SignupPageComponent
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
    SigninPageModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
