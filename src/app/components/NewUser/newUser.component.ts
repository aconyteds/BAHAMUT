import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserModel} from "../../models/User";
import {Config} from "../../config";

import {UserService} from "../../services/user.service";
import {User} from "../../interfaces";

@Component({
  selector: 'new-user',
  styles:[`
      .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948; /* green */
      }
      .ng-invalid:not(form)  {
        border-left: 5px solid #a94442; /* red */
      }
    `],
  templateUrl: "./newUser.template.html"
})

export class NewUserForm {
  private user:User;
  private invalid:boolean = true;
  private suffixes:string[] = Config.suffixes;
  constructor(
    private userService:UserService,
    private router:Router
  ){
    this.user = new UserModel("","","","");
  }
  onSubmit(user:User):void{
    //Not everything is filled out yet
    if(!user.FirstName || !user.LastName || !user.Address){return;}
    //Create the Login Name
    user.LoginName = user.FirstName+"."+user.LastName+user.id;
    //Everyone needs a nickname
    if(!user.Nickname){
      user.Nickname = user.FirstName +" " + user.LastName;
    }
    //Default Avatar
    if(!user.AvatarURL){
      user.AvatarURL="https://cdn1.iconfinder.com/data/icons/masks-1/512/bat-woman-cat-hero-mask-128.png";
    }
    //This is created for them
    delete user.id;
    this.userService.create(user)
      .then(user=>this.router.navigate(["/user", user.id]));//Route to the Details of the new User
  }
 }
