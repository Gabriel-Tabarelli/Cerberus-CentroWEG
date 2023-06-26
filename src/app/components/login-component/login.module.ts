
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SessionStorageService } from "src/app/services/session-storage.service";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule,
        FormsModule
    ],
    exports: [
        LoginComponent
    ],
    providers:[SessionStorageService]
})

export class LoginModule{}