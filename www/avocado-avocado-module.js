(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["avocado-avocado-module"],{

/***/ "./src/app/avocado/avocado.module.ts":
/*!*******************************************!*\
  !*** ./src/app/avocado/avocado.module.ts ***!
  \*******************************************/
/*! exports provided: AvocadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvocadoPageModule", function() { return AvocadoPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _avocado_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avocado.page */ "./src/app/avocado/avocado.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _avocado_page__WEBPACK_IMPORTED_MODULE_5__["AvocadoPage"]
    }
];
var AvocadoPageModule = /** @class */ (function () {
    function AvocadoPageModule() {
    }
    AvocadoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_avocado_page__WEBPACK_IMPORTED_MODULE_5__["AvocadoPage"]]
        })
    ], AvocadoPageModule);
    return AvocadoPageModule;
}());



/***/ }),

/***/ "./src/app/avocado/avocado.page.html":
/*!*******************************************!*\
  !*** ./src/app/avocado/avocado.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"background-color:black\">\n    <ion-buttons style=\"color:white;\" slot=\"start\">\n      <ion-back-button style=\"color:white;\" defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n      <ion-title style=\"background-color:#282828;color: white;line-height:35px;\">\n        AVOCADO\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!--<iframe width=\"100%\" height=\"100%\" frameborder=\"0\" src=\"https://virtogramma.com/avocado\"></iframe>-->\n\n\n<iframe width='100%' style=\"height:50vh\" src='https://my.matterport.com/show/?m=uKirXzUCvq8&play=1&lang=ru' frameborder='0' allowfullscreen allow='vr'></iframe>\n\n<ion-slides padding>\n  <ion-slide>\n    <ion-item>\n    <ion-input required clearInput [(ngModel)]=\"zakaz.name\" placeholder=\"Ваше Имя\"></ion-input>\n    </ion-item>\n  </ion-slide>\n\n  <ion-slide>\n    <ion-item>\n    <ion-input required clearInput [(ngModel)]=\"zakaz.phone\" type = \"tel\" placeholder = \"Ваш Телефон\"></ion-input>\n    </ion-item>\n  </ion-slide>\n\n  <ion-slide>\n    <ion-item>\n    <ion-input required clearInput [(ngModel)]=\"zakaz.table\" type=\"number\" maxlength=\"2\" placeholder=\"Номер Столика\"></ion-input>\n    </ion-item>\n  </ion-slide>\n\n  <ion-slide>\n    <ion-item>\n    <ion-input required clearInput [(ngModel)]=\"zakaz.guests\" type=\"number\" maxlength=\"2\" placeholder=\"Количество Гостей\"></ion-input>\n    </ion-item>\n  </ion-slide>\n\n  <ion-slide>\n   <ion-item>\n    <ion-label>Дата резерва</ion-label>\n    <ion-datetime displayFormat=\"DD MMM\" monthShortNames='Января, Февраля, Марта, Апреля, Мая, Июня, Июля, Августа, Сентября, Октября, Ноября, Декабря' [(ngModel)]=\"myDate\"></ion-datetime>\n   </ion-item>\n  </ion-slide>\n\n  <ion-slide>\n   <ion-item>\n    <ion-label>Время резерва</ion-label>\n    <ion-datetime required hourValues=\"09,10,11,12,13,14,15,16,17,18,19,20,21,22\" [(ngModel)]=\"zakaz.time\" displayFormat=\"HH:mm\"></ion-datetime>\n   </ion-item>\n  </ion-slide>\n</ion-slides>\n<div *ngIf=\"presentDiv\" align=\"center\" color=\"warning\">\n<ion-label text-center color=\"black\">Спасибо за Ваш заказ!</ion-label>\n</div>\n<div *ngIf=\"hideMe\" align=\"center\">\n<ion-button (click)=\"pervSlide()\" color=\"black\" style=\"color:white;\">Назад</ion-button>\n<ion-button type=\"submit\" (click)=\"nextSlide()\" color=\"black\" style=\"color:white;\">Далее</ion-button>\n</div>\n\n\n\n\n<ion-list padding>\n  <ion-item text-center href=\"https://goo.gl/maps/YLhX36AAGC22\">\n    <ion-icon color=\"warning\" name=\"pin\"></ion-icon>\n    <ion-label>УЛ. ИНСТИТУТСКАЯ 27/6</ion-label>\n  </ion-item>\n  <ion-item text-center href=\"tel:095%20434%204788\" >\n    <ion-icon color=\"warning\" name=\"call\"></ion-icon>\n    <ion-label>+38(095)-434-47-88</ion-label>\n  </ion-item>\n</ion-list>\n\n<h2 text-center block ion-text style=\"background-color:#282828;color: white;line-height:35px;font-size:1.1em;\">ОПИСАНИЕ</h2>\n\n<ion-label text-center padding>“Ресторан АВОКАДО – это новое заведение в самом центре города, среди ключевых особенностей ресторана стоит отметить хорошую кухню и множество блюд с добавлением авокадо. Ресторан отлично подойдёт для лёгкого завтрака, деловой встречи на обед и для сытного ужина в компании друзей. Светлый позитивный интерьер первого зала и пастельные кофейные тона, используемые в оформлении интерьера во втром зале, позволят Вам выбрать уютный столик и отлично отдохнуть.”\n</ion-label>\n<div padding text-right>Фирменное Блюдо – Аво Биф</div>\n<div padding text-right>Средний Чек – 295грн</div>\n<div padding text-right>Оценка VIRTOGRAMMA – 4/5</div>\n\n<h2 text-center block ion-text style=\"background-color:#282828;color: white;line-height:35px;font-size:1.1em;\">ГАЛЕРЕЯ</h2>\n\n<div>\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding-top: 0;padding-bottom:0;\">\n          <iframe style=\"height:40vh;width:100%;\" src=\"https://www.youtube.com/embed/uAco5MUw2BU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"></iframe>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col style=\"padding-top: 0;padding-bottom:0;padding-right:2.5px;\">\n            <ion-img cache=\"true\" src=\"https://virtogramma.com/wp-content/uploads/2018/08/a4.jpg\"></ion-img>\n          </ion-col>\n          <ion-col style=\"padding-top: 0;padding-bottom:0;padding-left: 2.5px;\">\n            <ion-img cache=\"true\"  src=\"https://virtogramma.com/wp-content/uploads/2018/08/a3.jpg\"></ion-img>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style=\"padding-top: 0;padding-bottom:0; padding-right:2.5px;\" >\n          <ion-img cache=\"true\" src=\"https://virtogramma.com/wp-content/uploads/2018/08/a4.jpg\"></ion-img>\n        </ion-col>\n        <ion-col style=\"padding-top: 0;padding-bottom:0; padding-left: 2.5px;\">\n          <ion-img cache=\"true\"  src=\"https://virtogramma.com/wp-content/uploads/2018/08/a3.jpg\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</div>\n\n\n\n\n\n\n\n<h2 text-center block ion-text style=\"background-color:#282828;color: white;line-height:35px;font-size:1.1em;\">МЕНЮ</h2>\n<ion-slides>\n  <ion-slide>\n<ion-label>\n<ion-item> ЗАВТРАКИ </ion-item>\n<ion-item> Гранола с Йогуртом – 69грн </ion-item>\n<ion-item>  (Овсянка, Орехи, Курага, Изюм, Мёд, Корица – 150/100г.) </ion-item>\n<ion-item> Фритата со Шпинатом и Томатами – 69грн </ion-item>\n<ion-item> (Куриное Яйцо, Сливки, Шпинат,Томаты Черри, Сыр Моцарелла – 230г.)</ion-item>\n<ion-item>  Творожный Пудингс Ягодным Соусом – 69грн </ion-item>\n<ion-item>  (Домашний Творог,Пасочный Корж, Ягоды – 210г.)</ion-item>\n</ion-label>\n </ion-slide>\n\n  <ion-slide>\n   <ion-label>\n     <ion-item> ЗАВТРАКИ </ion-item>\n<ion-item> Гренки с Гуакамоле и Яйцом Пашот – 79грн </ion-item>\n<ion-item> (Тост Белый, Гуакамоле,Яйцо Куриное, Микс Салата – 160г.) </ion-item>\n<ion-item> Фитнес Микс – 99грн </ion-item>\n<ion-item> (Авокадо, Свежие Ягоды,Сыр Фета, Листья Шпината – 250г.)</ion-item>\n<ion-item> Авокадо Запеченое с Яйцом – 119грн </ion-item>\n<ion-item> (Авокадо, Куриное Яйцо,Сыр Пармезан – 270г.) </ion-item>\n<ion-item> Хумус с Овощами с Тостами – 119грн </ion-item>\n<ion-item> (Хумус, Овощи, Тосы – 335г.) </ion-item>\n   </ion-label>\n  </ion-slide>\n</ion-slides>\n\n<h2 text-center block ion-text style=\"background-color:#282828;color: white;line-height:35px;font-size:1.1em;\">РЕЙТИНГ</h2>\n<div *ngIf=\"rivewNotUnlog\">\n<ion-card>\n  <ion-card-content>\n    <div padding text-center> Чтобы оставить отзыв, войдите или зарегистрируйтесь! </div>\n    <div align=\"center\">\n    \t<ion-button color=\"black\" style=\"color:white;\"  routerLink=\"/login\"> Войти </ion-button>\n      <ion-button color=\"black\" style=\"color:white;\"  routerLink=\"/register\"> Зарегистрироваться </ion-button >\n      <!-- <button ion-button expand=\"block\" (click)=\"loginFacebook()\"><ion-icon name=\"logo-facebook\"></ion-icon></button> -->\n    </div>\n  </ion-card-content>\n</ion-card>\n</div>\n\n<div *ngIf=\"reviewIog\">\n<ion-card >\n  <ion-card-content style=\"font-size: 14.3px;\">\n  <ion-input placeholder=\"Ваш Отзыв\" [(ngModel)]=\"review.text\"></ion-input>\n  <ion-grid style=\"font-family:Ubuntu;font-weight:bold;\">\n    <ion-row >\n      <ion-col>\n          <div style=\"width: 130px;\">\n            <ion-label>КУХНЯ</ion-label>\n            <div style=\"font-size:22px;\">\n             <ion-icon style=\"padding:1px;\" name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\"\n             (click)=\"rate(num, kitch)\" [ngStyle]=\"{color:getColor(num, kitch)}\">\n             </ion-icon>\n            </div>\n          </div>\n    </ion-col>\n\n    <ion-col>\n      <div style=\"width: 130px;\">\n        <ion-label>АТМОСФЕРА</ion-label>\n        <div style=\"font-size:22px;\">\n          <ion-icon style=\"padding:1px;\" name=\"star\" *ngFor=\"let star of [1,2,3,4,5]\"\n            (click)=\"rate(star,atmos)\" [ngStyle]=\"{color:getColor(star,atmos)}\">\n          </ion-icon>\n        </div>\n      </div>\n    </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div style=\"width: 130px;\">\n      <ion-label>ОБСЛУЖИВАНИЕ</ion-label>\n      <div  style=\"font-size:22px;\">\n      <ion-icon style=\"padding:1px;\" name=\"star\" *ngFor=\"let star of [1,2,3,4,5]\"\n          (click)=\"rate(star,serv)\" [ngStyle]=\"{color:getColor(star, serv)}\">\n      </ion-icon>\n      </div>\n         </div>\n         </ion-col>\n\n      <ion-col>\n        <div style=\"width: 130px;\">\n          <ion-label>СТОИМОСТЬ</ion-label>\n          <div style=\"font-size:22px;\">\n            <ion-icon style=\"padding:1px;\" name=\"star\" *ngFor=\"let star of [1,2,3,4,5]\"\n            (click)=\"rate(star,price)\" [ngStyle]=\"{color:getColor(star, price)}\">\n      </ion-icon>\n      </div>\n    </div>\n    </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div style=\"width: 130px;\">\n      <ion-label>РАСПОЛОЖЕНИЕ</ion-label>\n      <div style=\"font-size:22px;\">\n      <ion-icon style=\"padding:1px;\" name=\"star\" *ngFor=\"let star of [1,2,3,4,5]\"\n          (click)=\"rate(star,loc)\" [ngStyle]=\"{color:getColor(star,loc)}\">\n      </ion-icon>\n      </div>\n    </div>\n    </ion-col>\n\n\n    <ion-col>\n      <div style=\"width: 130px;\">\n      <ion-label>ПАРКОВКА</ion-label>\n      <div style=\"font-size:22px;\">\n      <ion-icon style=\"padding:1px;\" name=\"star\" *ngFor=\"let star of [1,2,3,4,5]\"\n          (click)=\"rate(star,park)\" [ngStyle]=\"{color:getColor(star,park)}\">\n      </ion-icon>\n      </div>\n    </div>\n    </ion-col>\n    </ion-row>\n     </ion-grid>\n     <ion-button color=\"black\" (click)=\"sendReview()\"style=\"color:white;\"> Отправить Отзыв </ion-button>\n  </ion-card-content>\n  </ion-card>\n</div>\n\n\n<!--<ion-label>ОСТАВЬТЕ ОТЗЫВ</ion-label>-->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/avocado/avocado.page.scss":
/*!*******************************************!*\
  !*** ./src/app/avocado/avocado.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/avocado/avocado.page.ts":
/*!*****************************************!*\
  !*** ./src/app/avocado/avocado.page.ts ***!
  \*****************************************/
