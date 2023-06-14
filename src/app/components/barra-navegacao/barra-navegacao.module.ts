
import { NgModule } from "@angular/core";
import { BarraNavegacaoComponent } from "./barra-navegacao.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        BarraNavegacaoComponent
    ],
    imports: [
        RouterModule],
    exports: [
        BarraNavegacaoComponent
    ]
})

export class BarraNavegacaoModule{}