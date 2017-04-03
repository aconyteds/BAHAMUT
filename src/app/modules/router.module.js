"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var directory_component_1 = require("../components/Directory/directory.component");
var newUser_component_1 = require("../components/NewUser/newUser.component");
var viewUser_component_1 = require("../components/ViewUser/viewUser.component");
var appRoutes = [
    {
        path: "",
        pathMatch: "full",
        component: directory_component_1.Directory
    }, {
        path: "user/new",
        component: newUser_component_1.NewUserForm
    }, {
        path: "user/:id",
        component: viewUser_component_1.ViewUser
    }
];
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], RouteModule);
exports.RouteModule = RouteModule;
//# sourceMappingURL=router.module.js.map