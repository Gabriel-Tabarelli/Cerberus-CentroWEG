
import { NgModule } from "@angular/core";
import { MainMenuCategoriesComponent } from "./main-menu-categories.component";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations: [
        MainMenuCategoriesComponent
    ],
    imports: [
        AppRoutingModule],
    exports: [
        MainMenuCategoriesComponent
    ]
})

export class MainMenuCategoriesModule{}