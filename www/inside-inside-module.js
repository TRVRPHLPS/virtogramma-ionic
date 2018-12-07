(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inside-inside-module"],{

/***/ "./src/app/inside/inside.module.ts":
/*!*****************************************!*\
  !*** ./src/app/inside/inside.module.ts ***!
  \*****************************************/
/*! exports provided: InsidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsidePageModule", function() { return InsidePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _inside_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inside.page */ "./src/app/inside/inside.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _inside_page__WEBPACK_IMPORTED_MODULE_5__["InsidePage"]
    }
];
var InsidePageModule = /** @class */ (function () {
    function InsidePageModule() {
    }
    InsidePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_inside_page__WEBPACK_IMPORTED_MODULE_5__["InsidePage"]]
        })
    ], InsidePageModule);
    return InsidePageModule;
}());



/***/ }),

/***/ "./src/app/inside/inside.page.html":
/*!*****************************************!*\
  !*** ./src/app/inside/inside.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>inside</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!--<iframe width=\"100%\" height=\"100%\" frameborder=\"0\" src=\"https://virtogramma.com/avocado\"></iframe>-->\n\n\n<iframe width='100%' style=\"height:50vh\" src='https://my.matterport.com/show/?m=WkQxcmW29bX&play=1&lang=ru' frameborder='0' allowfullscreen allow='vr'></iframe>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/inside/inside.page.scss":
/*!*****************************************!*\
  !*** ./src/app/inside/inside.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inside/inside.page.ts":
/*!***************************************!*\
  !*** ./src/app/inside/inside.page.ts ***!
  \***************************************/
/*! exports provided: InsidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsidePage", function() { return InsidePage; });
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

var InsidePage = /** @class */ (function () {
    function InsidePage() {
    }
    InsidePage.prototype.ngOnInit = function () {
    };
    InsidePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inside',
            template: __webpack_require__(/*! ./inside.page.html */ "./src/app/inside/inside.page.html"),
            styles: [__webpack_require__(/*! ./inside.page.scss */ "./src/app/inside/inside.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], InsidePage);
    return InsidePage;
}());



/***/ })

}]);
//# sourceMappingURL=inside-inside-module.js.map