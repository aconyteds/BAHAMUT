import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { MenuOption, User } from "../../interfaces";
import { Config } from "../../config";

import {UserService} from "../../services/user.service";

@Component({
  selector: 'main-menu',
  styleUrls:["./menu.css"],
  templateUrl: "./menu.template.html"
})

export class MenuComponent implements OnInit {
  options: MenuOption [] = Config.menuOptions;
  users:User [] = [];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ){
  }

  ngOnInit():void{
    this.getUsers();
  }
  getUsers(): void{
    this.userService
      .getUsers()
      .then(users => this.users=users);
  }
}