/*! exports provided: Review, Zakaz, AvocadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zakaz", function() { return Zakaz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvocadoPage", function() { return AvocadoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());

var Zakaz = /** @class */ (function () {
    function Zakaz() {
    }
    return Zakaz;
}());

var AvocadoPage = /** @class */ (function () {
    function AvocadoPage(alertController, fAuth, db, camera, imagePicker) {
        this.alertController = alertController;
        this.fAuth = fAuth;
        this.db = db;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.kitchen = 0;
        this.atmosfere = 0;
        this.service = 0;
        this.cost = 0;
        this.location = 0;
        this.parking = 0;
        this.kitchenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.atmosfereChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.serviceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.costChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.locationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.parkingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.kitch = 1;
        this.atmos = 2;
        this.serv = 3;
        this.price = 4;
        this.loc = 5;
        this.park = 6;
        this.zakaz = new Zakaz();
        this.review = new Review();
        this.imageLists = [];
        this.reviewTrigger = false;
        this.myDate = new Date().toISOString();
        this.items = db.list('orders').valueChanges();
    }
    ;
    ;
    ;
    ;
    ;
    ;
    AvocadoPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Отлично!',
                            subHeader: 'Ваш резерв оформлен.',
                            message: this.zakaz.name + ', в скорем времени с Вами свяжется администратор заведения! ',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AvocadoPage.prototype.nextSlide = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
        this.zakaz.myDate = (this.myDate).substring(5, 7) + " месяц" + (this.myDate).substring(7, 10) + " день";
        if (this.zakaz.name && this.zakaz.phone && this.zakaz.table && this.zakaz.myDate && this.zakaz.guests && this.zakaz.time) {
            this.db.list('/orders').push({ name: this.zakaz.name, phone: this.zakaz.phone, table: this.zakaz.table, data: this.zakaz.myDate, guests: this.zakaz.guests, time: this.zakaz.time });
            console.log("ЖИ ЕСТЬ");
            this.presentAlert();
            if (this.hideMe) {
                this.hideMe = false;
                this.presentDiv = true;
            }
            else {
                this.hideMe = true;
                this.presentDiv = false;
            }
        }
        console.log(this.zakaz.myDate, this.zakaz.time);
    };
    AvocadoPage.prototype.pervSlide = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
    };
    AvocadoPage.prototype.rate = function (index, rateID) {
        switch (rateID) {
            case 1:
                this.kitchen = index;
                this.kitchenChange.emit(this.kitchen);
                return console.log('Кухня ' + index);
            case 2:
                this.atmosfere = index;
                this.atmosfereChange.emit(this.atmosfere);
                return console.log('Атмосфера ' + index);
            case 3:
                this.service = index;
                this.serviceChange.emit(this.service);
                return console.log('Обслуживаение ' + index);
            case 4:
                this.cost = index;
                this.costChange.emit(this.cost);
                return console.log('Стоимость ' + index);
            case 5:
                this.location = index;
                this.locationChange.emit(this.location);
                return console.log('Расположение ' + index);
            case 6:
                this.parking = index;
                this.parkingChange.emit(this.cost);
                return console.log('Парковка ' + index);
            default:
                return console.log('Rating Here Boys');
        }
    };
    AvocadoPage.prototype.getColor = function (index, rateID) {
        if (this.isAboveRating(index, rateID)) {
            return "grey";
        }
        switch (index) {
            case 1:
            case 2:
                return "gold";
            case 3:
            case 4:
                return "gold";
            case 5:
                return "gold";
            default:
                return "grey";
        }
    };
    AvocadoPage.prototype.isAboveRating = function (index, rateID) {
        switch (rateID) {
            case 1:
                return index > this.kitchen;
            case 2:
                return index > this.atmosfere;
            case 3:
                return index > this.service;
            case 4:
                return index > this.cost;
            case 5:
                return index > this.location;
            case 6:
                return index > this.parking;
        }
    };
    AvocadoPage.prototype.sendReview = function () {
        console.log(this.parking);
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    };
    AvocadoPage.prototype.ngOnInit = function () {
        this.presentDiv = false;
        this.hideMe = true;
        this.slides.lockSwipes(true);
        if (this.fAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).toPromise()) {
            this.reviewIog = true;
            this.rivewNotUnlog = false;
            console.log(this.fAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).toPromise());
        }
        else {
            this.reviewIog = false;
            this.rivewNotUnlog = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AvocadoPage.prototype, "kitchen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AvocadoPage.prototype, "atmosfere", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AvocadoPage.prototype, "service", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AvocadoPage.prototype, "cost", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AvocadoPage.prototype, "location", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AvocadoPage.prototype, "parking", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AvocadoPage.prototype, "rateID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AvocadoPage.prototype, "kitchenChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AvocadoPage.prototype, "atmosfereChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AvocadoPage.prototype, "serviceChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AvocadoPage.prototype, "costChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AvocadoPage.prototype, "locationChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AvocadoPage.prototype, "parkingChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"])
    ], AvocadoPage.prototype, "slides", void 0);
    AvocadoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avocado',
            template: __webpack_require__(/*! ./avocado.page.html */ "./src/app/avocado/avocado.page.html"),
            styles: [__webpack_require__(/*! ./avocado.page.scss */ "./src/app/avocado/avocado.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"]])
    ], AvocadoPage);
    return AvocadoPage;
}());



/***/ })

}]);
//# sourceMappingURL=avocado-avocado-module.js.map