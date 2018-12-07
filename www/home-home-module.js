(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  style=\"background:black;\">\n    <ion-buttons style=\"color:white;\" slot=\"start\">\n      <ion-menu-button style=\"color:white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"background-color:#282828;color: white;line-height:35px;\">\n      VIRTOGRAMMA\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar [(ngModel)]=\"search\"></ion-searchbar>\n\t<!-- SULUGUNI CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/suluguni\">\n\t\t<ion-card>\n\t\t\t<ion-img src=\"/src/app/suluguni/img/suluguni-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:9px;\">SULUGUNI</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<ion-icon name=\"pin\"></ion-icon>ПЕР. МУЗЕЙНЫЙ 10\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n\n\t<!-- NIKO BAR CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/niko-bar\">\n\t\t<ion-card value=\"niko\">\n\t\t\t<ion-img src=\"/src/app/niko-bar/img/nikobar-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:8px;\">NIKO BAR</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<p><ion-icon name=\"pin\"></ion-icon> УЛ. ЗЛАТОУСТОВСКАЯ 51<p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n\n\t<!-- DOLMA CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/dolma\">\n\t\t<ion-card>\n\t\t\t<ion-img src=\"/src/app/dolma/img/dolma-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:9px;\">DОЛМА</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<p><ion-icon name=\"pin\"></ion-icon> УЛ. БОЛЬШАЯ ВАСИЛЬКОВСКАЯ 122<p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n\n\t<!-- SAMOGON CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/samogon-fish-bar\">\n\t\t<ion-card>\n\t\t\t<ion-img src=\"/src/app/samogon-fish-bar/img/samogon-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:9px;\">SAMOGON FISH BAR</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<p><ion-icon name=\"pin\"></ion-icon> УЛ. НАБЕРЕЖНО-КРЕЩАТИЦКАЯ 10</p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n\n\t<!-- WE RESTAURANT CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/we-restaurant\">\n\t\t<ion-card>\n\t\t\t<ion-img src=\"/src/app/we-restaurant/img/we-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:9px;\">WE.RESTAURANT</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<p><ion-icon name=\"pin\"></ion-icon> ПР. ГЕРОЕВ СТАЛИНГРАДА 6К4<p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n\n\n\t<!-- LEMONGRASS CAFE CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/lemongrass-cafe\">\n\t\t<ion-card>\n\t\t\t<ion-img src=\"/src/app/lemongrass-cafe/img/lemongrass-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:9px;\">LEMONGRASS CAFE</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<p><ion-icon name=\"pin\"></ion-icon> УЛ. ЗЛАТОУСТОВСКАЯ 14<p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n\n\t<!-- INDIGO CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/indigo\">\n\t\t<ion-card>\n\t\t\t<ion-img src=\"/src/app/indigo/img/indigo-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:9px;\">INDIGO</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<p><ion-icon name=\"pin\"></ion-icon> УЛ. КУДРЯШОВА 3<p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n\n\t<!-- NAM CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/nam\">\n\t\t<ion-card>\n\t\t\t<ion-img src=\"/src/app/nam/img/nam-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:9px;\">NĂM</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<p><ion-icon name=\"pin\"></ion-icon> УЛ. БОЛЬШАЯ ВАСИЛЬКОВСКАЯ 48<p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n\n\t<!-- INSIDE LOUNGE BAR CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/inside\">\n\t\t<ion-card>\n\t\t\t<ion-img src=\"/src/app/inside/img/inside-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:9px;\">INSIDE LOUNGE BAR</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<p><ion-icon name=\"pin\"></ion-icon> БУЛ. ДРУЖБЫ НАРОДОВ 28 В<p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n\n\t<!-- AVOCADO CARD -->\n\n\t<a style=\"text-decoration:none;\" routerLink=\"/avocado\">\n\t\t<ion-card>\n\t\t\t<ion-img src=\"/src/app/avocado/img/avocado-li.jpg\"></ion-img>\n\t\t\t<ion-card-header>\n\t\t\t<ion-card-title style=\"height:9px;\">AVOCADO</ion-card-title>\n\t\t\t</ion-card-header>\n\t\t\t<ion-card-content>\n\t\t\t<p><ion-icon name=\"pin\"></ion-icon> УЛ. ИНСТИТУТСКАЯ 27 / 6<p>\n\t\t\t</ion-card-content>\n\t\t</ion-card>\n\t</a>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.searchInfo = function () {
        console.log(this.search);
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map