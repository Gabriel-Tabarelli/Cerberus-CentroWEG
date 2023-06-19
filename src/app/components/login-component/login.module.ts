
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule{}