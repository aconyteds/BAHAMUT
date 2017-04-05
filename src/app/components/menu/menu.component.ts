import { Component, ElementRef } from '@angular/core';

import { MenuOption, User } from "../../interfaces";
import { Config } from "../../config";
import { Observable }     from 'rxjs/Observable';
import * as $ from "jquery";

@Component({
  selector: 'main-menu',
  styleUrls:["./menu.css"],
  templateUrl: "./menu.template.html"
})

export class MenuComponent {
  options: MenuOption [] = Config.menuOptions;
  constructor(
    private domNode:ElementRef
  ){
    this.linkMenu();
  }
  linkMenu():void{
    //Link the menu collapsing to the clicking of the button
    //Tight coupling is bad, but if the element is not there, this will not work anyway
    console.log(this.domNode);
    $("menu-button").on("click", () => this.updateVisibility($(this.domNode.nativeElement).css("display")=="none"));
    //Setup a handler to remove the display style when the window resizes
    $(window).resize(()=>
      $(this.domNode.nativeElement).attr('style', function(i, style){
        if(!style) return;
        return style.replace(/display[^;]+;?/g, '');
      })
    );
  }
  updateVisibility(hidden:boolean):void{
    //we want to remove the style
    this.domNode.nativeElement.style.display=hidden?"inline-block":"none";
  }
}
