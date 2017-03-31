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
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var userSearch_service_1 = require("../../services/userSearch.service");
var SearchComponent = (function () {
    function SearchComponent(userSearchService, router) {
        this.userSearchService = userSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    SearchComponent.prototype.inputHandler = function (keyCode, value) {
        if (keyCode === 13 && !!this.defaultUser) {
            this.gotoDetail(this.defaultUser);
        }
        else {
            this.searchTerms.next(value);
        }
    };
    // Push a search term into the observable stream.
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.userSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
        //When the value changes we need to modify the search button
        //Set a default user to go to if none is selected
        var subscription = this.users.subscribe(function (value) { return (_this.legit = !!(value[0] && value[0].Nickname),
            _this.defaultUser = value[0]); });
    };
    SearchComponent.prototype.gotoDetail = function (user) {
        var link = ['/user', user.id];
        //this.searchBox.value=null;
        this.router.navigate(link);
    };
    SearchComponent.prototype.search = function () {
        if (this.defaultUser) {
            this.gotoDetail(this.defaultUser);
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        styleUrls: ["./search.css"],
        templateUrl: "./search.component.html",
        providers: [userSearch_service_1.UserSearchService]
    }),
    __metadata("design:paramtypes", [userSearch_service_1.UserSearchService,
        router_1.Router])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map