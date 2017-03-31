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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var user_service_1 = require("../../services/user.service");
var config_1 = require("../../config");
var ViewUser = (function () {
    function ViewUser(userService, route, location, fb) {
        this.userService = userService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.suffixes = config_1.Config.suffixes;
        this.createForm();
    }
    ViewUser.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userService.getUser(+params['id']); })
            .subscribe(function (user) { return (_this.userForm.reset({
            Department: user.Department || "",
            Office: user.Office || "",
            Position: user.Position || "",
            Nickname: user.Nickname,
            Suffix: user.Suffix || "",
            Manager: user.ManagerId || "",
            Assistant: user.AssistantId || "",
            Spouse: user.Spouse || "",
            Address: user.Address
        }),
            _this.user = user); });
    };
    ViewUser.prototype.createForm = function () {
        this.userForm = this.fb.group({
            Department: "",
            Office: "",
            Position: "",
            Nickname: ["", forms_1.Validators.required],
            Suffix: "",
            Manager: "",
            Assistant: "",
            Spouse: "",
            Address: ["", forms_1.Validators.required]
        });
    };
    ViewUser.prototype.prepareUserData = function () {
        var formModel = this.userForm.value;
        var saveUser = {
            id: this.user.id,
            LoginName: this.user.LoginName,
            FirstName: this.user.FirstName,
            LastName: this.user.LastName,
            Address: formModel.Address,
            Nickname: formModel.Nickname,
            AvatarURL: this.user.AvatarURL,
            Department: formModel.Department,
            Office: formModel.Office,
            Position: formModel.Position,
            Suffix: formModel.Suffix,
            ManagerId: formModel.Manager,
            AssistantId: formModel.Assistant,
            Spouse: formModel.Spouse
        };
        return saveUser;
    };
    ViewUser.prototype.updateUser = function () {
        this.user = this.prepareUserData();
        this.userService.update(this.user);
    };
    return ViewUser;
}());
ViewUser = __decorate([
    core_1.Component({
        selector: "view-user",
        styleUrls: ['./viewUser.css'],
        templateUrl: "./viewUser.template.html"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        common_1.Location,
        forms_1.FormBuilder])
], ViewUser);
exports.ViewUser = ViewUser;
//# sourceMappingURL=viewUser.component.js.map