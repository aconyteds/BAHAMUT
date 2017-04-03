import { Component } from '@angular/core';

import { MenuOption, User } from "../../interfaces";
import { Config } from "../../config";

@Component({
  selector: 'main-menu',
  styleUrls:["./menu.css"],
  templateUrl: "./menu.template.html"
})

export class MenuComponent {
  options: MenuOption [] = Config.menuOptions;
  constructor(
  ){
  }
}
