
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule{}