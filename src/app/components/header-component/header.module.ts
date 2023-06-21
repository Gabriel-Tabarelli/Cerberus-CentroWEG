
import { NgModule } from "@angular/core";
import { HeaderComponentComponent } from "./header-component.component";
import { CartComponentModule } from "../cart-component/cart-component.module";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderComponentComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CartComponentModule
    ],
    exports: [
        HeaderComponentComponent
    ]
})

export class HeaderModule{}