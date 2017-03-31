import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserModel} from "../../models/User";
import {Config} from "../../config";

import {UserService} from "../../services/user.service";

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
  private user=new UserModel("","","","");
  private invalid:boolean = true;
  private suffixes = Config.suffixes;
  onSubmit():void{

  }
 }
