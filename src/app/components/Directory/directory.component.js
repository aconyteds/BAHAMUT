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
var user_service_1 = require("../../services/user.service");
var Directory = (function () {
    function Directory(userService) {
        this.userService = userService;
    }
    Directory.prototype.ngOnInit = function () {
        this.getUsers();
    };
    Directory.prototype.getUsers = function () {
        var _this = this;
        this.userService
            .getUsers()
            .then(function (users) { return _this.users = users; });
    };
    return Directory;
}());
Directory = __decorate([
    core_1.Component({
        selector: "directory",
        styleUrls: ["./directory.css"],
        template: "\n  <div>\n    <div *ngFor=\"let user of users\" class=\"col-xs-6 col-sm-4 col-md-3 text-center user\" routerLink=\"user/{{user.id}}\">\n      <div class=\"user-container\">\n        <img [src]=\"user.AvatarURL\"/>\n        <div class=\"user-label\">{{user.Nickname}}</div>\n      </div>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], Directory);
exports.Directory = Directory;
//# sourceMappingURL=directory.component.js.map