webpackJsonp([1],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_authentication_service__ = __webpack_require__("../../../../../src/app/_services/profile/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        // check if authenticated
        if (this.authService.isAuthenticated()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_profile_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_profile_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_services/profile/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    AuthenticationService.prototype.isAuthenticated = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser && currentUser !== undefined) {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.getProfile = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser && currentUser !== undefined && currentUser.toString() !== "undefined") {
            return JSON.parse(currentUser);
        }
        return undefined;
    };
    // set auth
    AuthenticationService.prototype.setAuth = function (profile) {
        localStorage.setItem('currentUser', JSON.stringify(profile));
        this.refreshAfterAuth(true, profile);
    };
    // clear auth
    AuthenticationService.prototype.doLogout = function () {
        localStorage.removeItem('currentUser');
        this.refreshAfterAuth(false, null);
    };
    // refresh after auth
    AuthenticationService.prototype.refreshAfterAuth = function (isAuth, profile) {
        this.subject.next({
            isAuth: isAuth,
            profile: profile
        });
    };
    AuthenticationService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthenticationService);

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/profile/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* unused harmony export LoginRequest */
/* unused harmony export LoginResponse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    // login
    LoginService.prototype.run = function (request) {
        // try the login
        return this.http
            .post('/api/profile/login', {
            email: request.email,
            password: request.password
        })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoginService);

var LoginRequest = (function () {
    function LoginRequest() {
    }
    return LoginRequest;
}());

var LoginResponse = (function () {
    function LoginResponse() {
    }
    return LoginResponse;
}());

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>App</h1>  \n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppContainerComponent = (function () {
    function AppContainerComponent() {
    }
    AppContainerComponent.prototype.ngOnInit = function () {
    };
    return AppContainerComponent;
}());
AppContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-app-container',
        template: __webpack_require__("../../../../../src/app/app-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-container.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppContainerComponent);

//# sourceMappingURL=app-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<div class=\"container\">  \n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App2';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_header_component__ = __webpack_require__("../../../../../src/app/layout/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_footer_component__ = __webpack_require__("../../../../../src/app/layout/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app1_app1_listing_component__ = __webpack_require__("../../../../../src/app/app1/app1-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app1_app1_parameters_component__ = __webpack_require__("../../../../../src/app/app1/app1-parameters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app2_app2_listing_component__ = __webpack_require__("../../../../../src/app/app2/app2-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app1_app1_container_component__ = __webpack_require__("../../../../../src/app/app1/app1-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_login_component__ = __webpack_require__("../../../../../src/app/profile/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_profile_authentication_service__ = __webpack_require__("../../../../../src/app/_services/profile/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_container_component__ = __webpack_require__("../../../../../src/app/app-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__layout_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__layout_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__app1_app1_listing_component__["a" /* App1ListingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__app2_app2_listing_component__["a" /* App2ListingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app1_app1_parameters_component__["a" /* App1ParametersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app1_app1_parameters_component__["a" /* App1ParametersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__app1_app1_container_component__["a" /* App1ContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__profile_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__app_container_component__["a" /* AppContainerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_profile_authentication_service__["a" /* AuthenticationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app1/app1-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app1/app1-container.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/app1\">Home</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"./parameters\">Parameters</a>\n  </li>    \n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app1/app1-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App1ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var App1ContainerComponent = (function () {
    function App1ContainerComponent() {
    }
    App1ContainerComponent.prototype.ngOnInit = function () {
    };
    return App1ContainerComponent;
}());
App1ContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-app1-container',
        template: __webpack_require__("../../../../../src/app/app1/app1-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app1/app1-container.component.css")]
    }),
    __metadata("design:paramtypes", [])
], App1ContainerComponent);

//# sourceMappingURL=app1-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/app1/app1-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app1/app1-listing.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div>\n    <h2>Listing</h2>\n\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label>Status</label>\n          <select class=\"form-control\">\n            <option value=\"\">All statuses</option>\n            <option value=\"1\">Open Only</option>\n            <option value=\"2\">Closed Only</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Requestor</label>\n            <select class=\"form-control\">\n              <option value=\"\">All requestors</option>\n              <option value=\"mroma\">Michael Roma</option>\n              <option value=\"mjones\">Mike Jones</option>\n              <option value=\"jsmith\">John Smith</option>\n            </select>\n          </div>\n        </div>\n    </div>\n    <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sapien et orci pretium luctus. Aenean tincidunt risus vel ultrices sagittis. Proin maximus vitae libero iaculis sagittis. Nam lobortis libero vel neque semper, tempor volutpat velit maximus. Sed egestas molestie interdum. Praesent ex diam, tincidunt ut aliquet nec, tempor vitae erat. In quis purus lacinia, laoreet nulla quis, dapibus felis. Mauris faucibus varius libero ut dictum.\n    </p>\n    <p>\n    Etiam et nisl nunc. Donec elementum arcu eleifend, tempus felis ut, dapibus ipsum. Morbi vel ante eu nibh euismod rhoncus tincidunt a ex. Sed vulputate fringilla dapibus. Aenean a imperdiet dolor. Vestibulum vel lacinia felis, at suscipit leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus sem, volutpat in elementum et, dignissim eget justo. Ut semper egestas molestie. Donec a vestibulum odio.\n    </p>\n    <p>\n    Praesent consequat hendrerit ex, laoreet finibus mauris blandit accumsan. Quisque euismod vestibulum velit, sed porttitor nisl porta quis. Sed consectetur, diam vitae tincidunt aliquam, lectus dui ultricies nisi, in porttitor tortor lectus ut ante. Curabitur sagittis sem vitae arcu dignissim vestibulum sed rutrum nulla. Nulla sodales porta ligula quis ullamcorper. Nam vel cursus diam. Suspendisse et magna vitae lacus malesuada varius. Nulla facilisi. Sed fringilla, orci sed aliquet sodales, leo neque iaculis lacus, quis placerat leo metus ac nibh. Vivamus neque odio, aliquam sed fringilla a, laoreet auctor arcu. Fusce sit amet lacus magna.\n    </p>\n    <p>\n    Quisque viverra lacinia justo eu consectetur. Sed bibendum interdum congue. Curabitur maximus sapien vitae neque efficitur, vel suscipit diam pretium. Morbi scelerisque orci in sapien pretium convallis. In eget ex in mi pulvinar feugiat vitae vel ligula. Etiam ac turpis sit amet mi mollis aliquam et sit amet erat. Sed imperdiet justo metus, at malesuada ligula finibus vel. Ut nec erat rhoncus, suscipit quam at, interdum libero. Quisque ut libero id magna condimentum interdum. Aliquam erat volutpat. Sed tincidunt eros a diam semper, non congue nulla sollicitudin. Donec placerat quam orci, gravida imperdiet massa faucibus at. Etiam nec vestibulum massa, ac efficitur ipsum. Ut hendrerit felis eu elit fringilla, id venenatis velit vulputate. Vivamus vitae varius ligula, a rhoncus leo. Nam quis eros tempus, sagittis nunc eu, aliquet tellus.\n    </p>\n    <p>\n    Aenean enim velit, viverra sit amet diam sit amet, porta mollis lacus. Vestibulum rhoncus mollis ligula, id pellentesque felis efficitur et. Ut accumsan purus sollicitudin mollis consectetur. Quisque blandit est sit amet lobortis scelerisque. Donec volutpat eget nibh et fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam elit metus, interdum luctus sapien condimentum, pellentesque blandit erat. Nam sagittis velit quis diam sagittis molestie volutpat at orci. Nulla ut sem mauris.\n    </p>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sapien et orci pretium luctus. Aenean tincidunt risus vel ultrices sagittis. Proin maximus vitae libero iaculis sagittis. Nam lobortis libero vel neque semper, tempor volutpat velit maximus. Sed egestas molestie interdum. Praesent ex diam, tincidunt ut aliquet nec, tempor vitae erat. In quis purus lacinia, laoreet nulla quis, dapibus felis. Mauris faucibus varius libero ut dictum.\n      </p>\n      <p>\n      Etiam et nisl nunc. Donec elementum arcu eleifend, tempus felis ut, dapibus ipsum. Morbi vel ante eu nibh euismod rhoncus tincidunt a ex. Sed vulputate fringilla dapibus. Aenean a imperdiet dolor. Vestibulum vel lacinia felis, at suscipit leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus lacus sem, volutpat in elementum et, dignissim eget justo. Ut semper egestas molestie. Donec a vestibulum odio.\n      </p>\n      <p>\n      Praesent consequat hendrerit ex, laoreet finibus mauris blandit accumsan. Quisque euismod vestibulum velit, sed porttitor nisl porta quis. Sed consectetur, diam vitae tincidunt aliquam, lectus dui ultricies nisi, in porttitor tortor lectus ut ante. Curabitur sagittis sem vitae arcu dignissim vestibulum sed rutrum nulla. Nulla sodales porta ligula quis ullamcorper. Nam vel cursus diam. Suspendisse et magna vitae lacus malesuada varius. Nulla facilisi. Sed fringilla, orci sed aliquet sodales, leo neque iaculis lacus, quis placerat leo metus ac nibh. Vivamus neque odio, aliquam sed fringilla a, laoreet auctor arcu. Fusce sit amet lacus magna.\n      </p>\n      <p>\n      Quisque viverra lacinia justo eu consectetur. Sed bibendum interdum congue. Curabitur maximus sapien vitae neque efficitur, vel suscipit diam pretium. Morbi scelerisque orci in sapien pretium convallis. In eget ex in mi pulvinar feugiat vitae vel ligula. Etiam ac turpis sit amet mi mollis aliquam et sit amet erat. Sed imperdiet justo metus, at malesuada ligula finibus vel. Ut nec erat rhoncus, suscipit quam at, interdum libero. Quisque ut libero id magna condimentum interdum. Aliquam erat volutpat. Sed tincidunt eros a diam semper, non congue nulla sollicitudin. Donec placerat quam orci, gravida imperdiet massa faucibus at. Etiam nec vestibulum massa, ac efficitur ipsum. Ut hendrerit felis eu elit fringilla, id venenatis velit vulputate. Vivamus vitae varius ligula, a rhoncus leo. Nam quis eros tempus, sagittis nunc eu, aliquet tellus.\n      </p>\n      <p>\n      Aenean enim velit, viverra sit amet diam sit amet, porta mollis lacus. Vestibulum rhoncus mollis ligula, id pellentesque felis efficitur et. Ut accumsan purus sollicitudin mollis consectetur. Quisque blandit est sit amet lobortis scelerisque. Donec volutpat eget nibh et fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam elit metus, interdum luctus sapien condimentum, pellentesque blandit erat. Nam sagittis velit quis diam sagittis molestie volutpat at orci. Nulla ut sem mauris.\n      </p>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/app1/app1-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App1ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var App1ListingComponent = (function () {
    function App1ListingComponent() {
    }
    App1ListingComponent.prototype.ngOnInit = function () {
    };
    return App1ListingComponent;
}());
App1ListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-app1-listing',
        template: __webpack_require__("../../../../../src/app/app1/app1-listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app1/app1-listing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], App1ListingComponent);

//# sourceMappingURL=app1-listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/app1/app1-parameters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app1/app1-parameters.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  app1-parameters works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/app1/app1-parameters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App1ParametersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var App1ParametersComponent = (function () {
    function App1ParametersComponent() {
    }
    App1ParametersComponent.prototype.ngOnInit = function () {
    };
    return App1ParametersComponent;
}());
App1ParametersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-app1-parameters',
        template: __webpack_require__("../../../../../src/app/app1/app1-parameters.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app1/app1-parameters.component.css")]
    }),
    __metadata("design:paramtypes", [])
], App1ParametersComponent);

//# sourceMappingURL=app1-parameters.component.js.map

/***/ }),

