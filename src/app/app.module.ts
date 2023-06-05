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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    PageComponent,
    HeaderLoginComponentComponent,
    MainMenuCategoriesComponent,
    ItemFrameComponent,
    LoginComponent,
    HomePageComponent,
    CategoryPageComponent,
    SignupPageComponent,
    BarraNavegacaoComponent,
    SigninPageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    CarouselModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
