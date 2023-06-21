
import { NgModule } from "@angular/core";
import { BarraNavegacaoComponent } from "./barra-navegacao.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        BarraNavegacaoComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        BarraNavegacaoComponent
    ]
})

export class BarraNavegacaoModule{}