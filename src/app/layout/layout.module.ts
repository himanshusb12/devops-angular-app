import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LayoutRoutingModule } from "./layout.routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        LayoutRoutingModule
    ],
    providers: []
})
export class LayoutModule {}