/***/ "../../../../../src/app/app2/app2-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app2/app2-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  app2-listing works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/app2/app2-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App2ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var App2ListingComponent = (function () {
    function App2ListingComponent() {
    }
    App2ListingComponent.prototype.ngOnInit = function () {
    };
    return App2ListingComponent;
}());
App2ListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-app2-listing',
        template: __webpack_require__("../../../../../src/app/app2/app2-listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app2/app2-listing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], App2ListingComponent);

//# sourceMappingURL=app2-listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Welcome to {{title}}</h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">  \n  \n  <div class=\"panel\" *ngFor=\"let value of appValues\">\n    <div class=\"panel-body\">\n      {{ value }}\n    </div>\n  </div>\n\n  <div class=\"panel\" *ngFor=\"let value of appValues2\">\n      <div class=\"panel-body\">\n        {{ value }}\n      </div>\n    </div>\n  \n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(http) {
        var _this = this;
        this.http = http;
        this.getValues().then(function (x) { return _this.appValues = x; });
        this.getValues2().then(function (x) { return _this.appValues2 = x; });
    }
    HomeComponent.prototype.getValues = function () {
        return this.http.get('/api/values/get')
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    HomeComponent.prototype.getValues2 = function () {
        return this.http.get('/api/values/get2')
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 60px;\n  line-height: 60px; /* Vertically center the text there */\n  background-color: #f5f5f5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\">2017 Michael Roma Development</span>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/layout/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/layout/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\">Angular4 Example 2</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      \n      <li *ngFor=\"let item of modules\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"{{item.url}}\">{{ item.name }}</a>\n      </li>\n\n      <li *ngIf=\"isAuthenticated\" class=\"nav-item\">\n        <a class=\"nav-link clickable\" (click)=\"logOut()\">Log Out</a>\n      </li>\n\n    </ul>\n\n    <span *ngIf=\"isAuthenticated\" class=\"navbar-text\">\n        Welcome, {{ authenticatedProfile.firstName }} {{ authenticatedProfile.lastName }}\n    </span>\n\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/layout/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_profile_authentication_service__ = __webpack_require__("../../../../../src/app/_services/profile/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = this.authService.isAuthenticated();
        if (this.isAuthenticated) {
            this.authenticatedProfile = this.authService.getProfile();
        }
        this.subscription = this.authService.getMessage().subscribe(function (authObj) {
            _this.isAuthenticated = authObj.isAuth;
            _this.authenticatedProfile = authObj.profile;
            _this.refreshMenu();
        });
    }
    HeaderComponent.prototype.logOut = function () {
        this.authService.doLogout();
        this.router.navigate(['/']);
    };
    ;
    HeaderComponent.prototype.ngOnInit = function () {
        this.refreshMenu();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent.prototype.refreshMenu = function () {
        if (this.isAuthenticated) {
            this.modules = [
                {
                    name: "App 1",
                    url: "/app/app1"
                },
                {
                    name: "App 2",
                    url: "/app/app2"
                }
            ];
        }
        else {
            this.modules = [
                {
                    name: "Login",
                    url: "/login"
                }
            ];
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/layout/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_profile_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_profile_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  \n  <div class=\"col-md-4\">\n    <h3>{{ status }}</h3>\n\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" [(ngModel)]=\"model.email\" class=\"form-control\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"model.password\" class=\"form-control\" />\n    </div>\n      \n    <button (click)=\"login($event)\" type=\"button\" class=\"btn btn-primary\">Login</button>\n    \n    <pre>model = {{ model | json }}</pre>\n  </div>\n\n  \n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* unused harmony export LoginModel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_authentication_service__ = __webpack_require__("../../../../../src/app/_services/profile/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_profile_login_service__ = __webpack_require__("../../../../../src/app/_services/profile/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authService, loginService) {
        this.router = router;
        this.authService = authService;
        this.loginService = loginService;
        this.status = "it works!";
        this.model = new LoginModel();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // check login
        this.loginService.run(this.model).then(function (response) {
            // check login
            if (response.success) {
                _this.authService.setAuth(response.profile);
                _this.router.navigate(['/']);
            }
            else {
                _this.status = "Invalid login";
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/profile/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_profile_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_profile_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_profile_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_profile_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_profile_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], LoginComponent);

// login model
var LoginModel = (function () {
    function LoginModel() {
    }
    return LoginModel;
}());

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_container_component__ = __webpack_require__("../../../../../src/app/app-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app1_app1_container_component__ = __webpack_require__("../../../../../src/app/app1/app1-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app1_app1_listing_component__ = __webpack_require__("../../../../../src/app/app1/app1-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app1_app1_parameters_component__ = __webpack_require__("../../../../../src/app/app1/app1-parameters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app2_app2_listing_component__ = __webpack_require__("../../../../../src/app/app2/app2-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_login_component__ = __webpack_require__("../../../../../src/app/profile/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__profile_login_component__["a" /* LoginComponent */] },
    {
        path: 'app',
        component: __WEBPACK_IMPORTED_MODULE_3__app_container_component__["a" /* AppContainerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: 'app1',
                component: __WEBPACK_IMPORTED_MODULE_4__app1_app1_container_component__["a" /* App1ContainerComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__app1_app1_listing_component__["a" /* App1ListingComponent */] },
                    { path: 'parameters', component: __WEBPACK_IMPORTED_MODULE_6__app1_app1_parameters_component__["a" /* App1ParametersComponent */] }
                ],
            },
            { path: 'app2', component: __WEBPACK_IMPORTED_MODULE_7__app2_app2_listing_component__["a" /* App2ListingComponent */] }
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map