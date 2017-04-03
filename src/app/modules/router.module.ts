import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {Directory} from "../components/Directory/directory.component";
import {NewUserForm} from "../components/NewUser/newUser.component";
import {ViewUser} from "../components/ViewUser/viewUser.component";

const appRoutes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component: Directory
  },{
    path:"user/new",
    component: NewUserForm
  },{
    path:"user/:id",
    component: ViewUser
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class RouteModule{}
