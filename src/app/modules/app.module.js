"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_module_1 = require("./router.module");
var http_1 = require("@angular/http");
var title_component_1 = require("../components/title.component");
var menu_component_1 = require("../components/menu/menu.component");
var search_component_1 = require("../components/search/search.component");
var avatar_1 = require("../components/avatar");
var content_1 = require("../components/content");
var viewUser_component_1 = require("../components/ViewUser/viewUser.component");
//services
var user_service_1 = require("../services/user.service");
//Test Data imports
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var users_1 = require("../test/data/users");
//Route Components
var app_component_1 = require("../components/app.component");
var newUser_component_1 = require("../components/NewUser/newUser.component");
// import {RemoveLoader} from "../directives/loader";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_module_1.RouteModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(users_1.UserData)
        ],
        declarations: [
            title_component_1.TitleComponent,
            menu_component_1.MenuComponent,
            search_component_1.SearchComponent,
            avatar_1.AvatarComponent,
            content_1.ContentComponent,
            app_component_1.AppComponent,
            newUser_component_1.NewUserForm,
            viewUser_component_1.ViewUser
        ],
        providers: [
            user_service_1.UserService
        ],
        bootstrap: [
            title_component_1.TitleComponent,
            menu_component_1.MenuComponent,
            search_component_1.SearchComponent,
            avatar_1.AvatarComponent,
            content_1.ContentComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map