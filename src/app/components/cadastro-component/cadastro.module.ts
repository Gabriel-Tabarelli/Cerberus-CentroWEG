import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CadastroComponent } from "./cadastro.component";

@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CadastroComponent
    ]
})

export class CadastroModule{}