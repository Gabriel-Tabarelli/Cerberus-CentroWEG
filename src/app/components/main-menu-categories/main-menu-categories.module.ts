
import { NgModule } from "@angular/core";
import { MainMenuCategoriesComponent } from "./main-menu-categories.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        MainMenuCategoriesComponent
    ],
    imports: [
        RouterModule],
    exports: [
        MainMenuCategoriesComponent
    ]
})

export class MainMenuCategoriesModule{}