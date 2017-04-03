import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {UserService} from "../../services/user.service";
import {User} from "../../interfaces";

@Component({
  selector:"directory",
  styleUrls:["./directory.css"],
  template:`
  <div>
    <div *ngFor="let user of users" class="col-xs-6 col-sm-4 col-md-3 text-center user" routerLink="user/{{user.id}}">
      <div class="user-container">
        <img [src]="user.AvatarURL"/>
        <div class="user-label">{{user.Nickname}}</div>
      </div>
    </div>
  </div>
  `
})

export class Directory implements OnInit{
  users:User [];
  constructor(
    private userService:UserService
  ){}

  ngOnInit(){
    this.getUsers();
  }
  getUsers(): void{
    this.userService
      .getUsers()
      .then(users => this.users=users);
  }
}
