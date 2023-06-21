
import { NgModule } from "@angular/core";
import { HeaderComponentComponent } from "./header-component.component";
import { CartComponentModule } from "../cart-component/cart-component.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeaderComponentComponent
    ],
    imports: [
        CommonModule,
        CartComponentModule
    ],
    exports: [
        HeaderComponentComponent
    ]
})

export class HeaderModule{}