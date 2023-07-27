
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SessionStorageService } from "src/app/services/session-storage.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonModule, NgIf } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports:  [
        RouterModule,
        FormsModule,
        MatFormFieldModule, 
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        CommonModule,
        MatSnackBarModule
    ],
    exports: [
        LoginComponent
    ],
    providers:[SessionStorageService],
})

export class LoginModule{}