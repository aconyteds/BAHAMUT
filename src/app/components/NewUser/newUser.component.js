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
var router_1 = require("@angular/router");
var User_1 = require("../../models/User");
var config_1 = require("../../config");
var user_service_1 = require("../../services/user.service");
var NewUserForm = (function () {
    function NewUserForm(userService, router) {
        this.userService = userService;
        this.router = router;
        this.invalid = true;
        this.suffixes = config_1.Config.suffixes;
        this.user = new User_1.UserModel("", "", "", "");
    }
    NewUserForm.prototype.onSubmit = function (user) {
        var _this = this;
        //Not everything is filled out yet
        if (!user.FirstName || !user.LastName || !user.Address) {
            return;
        }
        //Create the Login Name
        user.LoginName = user.FirstName + "." + user.LastName + user.id;
        //Everyone needs a nickname
        if (!user.Nickname) {
            user.Nickname = user.FirstName + " " + user.LastName;
        }
        //Default Avatar
        if (!user.AvatarURL) {
            user.AvatarURL = "https://cdn1.iconfinder.com/data/icons/masks-1/512/bat-woman-cat-hero-mask-128.png";
        }
        //This is created for them
        delete user.id;
        this.userService.create(user)
            .then(function (user) { return _this.router.navigate(["/user", user.id]); }); //Route to the Details of the new User
    };
    return NewUserForm;
}());
NewUserForm = __decorate([
    core_1.Component({
        selector: 'new-user',
        styles: ["\n      .ng-valid[required], .ng-valid.required  {\n        border-left: 5px solid #42A948; /* green */\n      }\n      .ng-invalid:not(form)  {\n        border-left: 5px solid #a94442; /* red */\n      }\n    "],
        templateUrl: "./newUser.template.html"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], NewUserForm);
exports.NewUserForm = NewUserForm;
//# sourceMappingURL=newUser.component.js.map