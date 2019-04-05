import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { CreateUser } from "./createUser";
import { UserService } from "./userService";
import { Users } from "./users";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
import { EditUser } from "./editUser";
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        UserRoutes
    ],
    declarations: [Users, CreateUser, EditUser, Layout],
    bootstrap: [Layout],
    providers: [UserService]
})
export class UserModule { }