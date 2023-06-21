
import { NgModule } from "@angular/core";
import { HeaderLoginComponentComponent } from "./header-login-component.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderLoginComponentComponent
    ],
    imports: [RouterModule],
    exports: [
        HeaderLoginComponentComponent
    ]
})

export class HeaderLoginModule{}