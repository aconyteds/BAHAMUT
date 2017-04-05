"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../config");
var $ = require("jquery");
var MenuComponent = (function () {
    function MenuComponent(domNode) {
        this.domNode = domNode;
        this.options = config_1.Config.menuOptions;
        this.linkMenu();
    }
    MenuComponent.prototype.linkMenu = function () {
        var _this = this;
        //Link the menu collapsing to the clicking of the button
        //Tight coupling is bad, but if the element is not there, this will not work anyway
        console.log(this.domNode);
        $("menu-button").on("click", function () { return _this.updateVisibility($(_this.domNode.nativeElement).css("display") == "none"); });
        //Setup a handler to remove the display style when the window resizes
        $(window).resize(function () {
            return $(_this.domNode.nativeElement).attr('style', function (i, style) {
                if (!style)
                    return;
                return style.replace(/display[^;]+;?/g, '');
            });
        });
    };
    MenuComponent.prototype.updateVisibility = function (hidden) {
        //we want to remove the style
        this.domNode.nativeElement.style.display = hidden ? "inline-block" : "none";
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'main-menu',
        styleUrls: ["./menu.css"],
        templateUrl: "./menu.template.html"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map