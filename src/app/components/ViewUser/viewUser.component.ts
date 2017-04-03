import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

import {User} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {Config} from "../../config";

@Component({
  selector: "view-user",
  styleUrls:['./viewUser.css'],
  templateUrl:"./viewUser.template.html"
})

export class ViewUser implements OnInit {
  user:User;
  userForm: FormGroup;
  loadingMessage:string = "Loading...";
  private suffixes = Config.suffixes;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ){
    this.createForm();
  }
  ngOnInit():void{
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(user => (this.userForm.reset({
        Department: user.Department||"",
        Office: user.Office||"",
        Position: user.Position||"",
        Nickname: user.Nickname,
        Suffix: user.Suffix||"",
        Manager: user.ManagerId||"",
        Assistant: user.AssistantId||"",
        Spouse: user.Spouse||"",
        Address: user.Address
      }),
      this.user=user));

  }
  createForm(): void{
    this.userForm = this.fb.group({
      Department: "",
      Office: "",
      Position: "",
      Nickname: ["", Validators.required],
      Suffix: "",
      Manager: "",
      Assistant: "",
      Spouse: "",
      Address: ["", Validators.required]
    })
  }
  prepareUserData():User{
    const formModel = this.userForm.value;

    const saveUser: User = {
      id:this.user.id,
      LoginName:this.user.LoginName,
      FirstName:this.user.FirstName,
      LastName:this.user.LastName,
      Address:formModel.Address,
      Nickname:formModel.Nickname,
      AvatarURL:this.user.AvatarURL,
      Department:formModel.Department,
      Office:formModel.Office,
      Position:formModel.Position,
      Suffix:formModel.Suffix,
      ManagerId:formModel.Manager,
      AssistantId:formModel.Assistant,
      Spouse:formModel.Spouse
    };

    return saveUser;
  }
  updateUser():void{
    this.user = this.prepareUserData();
    this.userService.update(this.user);
  }

}
