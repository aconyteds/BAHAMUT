import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouteModule} from "./router.module";
import {HttpModule} from "@angular/http";

import {TitleComponent} from "../components/title.component";
import { MenuComponent } from "../components/menu/menu.component";
import {SearchComponent} from "../components/search/search.component";
import {AvatarComponent} from "../components/avatar";
import {ContentComponent} from "../components/content";

//services
import {UserService} from "../services/user.service";

//Test Data imports
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {UserData} from "../test/data/users";

//Route Components
import {NewUserForm} from "../components/NewUser/newUser.component";
import {ViewUser} from "../components/ViewUser/viewUser.component";
import {Directory} from "../components/Directory/directory.component";

// import {RemoveLoader} from "../directives/loader";

@NgModule({
  imports:      [
    BrowserModule,
    RouteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(UserData)
  ],
  declarations: [
    TitleComponent,
    MenuComponent,
    SearchComponent,
    AvatarComponent,
    ContentComponent,
    NewUserForm,
    ViewUser,
    Directory
  ],
  providers:[
    UserService
  ],
  bootstrap:    [
    TitleComponent,
    MenuComponent,
    SearchComponent,
    AvatarComponent,
    ContentComponent
  ]
})

export class AppModule {
}
