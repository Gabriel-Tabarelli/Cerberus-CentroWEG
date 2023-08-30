
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponentComponent } from "./footer-component.component";

@NgModule({
    declarations: [
        FooterComponentComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        FooterComponentComponent
    ]
})

export class FooterModule{}