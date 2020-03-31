(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\t\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding-left: 100px;\" >\r\n   \r\n    <h1 style=\"text-align: center;\">\r\n        <b>Your Orders! </b>  \r\n        <a [routerLink]=\"['/productdetails']\" style=\"padding-right: 70px;\" >\r\n            <button style=\"background-color: rgb(113, 230, 113); color:darkblue;\"> Add Products</button></a></h1>\r\n\r\n            <table border=\"1\" style=\"padding-left: 200px; background-color: black; color: deeppink; font-size: 26px;font-family: serif;font-style: italic;;\">\r\n                <tr>\r\n                    \r\n                   <!--<th>Id</th>--> \r\n                   <th>Image</th>\r\n                    <th>Name</th>\r\n                    <th>Price</th>\r\n                    <th>Quantity</th>\r\n                    <th>Sub Total</th>\r\n                    <th>Remove</th>\r\n                </tr>\r\n               \r\n                <tr *ngFor=\"let item of items\" >\r\n                 \r\n\r\n                 <td ><img src=\"../assets/img/{{item.product.photo}}\" style=\"width: 340px;height: 200px;\"></td>\r\n                    <td style=\"color:white\">{{item.product.name}}</td>\r\n                    <td>{{item.product.price}}</td>\r\n                    <td>{{item.quantity}}</td>\r\n                    <td>{{item.product.price * item.quantity}}</td>\r\n                    <td align=\"center\">\r\n                        <a (click)=\"remove(item.product.id)\"><button>Remove</button></a>\r\n                    </td>\r\n                </tr>\r\n            \r\n            </table>\r\n                <br>\r\n              \r\n                    <p style=\"font-size: 30px;color: deeppink;font-family: serif;\"><i>Your total Bill is -</i>\r\n                   <b>{{total}}</b></p>\r\n                   <div class='pm-button'><a href='https://www.payumoney.com/paybypayumoney/#/C652DF8C38919CE3EEFECB17A1D1EEF2'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png' /></a></div>  \r\n            </div>\r\n            <br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"jevada\"> \n  <br>\n    <h1 class=\"anime\">\n      SHOP FREAK\n    </h1>\n<div class=\"formq\">\n \n  <div class=\"sidenav\">\n    <div class=\"login-main-text\">\n       <br>\n       <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" class=\"brand_logo\" alt=\"Logo\">\n       <br>\n       <p>Use your <br>Registered E-mail to <br> Login</p>\n    </div>\n </div>\n        <form class=\"example-form\" (ngSubmit) = \"onAddPost(loginForm)\" #loginForm = \"ngForm\">\n          <div>\n            <br>\n            <h2>Login</h2>\n            <br>\n            <mat-form-field class=\"example-full-width\">\n              <mat-label class=\"klk\">Email</mat-label>\n              <input matInput type = \"email\" \n               placeholder=\"Enter your email\"\n              pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" required\n               #email = \"ngModel\" ngModel name = \"email\">\n               <mat-error *ngIf = \"email.invalid\">\n                <mat-error *ngIf=\"email.errors.required\">\n                 Please enter your email\n               </mat-error>\n               <mat-error *ngIf=\"email.errors.pattern\">\n                 Please enter valid email\n               </mat-error>\n               </mat-error>\n               </mat-form-field>\n          </div>\n          <br>\n          <div >\n            <mat-form-field class=\"example-full-width\">\n              <mat-label class=\"klk\">Password</mat-label>\n              <input matInput   type = \"password\" \n              placeholder=\"Password\"\n              pattern=\"^(?=^.{5,}$)((?=.*\\d)|(?=.*\\w+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" required showHideInput\n               #password = \"ngModel\" ngModel name = \"password\">\n               <mat-error *ngIf = \"password.invalid\">\n                <mat-error *ngIf=\"password.errors.required\">\n                 Please enter your password\n               </mat-error>\n               <mat-error *ngIf=\"password.errors.pattern\">\n                   Enter at least one UpperCase, one LowerCase, one Number/Special Character and minimum of 8 characters\n               </mat-error>\n             </mat-error>\n          </mat-form-field>\n          </div>\n          <br>\n          <div>\n           <button mat-raised-button color=\"warn\"   class=\"example-button-row\"  (click)=\"onLogin(loginForm)\">Log In</button> \n            <br>\n           <h2 class=\"nomem\"> Not a Member?</h2>\n            <button mat-raised-button color=\"primary\" class=\"example-button-row\"  routerLink=\"/sign\" >Register</button>\n          </div>\n        </form>\n      </div>\n\n\n</div> \n\n\n\n\n\n\n<!-- //decdc -->\n<!-- \n\t<div class=\"container h-100\">\n\t\t<div class=\"d-flex justify-content-center h-100\">\n\t\t\t<div class=\"user_card\">\n\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t<div class=\"brand_logo_container\">\n\t\t\t\t\t\t<img src=\"https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png\" class=\"brand_logo\" alt=\"Logo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-center form_container\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control input_user\" value=\"\" placeholder=\"username\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-group mb-2\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"password\" name=\"\" class=\"form-control input_pass\" value=\"\" placeholder=\"password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlInline\">\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customControlInline\">Remember me</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"d-flex justify-content-center mt-3 login_container\">\n\t\t\t\t \t<button type=\"button\" name=\"button\" class=\"btn login_btn\">Login</button>\n\t\t\t\t   </div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\t\tDon't have an account? <a href=\"#\" class=\"ml-2\">Sign Up</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\t\t<a href=\"#\">Forgot your password?</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n -->\n\n\n\n\n\n\n\n<!-- \n\n\n\n\n\n\n\n<div class=\"jevada\"> \n    <br>\n      <h1 class=\"anime\">\n        SHOP FREAK\n      </h1>\n  <div class=\"formq\">\n    <div  class=\"p-2 width-33\">\n    \n          <form class=\"example-form\" (ngSubmit) = \"onAddPost(loginForm)\" #loginForm = \"ngForm\">\n            <div>\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Email</mat-label>\n                <input matInput type = \"email\" \n                 placeholder=\"Enter your email\"\n                pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" required\n                 #email = \"ngModel\" ngModel name = \"email\">\n                 <mat-error *ngIf = \"email.invalid\">\n                  <mat-error *ngIf=\"email.errors.required\">\n                   Please enter your email\n                 </mat-error>\n                 <mat-error *ngIf=\"email.errors.pattern\">\n                   Please enter valid email\n                 </mat-error>\n                 </mat-error>\n                 </mat-form-field>\n            </div>\n            <br>\n            <div >\n              <mat-form-field class=\"example-full-width\">\n                <mat-label>Password</mat-label>\n                <input matInput   type = \"password\" \n                placeholder=\"Password\"\n                pattern=\"^(?=^.{5,}$)((?=.*\\d)|(?=.*\\w+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" required showHideInput\n                 #password = \"ngModel\" ngModel name = \"password\">\n                 <mat-error *ngIf = \"password.invalid\">\n                  <mat-error *ngIf=\"password.errors.required\">\n                   Please enter your password\n                 </mat-error>\n                 <mat-error *ngIf=\"password.errors.pattern\">\n                     Enter at least one UpperCase, one LowerCase, one Number/Special Character and minimum of 8 characters\n                 </mat-error>\n               </mat-error>\n            </mat-form-field>\n            </div>\n            <br>\n            <div>\n             <button mat-raised-button color=\"warn\"   class=\"example-button-row\"  (click)=\"onLogin(loginForm)\">Log In</button> <!--(click)=\"login()\"-->\n              <!-- <br>\n             <h2 class=\"nomem\"> Not a Member?</h2>\n              <button mat-raised-button color=\"primary\" class=\"example-button-row\"  routerLink=\"/sign\" >Register</button>\n            </div>\n          </form>\n        </div>\n    </div>\n \n</div>  -->\n  \n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mainpage/mainpage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainpage/mainpage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" />\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.4.1/css/all.css\">\n    <link href=\"https://fonts.googleapis.com/css?family=Flamenco\" rel=\"stylesheet\">\n</head>\n\n\n  \n        \n            \n            <div class=\"topnav\">\n              <a routerLink=\"/login\"> <img title=\"Logout\" [src]=myimage1 style=\"height: 52.8px;\"></a>\n              <!-- <a routerLink=\"/gameshow\"><img width=\"50px\" title=\"Enter for checking out information of any game\" [src]=myimage></a> -->\n            <a routerLink=\"/productdetails\" class=\"nav-link \">ProductDetails</a>\n            <a routerLink=\"/productregister\" class=\"nav-link \">ProductRegistration</a>\n            <a routerLink=\"/userdata\" class=\"nav-link \" >UserData</a>\n            <a routerLink=\"/sellproduct\" class=\"nav-link \">Used products</a>\n            </div>\n            \n            <!-- <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n              <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                  <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n                </div>\n                <ul class=\"nav navbar-nav\">\n                  <li class=\"active\"><a href=\"#\">Home</a></li>\n                  <li><a href=\"#\">Page 1</a></li>\n                  <li><a href=\"#\">Page 2</a></li>\n                  <li><a href=\"#\">Page 3</a></li>\n                </ul>\n              </div>\n            </nav>   -->\n            \n                      \n  <!-- <div class=\"sld\">\n    <slideshow [height]=\"300\"\n    [minHeight]=\"'200px'\"\n    [autoPlay]=\"true\"\n    [showArrows]=\"true\"\n    [showDots]=\"true\"\n    [imageUrls]=imageUrls\n    [disableSwiping]=false\n    [lazyLoad]=\"imageSources?.length > 1\"\n    [autoPlayWaitForLazyLoad]=\"true\">\n  </slideshow>\n\n  </div> -->\n\n  <div class=\"container hero-image\">\n    <img class=\"img-fluid\" src=\"../../assets/images/Banner.png\" alt=\"Banner Image\">\n    <!-- <button class=\"Banner-btn\" name=\"button\"><a href=\"#Face\" style=\"color: white\">Show Now</a></button> -->\n  </div>\n<br>\n  <div id=\"Face\" class=\"tabcontent\">\n    <div id=\"main-content\" class=\"container-fluid\" >\n      <div class=\"main-content\" style=\"margin: 10%; margin-top: 3%;margin-bottom: 3%;padding:1px 16px\">\n        <div class=\"row\"style=\"margin-top: 2%\">\n          <div class=\"col-sm-4\">\n            <!--https://ccsearch.creativecommons.org/photos/a6ce5b59-7761-4737-9e6d-b2fee895883f-->\n            <!-- <p style=\"font-size: 0.9rem;font-style: italic;\"><a href=\"https://www.behance.net/gallery/55046573/Cosmetic-Jar-Mockup\">\"Cosmetic Jar Mockup\"</a><span> by <span>Graphic Assets</span></span> is licensed under <a href=\"https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=ccsearch&atype=html\" style=\"margin-right: 5px;\">CC BY-NC-ND 4.0</a><a href=\"https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=ccsearch&atype=html\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;\"><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-nc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-nd_icon.svg\" /></a></p> -->\n            <img  class=\"img-thumbnail\" src=\".../../assets/images/universalCream.jpg\" alt=\"Universal Cream\" style= \"height:285px; width: 500px\">\n            <h6>Universal Face Cream</h6><h6>Rs 200</h6>\n            <!-- <button class=\"cart-item\" style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n          <div class=\"col-sm-4\">\n            <!--https://pixabay.com/photos/skin-care-of-baby-face-cream-liquid-827153/-->\n            <!-- Photo By qwer6695571\n            Accessed on - 5 May 2019 -->\n            <img class=\"img-thumbnail\" src=\".../../assets/images/silkyCream.jpg\" alt=\"Silky Cream\"  style= \"height:285px; width: 500px\">\n            <h6>iphone 11Pro</h6><h6>Rs 89,000</h6>\n            <!-- <button class=\"cart-item\" style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n          <div class=\"col-sm-4\">\n            <!--https://pixabay.com/illustrations/cream-jar-white-skin-care-1464295/-->\n            <!-- Photo by jniittymaa0\n            Accessed on 5 May 2019 -->\n            <img class=\"img-thumbnail\" src=\".../../assets/images/brownCream.png\" alt=\"Brown Cream\" style= \"height:285px; width: 500px\">\n              <h6>Brown Cream</h6><h6>Rs 220</h6>\n              <!-- <button class=\"cart-item\" style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <!--https://ccsearch.creativecommons.org/photos/5040ecd6-ae2b-48db-940c-1ad8a2740779-->\n            <!-- <p style=\"font-size: 0.9rem;font-style: italic;\"><a href=\"https://www.flickr.com/photos/72051149@N00/6840207874\">\"This helps me avoid sunburns during my runs. It works ;)\"</a><span>by <a href=\"https://www.flickr.com/photos/72051149@N00\">Ced</a></span> is licensed under <a href=\"https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html\" style=\"margin-right: 5px;\">CC BY-NC-SA 2.0</a><a href=\"https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;\"><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-nc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-sa_icon.svg\" /></a></p> -->\n            <img  class=\"img-thumbnail\" src=\".../../assets/images/sunnyCream.jpg\" alt=\"Sunny Cream\" style= \"height:285px; width: 500px\">\n            <h6>Denim Jacket</h6><h6>Rs 1500</h6>\n            <!-- <button class=\"cart-item\" style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n          <div class=\"col-sm-4\">\n            <!--https://ccsearch.creativecommons.org/photos/93767db9-c141-4260-ba07-6e1963ae364d-->\n            <!-- <p style=\"font-size: 0.9rem;font-style: italic;\"><a href=\"https://www.flickr.com/photos/92388598@N00/16333470001\">\"Foot cream\"</a><span>by <a href=\"https://www.flickr.com/photos/92388598@N00\">quimby</a></span> is licensed under <a href=\"https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html\" style=\"margin-right: 5px;\">CC BY-NC-SA 2.0</a><a href=\"https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;\"><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-nc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-sa_icon.svg\" /></a></p> -->\n            <img class=\"img-thumbnail\" src=\".../../assets/images/norweigenCream.jpg\" alt=\"Norweigen Cream\"  style= \"height:285px; width: 500px\">\n            <h6>Nike Air Jordan 1 </h6><h6>Rs 10,000</h6>\n           <!-- <button class=\"cart-item\" style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n          <div class=\"col-sm-4\">\n            <!--https://www.pexels.com/photo/2003755/-->\n            <!-- Photo by beata dudova\n            Accessed on 5 May 2019 -->\n            <img class=\"img-thumbnail\" src=\".../../assets/images/mixaCream.jpg\" alt=\"Mixa Cream\" style= \"height:285px; width: 500px\">\n              <h6>Mixa Cream</h6><h6>Rs 220</h6>\n             <!-- <button class=\"cart-item\"  style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <!--https://search.creativecommons.org/photos/b086de41-271d-4696-8769-0657de05d6e7-->\n            <!-- <p style=\"font-size: 0.9rem;font-style: italic;\"><a href=\"https://www.flickr.com/photos/125267949@N02/31043303794\">\"Planet Spa ladies' cosmetics\"</a><span>by <a href=\"https://www.flickr.com/photos/125267949@N02\">Albert Lugosi</a></span> is licensed under <a href=\"https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html\" style=\"margin-right: 5px;\">CC BY 2.0</a><a href=\"https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;\"><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://search.creativecommons.org/static/img/cc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://search.creativecommons.org/static/img/cc-by_icon.svg\" /></a></p> -->\n            <img  class=\"img-thumbnail\" src=\".../../assets/images/PlanetMask1.jpg\" alt=\"Planet Mask\" style= \"height:285px; width: 500px\">\n              <h6>Pollution Mask </h6><h6>Rs 250</h6>\n             <!-- <button class=\"cart-item\" style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n          <div class=\"col-sm-4\">\n            <!--https://search.creativecommons.org/photos/915e37c8-0fcb-4172-8c06-5c5d9b6d37c7-->\n            <!-- <p style=\"font-size: 0.9rem;font-style: italic;\"><a href=\"https://www.behance.net/gallery/55648403/Glossy-Cosmetic-Jar-Mockup-Front-View\">\"Glossy Cosmetic Jar Mockup - Front View\"</a><span> by <span>Amina Viktoriia Mona</span></span> is licensed under <a href=\"https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=ccsearch&atype=html\" style=\"margin-right: 5px;\">CC BY-NC-ND 4.0</a><a href=\"https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=ccsearch&atype=html\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;\"><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://search.creativecommons.org/static/img/cc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://search.creativecommons.org/static/img/cc-by_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://search.creativecommons.org/static/img/cc-nc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://search.creativecommons.org/static/img/cc-nd_icon.svg\" /></a></p> -->\n           <img class=\"img-thumbnail\" src=\".../../assets/images/YellowCream1.jpg\" alt=\"Yellow Cream\" style= \"height:285px; width: 500px\">\n            <h6>Yellow Face Cream</h6><h6>Rs 80</h6>\n           <!-- <button class=\"cart-item\" style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n\n          </div>\n          <div class=\"col-sm-4\">\n            <!--https://search.creativecommons.org/photos/2dd43c6a-ea52-47f7-8288-f39fef87b101-->\n            <!-- <p style=\"font-size: 0.9rem;font-style: italic;\"><a href=\"https://www.flickr.com/photos/15066506@N02/2290576209\">\"Blue Combo\"</a><span>by <a href=\"https://www.flickr.com/photos/15066506@N02\">-l.i.l.l.i.a.n-</a></span> is licensed under <a href=\"https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html\" style=\"margin-right: 5px;\">CC BY-SA 2.0</a><a href=\"https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;\"><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://search.creativecommons.org/static/img/cc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://search.creativecommons.org/static/img/cc-by_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://search.creativecommons.org/static/img/cc-sa_icon.svg\" /></a></p> -->\n           <img class=\"img-thumbnail\" src=\".../../assets/images/BlueCream.jpg\" alt=\"Blue Cream\" style= \"height:285px; width: 540px\">\n             <h6>Nike Dunks</h6><h6>Rs 12,000</h6>\n            <!-- <button class=\"cart-item\" style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <!--https://ccsearch.creativecommons.org/photos/452813ae-76c5-48de-ab8e-897641b2e7f3-->\n            <!-- <p style=\"font-size: 0.9rem;font-style: italic;\"><a href=\"https://www.behance.net/gallery/40687211/LUMINOUS-Beauty-Products\">\"LUMINOUS ~ Beauty Products\"</a><span>by <a href=\"https://www.behance.net/rajeevlalith\">rajeev lalith</a></span> is licensed under <a href=\"https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=ccsearch&atype=html\" style=\"margin-right: 5px;\">CC BY-NC-ND 4.0</a><a href=\"https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=ccsearch&atype=html\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;\"><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-nc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-nd_icon.svg\" /></a></p> -->\n            ><img  class=\"img-thumbnail\" src=\".../../assets/images/Luminous.jpg\" alt=\"Luminous Cream\" style= \"height:285px; width: 500px\">\n              <h6>Microwave</h6><h6>Rs 5,000</h6>\n             <!-- <button class=\"cart-item\"  style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n          <div class=\"col-sm-4\">\n            <!--https://ccsearch.creativecommons.org/photos/6eea775f-83a3-4005-ad2a-ca9e1e8312c8-->\n            <!-- <p style=\"font-size: 0.9rem;font-style: italic;\"><a href=\"https://www.flickr.com/photos/68481813@N02/13225008773\">\"Natural Cocoa Butter Cream\"</a><span>by <a href=\"https://www.flickr.com/photos/68481813@N02\">jubaby_22</a></span> is licensed under <a href=\"https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html\" style=\"margin-right: 5px;\">CC BY-SA 2.0</a><a href=\"https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;\"><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-sa_icon.svg\" /></a></p> -->\n           <img class=\"img-thumbnail\" src=\".../../assets/images/CocoaCream.jpg\" alt=\"Cocoa Cream\"  style= \"height:285px; width: 500px\">\n              <h6>Natural Cocoa Cream</h6><h6>Rs 320</h6>\n             <!-- <button class=\"cart-item\" style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n         \n          </div>\n          <div class=\"col-sm-4\">\n            <!--https://ccsearch.creativecommons.org/photos/9642d68a-bdc2-4a3a-b326-21647d8114a4-->\n            <!-- <p style=\"font-size: 0.9rem;font-style: italic;\"><a href=\"https://www.flickr.com/photos/80551686@N00/2497154032\">\"Schwartz Hand / Feet Cream\"</a><span>by <a href=\"https://www.flickr.com/photos/80551686@N00\">rustybrick</a></span> is licensed under <a href=\"https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html\" style=\"margin-right: 5px;\">CC BY-NC 2.0</a><a href=\"https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;\"><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-by_icon.svg\" /><img style=\"height: inherit;margin-right: 3px;display: inline-block;\" src=\"https://ccsearch.creativecommons.org/static/img/cc-nc_icon.svg\" /></a></p> -->\n           <img class=\"img-thumbnail\" src=\".../../assets/images/SCHWARTZ.jpg\" alt=\"SCHWARTZ Cream\" style= \"height:285px; width: 500px\">\n              <h6>Refridgerator</h6><h6>Rs 30,000</h6>\n              <!-- <button class=\"cart-item\"  style=\"font-size:15px\">Buy<i class=\"fa fa-shopping-cart\"></i></button> -->\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n  <br><br><br><br>\n  <div class=\"container-fluid text-center text-md-left mt-5\">\n    <!-- Grid row -->\n    <div class=\"row mt-3\">\n      <!-- Grid column -->\n      <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">\n        <!-- Content -->\n        <h5 class=\"text-uppercase font-weight-bold\">Shop Freak</h5>\n        <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 20px;\">\n        <p>Beauty is in the eyes of beholder :)</p>\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">\n        <!-- Links -->\n        <h5 class=\"text-uppercase font-weight-bold\">Products</h5>\n        <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n        <p>\n          <a href=\"#!\" class=\"nav-link2\">Face Cream</a>\n        </p>\n        <p>\n          <a href=\"#!\" class=\"nav-link2\">Lipstick</a>\n        </p>\n        <p>\n          <a href=\"#!\" class=\"nav-link2\">Nails</a>\n        </p>\n        <p>\n          <a href=\"#!\" class=\"nav-link2\" >Shampoo</a>\n        </p>\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">\n        <!-- Links -->\n        <h5 class=\"text-uppercase font-weight-bold\">Useful links</h5>\n        <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n        <p>\n          <a href=\"#!\" class=\"nav-link2\" >Your Account</a>\n        </p>\n        <p>\n          <a href=\"#!\" class=\"nav-link2\" >Become an Affiliate</a>\n        </p>\n        <p>\n          <a href=\"#!\" class=\"nav-link2\">Shipping Rates</a>\n        </p>\n        <p>\n          <a href=\"#!\" class=\"nav-link2\" >Help</a>\n        </p>\n      </div>\n      <!-- Grid column -->\n\n      <!-- Grid column -->\n      <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">\n        <!-- Links -->\n        <h5 class=\"text-uppercase font-weight-bold\">Contact</h5>\n        <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n        <p>\n          <i class=\"fas fa-home mr-3\"></i> Khanpur,Rajpura Town(140-401)</p>\n        <p>\n          <i class=\"fas fa-envelope mr-3\"></i> info@you-shopfreak.com</p>\n        <p>\n          <i class=\"fas fa-phone mr-3\"></i> + 31 31 31 31 31</p>\n        <p>\n          <i class=\"fas fa-print mr-3\"></i> + 31 31 1331 31</p>\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- <input type=\"text\" [(ngModel)]=\"gname\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"enter the name of the game\"> -->\n\n\n\n<br><br>\n<hr>\n  <footer> © 2019-2020 SHOP FREAK, Inc.</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productdetails/productdetails.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productdetails/productdetails.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<!-- \n  <div class=\"topnav\">\n    <a routerLink=\"/mainpage\"><img title=\"Back To MainPage\" [src]=myimage1 class=\"img\" style=\"padding-left: 20px;padding-top: 20px;height: 60px;\"></a>\n\n<button mat-raised-button color=\"silver\"  class=\"example-button-row\" (click)=\"showUsers()\" style=\" margin-left: 400px;padding: 10px;\">Show All products</button>\n<button mat-raised-button color=\"silver\"  class=\"example-button-row\" (click)=\"deleteUsers()\" style=\"margin: 10px; padding: 10px;\">Delete all products</button>\n<button mat-raised-button color=\"silver\"  class=\"example-button-row\" (click)=\"findbyna()\" style=\" margin:5px;padding: 10px;\">Show by product name</button>\n<button mat-raised-button color=\"silver\"  class=\"example-button-row\" (click)=\"delbyname()\" style=\"margin: 5px; padding: 10px;\">Delete by product name</button>\n<button mat-raised-button color=\"silver\"  class=\"example-button-row\" routerLink=\"/productregister\" style=\" margin:10px; padding: 10px;\">Add a new product</button>\n<button mat-raised-button color=\"silver\"  class=\"example-button-row\" routerLink=\"/cart\" style=\" padding: 10px;\">cart</button>\n<br> -->\n<!-- </div> --> \n\n\n<!-- <div class=\"d1\"> \n   <tr *ngFor=\"let u of product | async\" style=\"width: 300px;\">\n    <mat-card class=\"example1\">\n        <mat-card-title>{{u.name}}</mat-card-title>\n        <mat-card-content>\n          <br>\n          <p>Description : {{u.description}}</p>\n          <br>\n          <p>Price : {{u.price}}</p>\n        </mat-card-content>\n        \n        <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"cart1()\">Add to cart</button>\n         -->\n         <!-- <a [routerLink]=\"['/cart', { id:product.id }]\">Order</a> -->\n    <!-- </mat-card>\n    <br><br>\n</div>\n\n\n<div> \n <p style=\"color: white;\">{{name}}</p>\n <p *ngIf=\"flag2==1\">Deleted</p>\n</div>  -->\n<div style=\"background-color: black;\">\n<div class=\"navbar navbar-dark bg-dark\">\n  <a class=\"left\" routerLink=\"/mainpage\"><img title=\"Back To MainPage\" [src]=myimage1 style=\"height: 80px;padding-top: 2px;padding-left: 2px;\"></a>\n  <div>\n   <!-- <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"showUsers()\" style=\"padding: 10px;margin: 10px;\">Show all products</button> -->\n   <!-- <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"deleteAllProducts()\" style=\"padding: 10px;\">Delete all products</button>\n   <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"findbyName()\" style=\"padding: 10px;margin: 10px;\">Show by name</button>\n   <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"delbyname()\" style=\"padding: 10px;\">Delete by name</button>\n   <button mat-raised-button color=\"warn\"  class=\"example-button-row\" routerLink=\"/productregister\" style=\"padding: 10px;margin: 10px;\">Add a new product</button> -->\n   <!-- <a [routerLink]=\"['/cart']\" style=\"padding-left: 70px;\"><button style=\"background-color: rgb(113, 230, 113); color:darkblue;\">Your Cart</button></a> -->\n   <!-- <button style=\"background-color: rgb(113, 230, 113); color:darkblue;\"><a [routerLink]=\"['/cart']\" style=\"padding-left: 70px;\">Your Cart</a></button> -->\n   <br>\n  </div>\n  </div>\n\n\n    \n  <!-- <h1 style=\"color: deeppink; font-family: serif;font-style: italic; padding-left: 90px;  text-align: center;\">\n      <a [routerLink]=\"['/cart']\" style=\"padding-left: 70px;\">\n      <button style=\"background-color: rgb(113, 230, 113); color:darkblue;\">Your Cart</button></a></h1>\n      <button mat-raised-button color=\"silver\"  class=\"example-button-row\" (click)=\"showUsers()\" style=\" margin-left: 400px;padding: 10px;\">Show All products</button> -->\n  \n<!-- \n  <table border=\"1\" style=\"padding-left: 200px; color: deeppink; font-size: 26px;font-family: serif;font-style: italic;;\">\n  <tr>\n      <td align=\"center\">SNO.</td>\n      <td align=\"center\">Image</td>\n      <td align=\"center\">Item Name</td>\n      <td align=\"center\">Price($)</td> \n      <td align=\"center\">Order</td>\n  </tr>\n   <tr *ngFor=\"let product of products\">\n    <td align=\"center\">{{product.id}}</td>\n      <td align=\"center\">{{product.name}}</td>\n      <td><img src=\"../../assets/img/{{product.photo}} \" style=\"width: 340px;height: 200px;\"></td>\n      <td align=\"center\">{{product.description}}</td>\n      <td align=\"center\">{{product.price}}</td>\n      \n      <td>\n          <a [routerLink]=\"['/cart', { id:product.id }]\">Order</a>\n      </td> -->\n      <div class=\"d1\" class=\"d1 d-flex align-content-start flex-wrap m-5\"> \n        <tr class=\"m-5\" *ngFor=\"let product of products \">\n         <mat-card class=\"example1\">\n             <mat-card-title>{{product.name}}</mat-card-title>\n             <mat-card-content>\n               <br>\n               <p>Description : {{product.description}}</p>\n               <br>\n               <p>Price : {{product.price}}</p>\n               <br>\n               <img src=\"../../assets/img/{{product.photo}} \" style=\"width: 340px;height: 200px;\">\n             </mat-card-content>\n             <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"cart1(product.id)\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to cart</a></button>\n         </mat-card>\n         <br><br>\n     </div>\n \n    <!-- <div class=\"d1\" class=\"d1 d-flex align-content-start flex-wrap m-5\"> \n      <tr class=\"m-5\" *ngFor=\"let u of product | async\" style=\"width: 300px;\">\n       <mat-card class=\"example1\">\n           <mat-card-title>{{u.name}}</mat-card-title>\n           <mat-card-content>\n             <br>\n             <p>Description : {{u.description}}</p>\n             <br>\n             <p>Price : {{u.price}}</p>{{u.id}}\n           </mat-card-content>\n           <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"cart1(u.id)\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to cart</a></button>\n       </mat-card>\n       <br><br>\n       </tr>\n   </div> -->\n  <!-- </tr> -->\n  \n<br>\n\n<br>\n</div>\n\n<!-- <a [routerLink]=\"['/cart', { id:product.id }]\">Add to cart</a> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productregister/productregister.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productregister/productregister.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n \n  \n \n\n    <div class=\"div2\"> \n      \n      <h1 class=\"anime\">\n        SHOP <br>FREAK\n        <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" class=\"brand_logo\" alt=\"Logo\" routerLink=\"/mainpage\" title=\"Home\">\n      </h1>\n       \n      <div class=\"sidenav\">\n        <div class=\"login-main-text\">\n         \n           <br>\n           <h1 style=\"color:black\">Sell Your Product</h1>\n           <hr>\n           <p style=\"color:black\">fill the Details of your Product <br> to sell it Now !</p>\n        </div>\n   </div>\n      <hr>\n      <form class=\"example-form\" (ngSubmit) = \"onAddPost(signupForm)\" #signupForm = \"ngForm\">\n          <div style=\"color: black;\"><b>Product Name</b><br>\n          <mat-form-field class=\"example-full-width\">\n            <!-- <mat-label>Name</mat-label> -->\n            <input matInput minlength = \"4\"  type = \"text\" \n            required placeholder=\"Enter your product name\" \n            [(ngModel)]=\"product.name\" [ngModelOptions]=\"{standalone: true}\"\n             #name = \"ngModel\" ngModel name = \"name\">\n            <mat-error *ngIf = \"name.invalid\">\n             <mat-error *ngIf=\"name.errors.required\">\n              Please enter your name\n            </mat-error>\n            <mat-error *ngIf=\"name.errors.minlength\">\n                Name's length should at least be 4\n            </mat-error>\n          </mat-error>\n           </mat-form-field><br>\n          </div>\n          \n          \n          <div><b>Product Description</b><br>\n            <mat-form-field class=\"example-full-width\">\n              <!-- <mat-label>Name</mat-label> -->\n              <input matInput minlength = \"4\"  type = \"text\" \n              required placeholder=\"Enter your product description\"\n              [(ngModel)]=\"product.description\" [ngModelOptions]=\"{standalone: true}\"\n               #desc = \"ngModel\" ngModel name = \"desc\">\n              <mat-error *ngIf = \"desc.invalid\">\n               <mat-error *ngIf=\"desc.errors.required\">\n                Please enter your description\n              </mat-error>\n              <mat-error *ngIf=\"desc.errors.minlength\">\n                  Description's length should at least be 4\n              </mat-error>\n            </mat-error>\n             </mat-form-field><br>\n            </div>\n            \n            \n            <div><b>Product Price</b><br>\n                <mat-form-field class=\"example-full-width\">\n                  <!-- <mat-label>Name</mat-label> -->\n                  <input matInput minlength = \"4\"  type = \"text\" \n                  required placeholder=\"Enter your product name\"\n                  [(ngModel)]=\"product.price\" [ngModelOptions]=\"{standalone: true}\"\n                   #price = \"ngModel\" ngModel name = \"price\">\n                  <mat-error *ngIf = \"price.invalid\">\n                   <mat-error *ngIf=\"price.errors.required\">\n                    Please enter the price\n                  </mat-error>\n                  <mat-error *ngIf=\"price.errors.minlength\">\n                      Name's length should at least be 4\n                  </mat-error>\n                </mat-error>\n                 </mat-form-field><br>\n                </div>\n                \n                <div><b>Contact Number</b><br>\n                  <mat-form-field class=\"example-full-width\">\n  \n                    <input matInput minlength = \"10\"  type = \"text\" \n                    required placeholder=\"Enter your contact number\"\n                    [(ngModel)]=\"product.pnumber\" [ngModelOptions]=\"{standalone: true}\"\n                     #pnumber = \"ngModel\" ngModel name = \"pnumber\">\n                    <mat-error *ngIf = \"pnumber.invalid\">\n                     <mat-error *ngIf=\"pnumber.errors.required\">\n                      Please enter the phone number\n                    </mat-error>\n                    <mat-error *ngIf=\"pnumber.errors.minlength\">\n                        Name's length should at least be 10\n                    </mat-error>\n                  </mat-error>\n                   </mat-form-field><br>\n                  </div>\n                <br>\n           <div>\n            <button mat-raised-button color=\"warn\" class=\"example-button-row\" (click)=\"registerProcess()\">Register Product</button> \n      \n            <!-- <button mat-raised-button color=\"warn\" class=\"example-button-row\" routerLink=\"/mainpage\">Back to the main page</button>  -->\n           </div>\n      </form>\n    \n    \n    </div>\n    \n      <br><br>\n    <br>\n    <br>\n    \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellproduct/sellproduct.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellproduct/sellproduct.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n  <div class=\"topnav\">\n    <a routerLink=\"/mainpage\"><img title=\"Back To MainPage\" [src]=myimage1 class=\"img\" style=\"padding-left: 20px;padding-top: 20px;height: 60px;\"></a>\n\n<!-- <button mat-raised-button color=\"silver\"  class=\"example-button-row\" (click)=\"showUsers()\" style=\" margin-left: 400px;padding: 10px;\">Show All products</button> -->\n<button mat-raised-button color=\"silver\"  class=\"example-button-row\" (click)=\"deleteUsers()\" style=\"margin: 10px; padding: 10px;\">Delete all products</button>\n<!-- <button mat-raised-button color=\"silver\"  class=\"example-button-row\" (click)=\"findbyna()\" style=\" margin:5px;padding: 10px;\">Show by product name</button> -->\n<button mat-raised-button color=\"silver\"  class=\"example-button-row\" (click)=\"delbyname()\" style=\"margin: 5px; padding: 10px;\">Delete by product name</button>\n<button mat-raised-button color=\"silver\"  class=\"example-button-row\" routerLink=\"/productregister\" style=\" margin:10px; padding: 10px;\">Add a new product</button>\n<!-- <button mat-raised-button color=\"silver\"  class=\"example-button-row\" routerLink=\"/cart\" style=\" padding: 10px;\">cart</button> -->\n<br>\n</div>\n\n\n<!-- <div class=\"d1\"> \n   <tr *ngFor=\"let u of product | async\" style=\"width: 300px;\">\n    <mat-card class=\"example1\">\n        <mat-card-title>{{u.name}}</mat-card-title>\n        <mat-card-content>\n          <br>\n          <p>Description : {{u.description}}</p>\n          <br>\n          <p>Price : {{u.price}}</p>\n          <p>Number: {{u.number}}</p>\n        </mat-card-content>\n        <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"cart1()\">Add to cart</button>\n    </mat-card>\n    <br><br>\n</div> -->\n\n<div class=\"d1\" class=\"d1 d-flex align-content-start flex-wrap m-5\"> \n    <tr class=\"m-5\" *ngFor=\"let u of product | async\" style=\"width: 300px;\">\n     <mat-card class=\"example1\">\n         <mat-card-title>{{u.name}}</mat-card-title>\n         <mat-card-content>\n           <br>\n           <p>Description : {{u.description}}</p>\n           <br>\n           <p>Price : {{u.price}}</p>\n           <p style=\"background-color:red;color: black;text-align: center;font-family: 'Courier New', Courier, monospace;font-weight: bold;\">Number: {{u.number}}</p>\n         </mat-card-content>\n         <!-- <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"cart1(u.id)\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to cart</a></button> -->\n     </mat-card>\n     <br><br>\n     </tr>\n </div>\n\n\n<div> \n <p style=\"color: white;\">{{name}}</p>\n <p *ngIf=\"flag2==1\">Deleted</p>\n</div> \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  \n <div class=\"div1 row\">\n    <div class=\"col\">\n    \n    </div>\n    <div class=\"col2\">  \n      <div> <h1 style=\"color:black\">Sign Up</h1>\n        <p style=\"color:black\">Please fill in this form to create an account.</p>\n      </div>\n      <hr>\n      <form class=\"example-form\" (ngSubmit) = \"onAddPost(signupForm)\" #signupForm = \"ngForm\">\n          <div>\n            <b>Username</b><br>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput minlength = \"4\"  type = \"text\" \n            required placeholder=\"Enter your username\"\n            [(ngModel)]=\"user.firstName\" [ngModelOptions]=\"{standalone: true}\"\n             #name = \"ngModel\" ngModel name = \"name\">\n            <mat-error *ngIf = \"name.invalid\">\n             <mat-error *ngIf=\"name.errors.required\">\n              Please enter your name\n            </mat-error>\n            <mat-error *ngIf=\"name.errors.minlength\">\n                Name's length should at least be 4\n            </mat-error>\n          </mat-error>\n           </mat-form-field><br>\n          </div>\n          <div>\n            <b>Age</b><br>\n          <mat-form-field class=\"example-full-width\">\n      \n            <input matInput maxlength = \"2\"  type = \"text\" \n           placeholder=\"Enter your age\"\n            [(ngModel)]=\"user.age\" [ngModelOptions]=\"{standalone: true}\"\n             #age = \"ngModel\" ngModel name = \"age\"   required>\n             <mat-error *ngIf = \"age.invalid\">\n              <mat-error *ngIf=\"age.errors.required\">\n                Please enter your age\n              </mat-error>\n             <mat-error *ngIf=\"age.errors.maxlength\">\n                 Age's maximum length should not be more than 2\n             </mat-error>\n           </mat-error>\n           </mat-form-field><br>\n          </div>\n          <div>\n            <b>Email</b><br>\n            <mat-form-field class=\"example-full-width\">\n      \n              <input matInput minlength = \"10\"  type = \"email\" \n               placeholder=\"Enter your email\"\n              pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" required\n              [(ngModel)]=\"user.eMail\" [ngModelOptions]=\"{standalone: true}\"\n               #email = \"ngModel\" ngModel name = \"email\">\n               <mat-error *ngIf = \"email.invalid\">\n                <mat-error *ngIf=\"email.errors.required\">\n                 Please enter your email\n               </mat-error>\n               <mat-error *ngIf=\"email.errors.pattern\">\n                 Please enter valid email\n               </mat-error>\n               </mat-error>\n               </mat-form-field>\n          </div>\n          <div>\n            <b>Contact Number</b><br>\n           <mat-form-field class=\"example-full-width\">\n            \n             <input matInput minlength = \"10\" maxlength=\"10\"  type = \"text\" \n             required placeholder=\"Enter your number\"\n             [(ngModel)]=\"user.number\" [ngModelOptions]=\"{standalone: true}\"\n              #mnum = \"ngModel\" ngModel name = \"mnum\">\n              <mat-error *ngIf = \"mnum.invalid\">\n                <mat-error *ngIf=\"mnum.errors.required\">\n                 Please enter your number\n               </mat-error>\n               <mat-error *ngIf=\"mnum.errors.minlength\">\n                  Number's length should at least be 10\n               </mat-error>\n             </mat-error>\n            </mat-form-field><br>\n           </div>\n          <div>\n            <b>Password</b><br>\n           <mat-form-field>\n         \n            <input matInput minlength = \"5\"  type = \"password\" \n             placeholder=\"Enter your password\"\n             pattern=\"^(?=^.{8,}$)((?=.*\\d)|(?=.*\\w+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" required showHideInput\n            [(ngModel)]=\"user.password\" [ngModelOptions]=\"{standalone: true}\"\n             #password = \"ngModel\" ngModel name = \"password\">\n             <mat-error *ngIf = \"password.invalid\">\n              <mat-error *ngIf=\"password.errors.required\">\n               Please enter your password\n             </mat-error>\n             <mat-error *ngIf=\"password.errors.minlength\">\n                 Enter at least one UpperCase, one LowerCase, one Number/Special Character and minimum of 8 characters\n             </mat-error>\n           </mat-error>\n           </mat-form-field><br/><br/><br/>\n          </div>\n           <div>\n            <button mat-raised-button color=\"warn\" class=\"example-button-row\" (click)=\"registerProcess()\">Sign up</button> \n           </div>\n      </form>\n    \n    </div>\n    \n      <br><br>\n    <br>\n    <br>\n    \n</div>\n -->\n \n\n <head>\n <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n <style>\n * {\n   box-sizing: border-box;\n }\n </style>\n </head>\n\n \n\n <br>\n <h1 class=\"anime\">\n   SHOP <br>FREAK\n   <img src=\"https://image.ibb.co/n7oTvU/logo_white.png\" class=\"brand_logo\" alt=\"Logo\">\n </h1>\n\n\n  <div class=\"formq\">\n\n    <div class=\"sidenav\">\n     <div class=\"login-main-text\">\n        <br>\n        <h1 style=\"color:black\">Sign Up</h1>\n        <hr>\n        <br>\n        <br>\n        <p style=\"color:black\">fill the form to<br> create an account.</p>\n  \n        <p>You are  only <br> few steps away from creating your <br> Account </p>\n     </div>\n\n\n\n    </div>\n    <div class=\"column\">\n   \n      <div class=\"div1 row\">\n         <div class=\"col\">\n         \n         </div>\n         <div class=\"col2\">  \n\n           <hr>\n           <form class=\"example-form\" (ngSubmit) = \"onAddPost(signupForm)\" #signupForm = \"ngForm\">\n               <div>\n                 <b class=\"pp\">Username</b><br>\n               <mat-form-field class=\"example-full-width\">\n                 <!-- <mat-label>Name</mat-label> -->\n                 <input matInput minlength = \"4\"  type = \"text\" \n                 required placeholder=\"Enter your username\"\n                 [(ngModel)]=\"user.firstName\" [ngModelOptions]=\"{standalone: true}\"\n                  #name = \"ngModel\" ngModel name = \"name\">\n                 <mat-error *ngIf = \"name.invalid\">\n                  <mat-error *ngIf=\"name.errors.required\">\n                   Please enter your name\n                 </mat-error>\n                 <mat-error *ngIf=\"name.errors.minlength\">\n                     Name's length should at least be 4\n                 </mat-error>\n               </mat-error>\n                </mat-form-field><br>\n               </div>\n               <br>\n               <div>\n                 <b class=\"pp\">Age</b><br>\n               <mat-form-field class=\"example-full-width\">\n                 <!-- <mat-label>Age</mat-label> -->\n                 <input matInput maxlength = \"2\"  type = \"text\" \n                placeholder=\"Enter your age\"\n                 [(ngModel)]=\"user.age\" [ngModelOptions]=\"{standalone: true}\"\n                  #age = \"ngModel\" ngModel name = \"age\"   required>\n                  <mat-error *ngIf = \"age.invalid\">\n                   <mat-error *ngIf=\"age.errors.required\">\n                     Please enter your age\n                   </mat-error>\n                  <mat-error *ngIf=\"age.errors.maxlength\">\n                      Age's maximum length should not be more than 2\n                  </mat-error>\n                </mat-error>\n                </mat-form-field><br>\n               </div>\n               <br>\n               <div>\n                 <b class=\"pp\">Email</b><br>\n                 <mat-form-field class=\"example-full-width\">\n                   <!-- <mat-label>Email</mat-label> -->\n                   <input matInput minlength = \"10\"  type = \"email\" \n                    placeholder=\"Enter your email\"\n                   pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" required\n                   [(ngModel)]=\"user.eMail\" [ngModelOptions]=\"{standalone: true}\"\n                    #email = \"ngModel\" ngModel name = \"email\">\n                    <mat-error *ngIf = \"email.invalid\">\n                     <mat-error *ngIf=\"email.errors.required\">\n                      Please enter your email\n                    </mat-error>\n                    <mat-error *ngIf=\"email.errors.pattern\">\n                      Please enter valid email\n                    </mat-error>\n                    </mat-error>\n                    </mat-form-field>\n               </div>\n               <br>\n               <div>\n                 <b class=\"pp\">Contact Number</b><br>\n                <mat-form-field class=\"example-full-width\">\n                 <!-- <mat-label>Contact Number</mat-label> -->\n                  <input matInput minlength = \"10\" maxlength=\"10\"  type = \"text\" \n                  required placeholder=\"Enter your number\"\n                  [(ngModel)]=\"user.number\" [ngModelOptions]=\"{standalone: true}\"\n                   #mnum = \"ngModel\" ngModel name = \"mnum\">\n                   <mat-error *ngIf = \"mnum.invalid\">\n                     <mat-error *ngIf=\"mnum.errors.required\">\n                      Please enter your number\n                    </mat-error>\n                    <mat-error *ngIf=\"mnum.errors.minlength\">\n                       Number's length should at least be 10\n                    </mat-error>\n                  </mat-error>\n                 </mat-form-field><br>\n                </div>\n                <br>\n               <div>\n                 <b class=\"pp\">Password</b><br>\n                <mat-form-field>\n                 <!-- <mat-label>Password</mat-label> -->\n                 <input matInput minlength = \"5\"  type = \"password\" \n                  placeholder=\"Enter your password\"\n                  pattern=\"^(?=^.{8,}$)((?=.*\\d)|(?=.*\\w+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$\" required showHideInput\n                 [(ngModel)]=\"user.password\" [ngModelOptions]=\"{standalone: true}\"\n                  #password = \"ngModel\" ngModel name = \"password\">\n                  <mat-error *ngIf = \"password.invalid\">\n                   <mat-error *ngIf=\"password.errors.required\">\n                    Please enter your password\n                  </mat-error>\n                  <mat-error *ngIf=\"password.errors.minlength\">\n                      Enter at least one UpperCase, one LowerCase, one Number/Special Character and minimum of 8 characters\n                  </mat-error>\n                </mat-error>\n                </mat-form-field><br/><br/><br/>\n               </div>\n                <div>\n                 <button mat-raised-button color=\"warn\" class=\"example-button-row\" (click)=\"registerProcess()\">Sign up</button> \n                </div>\n           </form>\n         \n         </div>\n         \n           <br><br>\n         <br>\n         <br>\n         \n     </div>\n     \n       </div>\n  </div>\n\n  \n\n\n \n\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userdata/userdata.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userdata/userdata.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: black;\">\n  <div class=\"navbar navbar-dark bg-dark\">\n<a class=\"left\" routerLink=\"/mainpage\"><img title=\"Back To MainPage\" [src]=myimage1 style=\"height: 80px;padding-top: 2px;padding-left: 1px;\"></a>\n<div>\n <!-- <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"showUsers()\" style=\"padding: 10px;margin: 10px;\">Show all users</button> -->\n <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"deleteUsers()\" style=\"padding: 10px;\">Delete all users</button>\n <!-- <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"findbyna()\" style=\"padding: 10px;margin: 10px;\">Show by name</button> -->\n <button mat-raised-button color=\"warn\"  class=\"example-button-row\" (click)=\"delbyname()\" style=\"padding: 10px;margin-left: 10px;\">Delete by user</button>\n <button mat-raised-button color=\"warn\"  class=\"example-button-row\" routerLink=\"/sign\" style=\"padding: 10px;margin: 10px;\">Create a new user</button>\n <br>\n</div>\n</div>\n<hr>\n<div class=\"d1\"> \n<table class=\"table table-striped table-dark text-white\" align=\"center\">\n    <tr *ngIf=\"flag==1\">\n      <th ><font size=\"20px\">Name</font></th>\n      <th ><font size=\"20px\">Email</font></th>\n      <th ><font size=\"20px\">Age</font></th>\n      <th ><font size=\"20px\">Number</font></th>\n    </tr>\n    <tr *ngFor=\"let u of user | async\" style=\"width: 300px;\">\n      <td ><font size=\"20px\">{{u.firstName}}</font></td>\n      <td ><font size=\"20px\">{{u.eMail}}</font></td>\n      <td ><font size=\"20px\">{{u.age}}</font></td>\n      <td ><font size=\"20px\">{{u.number}}</font></td>\n      </tr>\n      <tr *ngIf=\"message!=null\">\n        <td><font size=\"20px\">{{message.firstName}}</font></td>\n        <td><font size=\"20px\">{{message.eMail}}</font></td>\n        <td><font size=\"20px\">{{message.age}}</font></td>\n        <td><font size=\"20px\">{{message.number}}</font></td>\n      </tr>\n  </table>\n  <p style=\"color: white;\">{{name}}</p>\n  <p *ngIf=\"flag2==1\">Deleted</p>\n</div> \n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-route.ts":
/*!******************************!*\
  !*** ./src/app/app-route.ts ***!
  \******************************/
/*! exports provided: Main_routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main_routes", function() { return Main_routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userdata/userdata.component */ "./src/app/userdata/userdata.component.ts");
/* harmony import */ var _productregister_productregister_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productregister/productregister.component */ "./src/app/productregister/productregister.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _sellproduct_sellproduct_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sellproduct/sellproduct.component */ "./src/app/sellproduct/sellproduct.component.ts");









const Main_routes = [
    { path: 'mainpage', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_1__["MainpageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'sign', component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_3__["SignComponent"] },
    { path: 'userdata', component: _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_4__["UserdataComponent"] },
    { path: 'productregister', component: _productregister_productregister_component__WEBPACK_IMPORTED_MODULE_5__["ProductregisterComponent"] },
    { path: 'productdetails', component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_6__["ProductdetailsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
    { path: 'sellproduct', component: _sellproduct_sellproduct_component__WEBPACK_IMPORTED_MODULE_8__["SellproductComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/app-service.service.ts ***!
  \****************************************/
/*! exports provided: AppServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServiceService", function() { return AppServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppServiceService = class AppServiceService {
    constructor() { }
    isLoggedIn(bool) {
        sessionStorage.setItem('auth', String(bool));
        return bool;
    }
    checkLogin() {
        const auth = sessionStorage.getItem('auth');
        return JSON.parse(auth);
    }
};
AppServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppServiceService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'e-commerce1';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-route */ "./src/app/app-route.ts");
/* harmony import */ var _app_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-service.service */ "./src/app/app-service.service.ts");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userdata/userdata.component */ "./src/app/userdata/userdata.component.ts");
/* harmony import */ var _productregister_productregister_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./productregister/productregister.component */ "./src/app/productregister/productregister.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _servicess_product_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./servicess/product.service */ "./src/app/servicess/product.service.ts");
/* harmony import */ var _sellproduct_sellproduct_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sellproduct/sellproduct.component */ "./src/app/sellproduct/sellproduct.component.ts");



























//  import { EntitiesComponent } from './entities/entities.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__["MainpageComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _sign_sign_component__WEBPACK_IMPORTED_MODULE_11__["SignComponent"],
            _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_17__["UserdataComponent"],
            _productregister_productregister_component__WEBPACK_IMPORTED_MODULE_18__["ProductregisterComponent"],
            _sellproduct_sellproduct_component__WEBPACK_IMPORTED_MODULE_22__["SellproductComponent"],
            _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_19__["ProductdetailsComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_20__["CartComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_13__["Main_routes"]),
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_9__["SlideshowModule"]
        ],
        providers: [_app_service_service__WEBPACK_IMPORTED_MODULE_14__["AppServiceService"], _user_registration_service__WEBPACK_IMPORTED_MODULE_15__["UserRegistrationService"], _app_service_service__WEBPACK_IMPORTED_MODULE_14__["AppServiceService"], _servicess_product_service__WEBPACK_IMPORTED_MODULE_21__["ProductService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicess_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicess/product.service */ "./src/app/servicess/product.service.ts");
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// import { Product } from '../entities/product.entity';
// import { Item } from '../entities/item.entity';
// import { ProductService } from '../servicess/product.service';
// @Component({
// 	templateUrl: './cart.component.html'
// })
// export class CartComponent implements OnInit {
// 	private items: Item[] = [];
// 	private total: number = 0;
// 	constructor(
// 		private activatedRoute: ActivatedRoute,
// 		private productService: ProductService
// 	) { }
// 	ngOnInit() {
// 		this.activatedRoute.params.subscribe(params => {
// 			var id = params['id'];
// 			if (id) {
// 				var item: Item = {
// 					product: this.productService.find(id),
// 					quantity: 1
// 				};
// 				if (localStorage.getItem('cart') == null) {
// 					let cart: any = [];
// 					cart.push(JSON.stringify(item));
// 					localStorage.setItem('cart', JSON.stringify(cart));
// 				} else {
// 					let cart: any = JSON.parse(localStorage.getItem('cart'));
// 					let index: number = -1;
// 					for (var i = 0; i < cart.length; i++) {
// 						let item: Item = JSON.parse(cart[i]);
// 						if (item.product.id == id) {
// 							index = i;
// 							break;
// 						}
// 					}
// 					if (index == -1) {
// 						cart.push(JSON.stringify(item));
// 						localStorage.setItem('cart', JSON.stringify(cart));
// 					} else {
// 						let item: Item = JSON.parse(cart[index]);
// 						item.quantity += 1;
// 						cart[index] = JSON.stringify(item);
// 						localStorage.setItem("cart", JSON.stringify(cart));
// 					}
// 				}
// 				this.loadCart();
// 			} else {
// 				this.loadCart();
// 			}
// 		});
// 	}
// 	loadCart(): void {
// 		this.total = 0;
// 		this.items = [];
// 		let cart = JSON.parse(localStorage.getItem('cart'));
// 		for (var i = 0; i < cart.length; i++) {
// 			let item = JSON.parse(cart[i]);
// 			this.items.push({
// 				product: item.product,
// 				quantity: item.quantity
// 			});
// 			this.total += item.product.price * item.quantity;
// 		}
// 	}
// 	remove(id: string): void {
// 		let cart: any = JSON.parse(localStorage.getItem('cart'));
// 		let index: number = -1;
// 		for (var i = 0; i < cart.length; i++) {
// 			let item: Item = JSON.parse(cart[i]);
// 			if (item.product.id == id) {
// 				cart.splice(i, 1);
// 				break;
// 			}
// 		}
// 		localStorage.setItem("cart", JSON.stringify(cart));
// 		this.loadCart();
// 	}
// }



let CartComponent = class CartComponent {
    constructor(activatedRoute, productService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.items = [];
        this.total = 0;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            var id = params['id'];
            if (id) {
                var item = {
                    product: this.productService.find(id),
                    quantity: 1
                };
                // console.log(item.product);
                if (localStorage.getItem('cart') == null) {
                    console.log("hello");
                    let cart = [];
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    console.log(item.product.id);
                    let cart = JSON.parse(localStorage.getItem('cart'));
                    let index = -1;
                    for (var i = 0; i < cart.length; i++) {
                        // console.log(item.product);
                        let Item = JSON.parse(cart[i]);
                        if (item.product.id == id) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        cart.push(JSON.stringify(item));
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                    else {
                        let item = JSON.parse(cart[index]);
                        item.quantity += 1;
                        cart[index] = JSON.stringify(item);
                        localStorage.setItem("cart", JSON.stringify(cart));
                    }
                }
                this.loadCart();
            }
            else {
                this.loadCart();
            }
        });
    }
    loadCart() {
        this.total = 0;
        this.items = [];
        this.activatedRoute.params.subscribe((params) => {
            var id = params['id'];
            if (id) {
                var item = {
                    product: this.productService.find(id),
                    quantity: 1
                };
            }
            console.log(item.product);
            let cart = JSON.parse(localStorage.getItem('cart'));
            for (var i = 0; i < cart.length; i++) {
                let Item = JSON.parse(cart[i]);
                console.log(item.product);
                this.items.push({
                    product: item.product,
                    quantity: item.quantity
                });
                this.total += item.product.price * item.quantity;
            }
        });
    }
    remove(id) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let index = -1;
        this.activatedRoute.params.subscribe((params) => {
            var id = params['id'];
            if (id) {
                var item = {
                    product: this.productService.find(id),
                    quantity: 1
                };
            }
            for (var i = 0; i < cart.length; i++) {
                let Item = JSON.parse(cart[i]);
                if (item.product.id == id) {
                    cart.splice(i, 1);
                    break;
                }
            }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        this.loadCart();
    }
};
CartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _servicess_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default
    })
], CartComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n   \n  }\n  .example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n  .example-full-width {\n    width: 100%;\n  }\n  .hmain{\n      color:white;\n      font-size:40px;\n  }\n  input[type=email] {\n    width: 100%;\n    box-sizing: border-box;\n    border: none;\n    color: white;\n  }\n  input[type=password] {\n    width: 100%;\n    box-sizing: border-box;\n    border: none;\n    color: pink;\n  }\n  .b1:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n  .formq{\n    display: flex;\n      justify-content: center;\n   \n      background: -webkit-linear-gradient(left,  #eed9d9, #eef1f1);\n      width: 60%;\n      height: 60%;\n      margin-left: 20%;\n margin-top: 1%;\n border-top-left-radius: 4.0rem;\n border-bottom-left-radius: 4.0rem;\n  }\n  .klk{\n    color: black;\n  }\n  .jevada{\n    /* background-image:url('src/assets/img/331BFD43-B7FD-4BF4-876E-436A7944AEC5.JPEG'); */\n    background-repeat: no-repeat;\n    background-size:1440px 900px;\n    height:50em;\n    width: auto;\n    background-color: black;\n  }\n  .example-button-row{\n    background-color: #00c6ff;\n  }\n  h1{ \n    font-size: 40px;\n    text-decoration: none;\n    color:white;\n    font-family:\"fantasy\";\n    text-align: center;\n}\n  h2{\n  text-align: center;\n  font-family: 'Kaushan Script', cursive;\n}\n  .sidenav {\n  height: 96%;\n  background: -webkit-linear-gradient(left,  #1143a6, #00c6ff);\n  overflow-x: hidden;\n  padding-top: 20px;\n padding-left: 0%;\n  /* padding-left: 5%; */\n  padding-right: 1%;\n color: rgb(20, 20, 19);\n  margin-right:7% ;\n  width: 35%;\n  height: 94%;\n  margin-left: 0%;\n  padding-left: 0%;\n  border-top-left-radius: 4.0rem;\n  border-bottom-left-radius: 4.0rem;\n  margin-top: 0.5%;\n  font-family: 'Kaushan Script', cursive;\n  text-align: center;\n  font-size: large;\n}\n  .brand_logo{\nwidth: 150px;\nmargin-left: 13%;\n/* background-image: url('src\\assets\\img\\496115.svg'); */\nbackground-repeat: no-repeat;\n\n}\n  .anime{\n    font-size: 90px;\n    text-align: center;\n    position: relative;\n    font-family:  'Andale Mono', monospace;\n     font-family: 'Lucida', sans-serif;\n    letter-spacing: 4px;\n    overflow: hidden;\n    background: -webkit-linear-gradient(left,  #1143a6, #00c6ff);\n    background-repeat: no-repeat;\n    background-size: 80%;\n -webkit-background-clip: text;\n    -webkit-text-fill-color: rgba(255, 255, 255, 0);\n\n    /* font-family: 'Kaushan Script', cursive; */\n}\n  @-webkit-keyframes animate {\n    0% {\n      background-position: -500%;\n    }\n    100% {\n      background-position: 500%;\n    }\n  }\n  @keyframes animate {\n    0% {\n      background-position: -500%;\n    }\n    100% {\n      background-position: 500%;\n    }\n  }\n  .nomem{\n      color:linear-gradient(to right,rgb(37, 148, 156) , rgb(248, 229, 229));\n      font-family: fantasy;\n      text-align: left;\n      font-size: 30px;\n      /* font-family: 'Kaushan Script', cursive; */\n     font-family:  'Andale Mono', monospace;\n  }\n  .width-33{\n    width:33.33%;\n    margin:4px;\n    padding:50px;\n    background-color: black;\n    height:300px;\n  }\n  \n  \n \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVzs7RUFFYjtFQUNBOztFQUVBLGlCQUFpQjtBQUNuQjtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBR0E7TUFDSSxXQUFXO01BQ1gsY0FBYztFQUNsQjtFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7SUFDVixRQUFRO0VBQ1Y7RUFDQTtJQUNFLGFBQWE7TUFDWCx1QkFBdUI7O01BRXZCLDREQUE0RDtNQUM1RCxVQUFVO01BQ1YsV0FBVztNQUNYLGdCQUFnQjtDQUNyQixjQUFjO0NBQ2QsOEJBQThCO0NBQzlCLGlDQUFpQztFQUNoQztFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzRkFBc0Y7SUFDdEYsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0NBQXNDO0FBQ3hDO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsNERBQTREO0VBQzVELGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEIsZ0JBQWdCO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtDQUNsQixzQkFBc0I7RUFDckIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtFQUNBO0FBQ0EsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQix3REFBd0Q7QUFDeEQsNEJBQTRCOztBQUU1QjtFQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsc0NBQXNDO0tBQ3JDLGlDQUFpQztJQUNsQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDREQUE0RDtJQUM1RCw0QkFBNEI7SUFDNUIsb0JBQW9CO0NBQ3ZCLDZCQUE2QjtJQUMxQiwrQ0FBK0M7O0lBRS9DLDRDQUE0QztBQUNoRDtFQUNBO0lBQ0k7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEY7SUFDSTtNQUNFLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7RUFDQTtNQUNJLHNFQUFzRTtNQUN0RSxvQkFBb0I7TUFDcEIsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZiw0Q0FBNEM7S0FDN0Msc0NBQXNDO0VBQ3pDO0VBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgXG4gIH1cbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG5cbiAgLmhtYWlue1xuICAgICAgY29sb3I6d2hpdGU7XG4gICAgICBmb250LXNpemU6NDBweDtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHBpbms7XG4gIH1cbiAgLmIxOmhvdmVyIHNwYW46YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmZvcm1xe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIFxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgICNlZWQ5ZDksICNlZWYxZjEpO1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIGhlaWdodDogNjAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiBtYXJnaW4tdG9wOiAxJTtcbiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0LjByZW07XG4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNC4wcmVtO1xuICB9XG4gIC5rbGt7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5qZXZhZGF7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTp1cmwoJ3NyYy9hc3NldHMvaW1nLzMzMUJGRDQzLUI3RkQtNEJGNC04NzZFLTQzNkE3OTQ0QUVDNS5KUEVHJyk7ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTQ0MHB4IDkwMHB4O1xuICAgIGhlaWdodDo1MGVtO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG4gIC5leGFtcGxlLWJ1dHRvbi1yb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzZmZjtcbiAgfVxuICBoMXsgXG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTpcImZhbnRhc3lcIjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcbn1cbi5zaWRlbmF2IHtcbiAgaGVpZ2h0OiA5NiU7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICAjMTE0M2E2LCAjMDBjNmZmKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiBwYWRkaW5nLWxlZnQ6IDAlO1xuICAvKiBwYWRkaW5nLWxlZnQ6IDUlOyAqL1xuICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiBjb2xvcjogcmdiKDIwLCAyMCwgMTkpO1xuICBtYXJnaW4tcmlnaHQ6NyUgO1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDk0JTtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICBwYWRkaW5nLWxlZnQ6IDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0LjByZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQuMHJlbTtcbiAgbWFyZ2luLXRvcDogMC41JTtcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5icmFuZF9sb2dve1xud2lkdGg6IDE1MHB4O1xubWFyZ2luLWxlZnQ6IDEzJTtcbi8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjXFxhc3NldHNcXGltZ1xcNDk2MTE1LnN2ZycpOyAqL1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxufVxuLmFuaW1le1xuICAgIGZvbnQtc2l6ZTogOTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiAgJ0FuZGFsZSBNb25vJywgbW9ub3NwYWNlO1xuICAgICBmb250LWZhbWlseTogJ0x1Y2lkYScsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICAjMTE0M2E2LCAjMDBjNmZmKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuXG4gICAgLyogZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7ICovXG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01MDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwMCU7XG4gICAgfVxuICB9XG4gIC5ub21lbXtcbiAgICAgIGNvbG9yOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2IoMzcsIDE0OCwgMTU2KSAsIHJnYigyNDgsIDIyOSwgMjI5KSk7XG4gICAgICBmb250LWZhbWlseTogZmFudGFzeTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAvKiBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTsgKi9cbiAgICAgZm9udC1mYW1pbHk6ICAnQW5kYWxlIE1vbm8nLCBtb25vc3BhY2U7XG4gIH1cbiAgLndpZHRoLTMze1xuICAgIHdpZHRoOjMzLjMzJTtcbiAgICBtYXJnaW46NHB4O1xuICAgIHBhZGRpbmc6NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6MzAwcHg7XG4gIH1cbiAgXG4gIFxuIFxuICAiXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");


//import {AuthenticationService} from '../authentication.service';


//import {AppServiceService} from '../app-service.service';
let LoginComponent = class LoginComponent {
    //myimage14: string=" /Users/simrandeepsingh/Downloads/a6375506-fcd4-4856-a9c4-083765b11600-5db7a15aa2285-760x400.jpeg";
    constructor(router, service) {
        this.router = router;
        this.service = service;
        let response = this.service.userData();
        response.subscribe((data) => this.credentials = data);
    }
    ngOnInit() {
    }
    onAddPost(form) {
        if (form.invalid) {
            console.log("Invalid");
            return;
        }
        const post = { pssword: form.value.password, email_id: form.value.email };
        console.log(post);
    }
    onLogin(form) {
        let flag = true;
        let email = form.value.email;
        let password = form.value.password;
        // console.log(email);
        // console.log(password);
        console.log(form.valid);
        for (let i in this.credentials) {
            if (email == this.credentials[i].eMail && password == this.credentials[i].password) {
                flag = false;
                this.router.navigateByUrl('mainpage');
            }
            else {
            }
        }
        if (flag == true) {
            alert("Invalid Credentials");
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img1 {\n    height:85vh;\n    max-width: 100%;\n\n  }\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n   \n  }\n  .example-full-width {\n    width: 100%;\n  }\n  h3\n  {\n   \n      font-family: fantasy;\n      font-size: 50px;\n      text-align: center;\n  }\n  footer{\n    font-size:30px;\n    display: block;\n    font-family: serif;\n    text-align: center;\n  }\n  img\n  {\n  float:left;\n  margin-top: -5px;\n  }\n  hr\n  {\n      margin-left : -50px;\n  }\n  .dualshock\n  {\n      float:right;\n      margin-top: -400px;\n      height: 575px;\n      width: 550px;\n  }\n  .Platform\n  {\n      font-size: 55px;\n      text-align:center;\n      margin-top: -40px;\n      font-family:\"fantasy\";\n     background: linear-gradient(to right, red , blue);\n         -webkit-text-fill-color: transparent;\n  }\n  .search{\n    width:40px;\n  }\n  input[type=text] {\n    width: 100%;\n    box-sizing: border-box;\n    border: none;\n    color: white;\n  }\n  input[type=button] {\n    background-color: #4CAF50;\n    border: none;\n    color: white;\n    padding: 16px 32px;\n    text-decoration: none;\n    margin: 4px 2px;\n    cursor: pointer;\n  }\n  .sld{\n    /* margin-left: 5%; */\n    width: 100%;\n    height: 100%;\n  }\n  #i1{\n    align-self: center;\n  }\n  .topnav {\n      overflow: hidden;\n      background-color: #333;\n    }\n  .topnav a {\n      float: right;\n      color: #f2f2f2;\n      text-align: center;\n      /* padding: 14px 16px; */\n      padding-left: 10px;\n      padding-right: 10px;\n      text-decoration: none;\n      font-size: 17px;\n    }\n  .topnav a:hover {\n      background-color: #ddd;\n      color: black;\n    }\n  .nav-link{\n      padding-top: 12px;\n      padding-bottom: 15px;\n    }\n  .card {\n      box-shadow: 0 4px 8px 0 rgb(46, 156, 219);\n      max-width: 300px;\n      margin: auto;\n      text-align: center;\n      font-family: arial;\n      background-color: rgb(61, 231, 70);\n    }\n  .price {\n      color: rgb(151, 19, 19);\n      font-size: 22px;\n    }\n  .card button {\n      border: none;\n      outline: 0;\n      padding: 12px;\n      color: white;\n      background-color: rgb(65, 167, 180);\n      text-align: center;\n      cursor: pointer;\n      width: 100%;\n      font-size: 18px;\n    }\n  .card button:hover {\n      opacity: 0.7;\n    }\n  * {box-sizing: border-box;}\n  body {\n      margin: 0;\n      font-family: Arial, Helvetica, sans-serif;\n      overflow-x: hidden;\n    \n    }\n  /* Header Styling */\n  .header{\n      background-color:#46466d;\n      height:100px;\n    }\n  .header>.text-center{\n      margin-bottom: 0;\n      padding: 20px;\n      font-style: oblique;\n      font-weight: bold;\n      color: white;\n    }\n  /* End of Header Styling */\n  /* Banner Styling */\n  .hero-image {\n      position:relative;\n      width: 100%;\n    }\n  /* .hero-image> .img-fluid{\n      opacity: 1;\n      transition: .5s ease;\n      backface-visibility: hidden;\n    }\n    .hero-image>.Banner-btn {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      background-color: #46466d;\n      color: white;\n      font-size: 26px;\n      padding: 24px 30px;\n      border: none;\n      cursor: pointer;\n      border-radius: 5px;\n      text-align: center;\n      opacity: 0;\n    } */\n  /* .hero-image:hover .img-fluid{\n      opacity: 0.5;\n    } */\n  /* .hero-image:hover .Banner-btn {\n      opacity: 1;\n    } */\n  /* End Of Styling */\n  /* Navbar Styling */\n  .navbar-nav{\n      float: right;\n      cursor: pointer;\n    }\n  #navbar{\n      background-color:#b1b1cd;\n    }\n  li {\n      margin-right: 30px;\n      float: left;\n    }\n  .nav-link{\n      color: purple;\n      font-weight: bolder;\n      font-size: 18px;\n    }\n  .nav-link2{\n      color: white;\n      font-weight: bolder;\n      font-size: 15px;\n    }\n  li :hover:not(.active) {\n      background-color:#46466d;\n      color: white;\n    }\n  /* End of Navbar Styling */\n  /* Cart Styling */\n  div#cart{\n      float: right;\n    }\n  .overlay {\n      height: 0%;\n      width: 100%;\n      position: fixed;\n      z-index: 1;\n      top: 0;\n      left: 0;\n      background-color: rgb(0,0,0);\n      background-color: rgba(0,0,0, 0.9);\n      overflow-y: hidden;\n      transition: 0.5s;\n    }\n  .overlay-content {\n      position: relative;\n      width: 100%;\n      text-align: center;\n      margin-top: 30px;\n    }\n  .overlay a {\n      padding: 8px;\n      text-decoration: none;\n      font-size: 36px;\n      color: #818181;\n      display: block;\n      transition: 0.3s;\n    }\n  .overlay a:hover, .overlay a:focus {\n      color: #f1f1f1;\n    }\n  .overlay .closebtn {\n      position: absolute;\n      top: 0px;\n      right: 45px;\n      font-size: 60px;\n    }\n  .closebtn{\n      padding: 0px;\n    }\n  .cart-item{\n      margin: auto;\n      display: block;\n    }\n  #cart-table{\n      border: 1px solid black;\n    }\n  /* End of Cart Styling */\n  /* Main Content Styling */\n  #main-content, div.main-content{\n        background-color: #e0e0eb;\n    }\n  .img-thumbnail{\n      border: 2px solid aqua;\n      text-align: center;\n      box-shadow: 0 4px 8px 0 rgb(46, 156, 219);\n    }\n  h6{\n      text-align: center;\n      color:black;\n      font-weight: bold;\n    }\n  h5{\n      color: aqua;\n      font-weight: bold;\n    }\n  /* End of Main Content Styling */\n  /* Footer Styling */\n  footer.jumbotron{\n      padding-bottom: 0;\n    }\n  #footer{\n      background-color: #46466d;\n      margin: 0;\n      color: white;\n    }\n  /* End of Footer Styling */\n  @media screen and (max-width: 820px) {\n      .header a{\n        float: none;\n        display: block;\n        text-align: center;\n      }\n    \n      .navbar-nav{\n        text-align: center;\n        float: none;\n      }\n      .header-right {\n        float: none;\n      }\n    }\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxlQUFlOztFQUVqQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXOztFQUViO0VBRUE7SUFDRSxXQUFXO0VBQ2I7RUFDQTs7O01BR0ksb0JBQW9CO01BQ3BCLGVBQWU7TUFDZixrQkFBa0I7RUFDdEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtFQUVBOztFQUVBLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEI7RUFHQTs7TUFFSSxtQkFBbUI7RUFDdkI7RUFDQTs7TUFFSSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixZQUFZO0VBQ2hCO0VBQ0E7O01BRUksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIscUJBQXFCO0tBRXRCLGlEQUFpRDtTQUM3QyxvQ0FBb0M7RUFDM0M7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBR0U7TUFDRSxnQkFBZ0I7TUFDaEIsc0JBQXNCO0lBQ3hCO0VBRUE7TUFDRSxZQUFZO01BQ1osY0FBYztNQUNkLGtCQUFrQjtNQUNsQix3QkFBd0I7TUFDeEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixxQkFBcUI7TUFDckIsZUFBZTtJQUNqQjtFQUVBO01BQ0Usc0JBQXNCO01BQ3RCLFlBQVk7SUFDZDtFQUVBO01BQ0UsaUJBQWlCO01BQ2pCLG9CQUFvQjtJQUN0QjtFQVdBO01BQ0UseUNBQXlDO01BQ3pDLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixrQ0FBa0M7SUFDcEM7RUFFQTtNQUNFLHVCQUF1QjtNQUN2QixlQUFlO0lBQ2pCO0VBRUE7TUFDRSxZQUFZO01BQ1osVUFBVTtNQUNWLGFBQWE7TUFDYixZQUFZO01BQ1osbUNBQW1DO01BQ25DLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsV0FBVztNQUNYLGVBQWU7SUFDakI7RUFFQTtNQUNFLFlBQVk7SUFDZDtFQUdBLEdBQUcsc0JBQXNCLENBQUM7RUFFMUI7TUFDRSxTQUFTO01BQ1QseUNBQXlDO01BQ3pDLGtCQUFrQjs7SUFFcEI7RUFHQSxtQkFBbUI7RUFFbkI7TUFDRSx3QkFBd0I7TUFDeEIsWUFBWTtJQUNkO0VBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsWUFBWTtJQUNkO0VBRUEsMEJBQTBCO0VBRTFCLG1CQUFtQjtFQUNuQjtNQUNFLGlCQUFpQjtNQUNqQixXQUFXO0lBQ2I7RUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQkc7RUFFSDs7T0FFRztFQUNIOztPQUVHO0VBRUgsbUJBQW1CO0VBRW5CLG1CQUFtQjtFQUVuQjtNQUNFLFlBQVk7TUFDWixlQUFlO0lBQ2pCO0VBRUE7TUFDRSx3QkFBd0I7SUFDMUI7RUFHQTtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO0lBQ2I7RUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtJQUNqQjtFQUNBO01BQ0UsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixlQUFlO0lBQ2pCO0VBRUE7TUFDRSx3QkFBd0I7TUFDeEIsWUFBWTtJQUNkO0VBRUEsMEJBQTBCO0VBRTFCLGlCQUFpQjtFQUVqQjtNQUNFLFlBQVk7SUFDZDtFQUVBO01BQ0UsVUFBVTtNQUNWLFdBQVc7TUFDWCxlQUFlO01BQ2YsVUFBVTtNQUNWLE1BQU07TUFDTixPQUFPO01BQ1AsNEJBQTRCO01BQzVCLGtDQUFrQztNQUNsQyxrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCO0VBRUE7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixnQkFBZ0I7SUFDbEI7RUFFQTtNQUNFLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGNBQWM7TUFDZCxjQUFjO01BQ2QsZ0JBQWdCO0lBQ2xCO0VBRUE7TUFDRSxjQUFjO0lBQ2hCO0VBRUE7TUFDRSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFdBQVc7TUFDWCxlQUFlO0lBQ2pCO0VBRUE7TUFDRSxZQUFZO0lBQ2Q7RUFFQTtNQUNFLFlBQVk7TUFDWixjQUFjO0lBQ2hCO0VBRUE7TUFDRSx1QkFBdUI7SUFDekI7RUFHQSx3QkFBd0I7RUFJeEIseUJBQXlCO0VBQ3pCO1FBQ0kseUJBQXlCO0lBQzdCO0VBR0E7TUFDRSxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLHlDQUF5QztJQUMzQztFQUVBO01BQ0Usa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxpQkFBaUI7SUFDbkI7RUFDQTtNQUNFLFdBQVc7TUFDWCxpQkFBaUI7SUFDbkI7RUFDQSxnQ0FBZ0M7RUFFaEMsbUJBQW1CO0VBRW5CO01BQ0UsaUJBQWlCO0lBQ25CO0VBRUE7TUFDRSx5QkFBeUI7TUFDekIsU0FBUztNQUNULFlBQVk7SUFDZDtFQUVBLDBCQUEwQjtFQUUxQjtNQUNFO1FBQ0UsV0FBVztRQUNYLGNBQWM7UUFDZCxrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxrQkFBa0I7UUFDbEIsV0FBVztNQUNiO01BQ0E7UUFDRSxXQUFXO01BQ2I7SUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nMSB7XG4gICAgaGVpZ2h0Ojg1dmg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gIH1cbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgXG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGgzXG4gIHtcbiAgIFxuICAgICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgZm9vdGVye1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIGltZ1xuICB7XG4gIGZsb2F0OmxlZnQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIH1cbiAgXG4gIFxuICBoclxuICB7XG4gICAgICBtYXJnaW4tbGVmdCA6IC01MHB4O1xuICB9XG4gIC5kdWFsc2hvY2tcbiAge1xuICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICBtYXJnaW4tdG9wOiAtNDAwcHg7XG4gICAgICBoZWlnaHQ6IDU3NXB4O1xuICAgICAgd2lkdGg6IDU1MHB4O1xuICB9XG4gIC5QbGF0Zm9ybVxuICB7XG4gICAgICBmb250LXNpemU6IDU1cHg7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgICAgZm9udC1mYW1pbHk6XCJmYW50YXN5XCI7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmVkICwgYmx1ZSk7XG4gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmVkICwgYmx1ZSk7XG4gICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnNlYXJjaHtcbiAgICB3aWR0aDo0MHB4O1xuICB9XG4gIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnNsZHtcbiAgICAvKiBtYXJnaW4tbGVmdDogNSU7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gICNpMXtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgXG5cbiAgICAudG9wbmF2IHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIH1cbiAgICBcbiAgICAudG9wbmF2IGEge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgY29sb3I6ICNmMmYyZjI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvKiBwYWRkaW5nOiAxNHB4IDE2cHg7ICovXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgICBcbiAgICAudG9wbmF2IGE6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG5cbiAgICAubmF2LWxpbmt7XG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cblxuXG5cblxuXG5cblxuXG5cbiAgICBcbiAgICAuY2FyZCB7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2IoNDYsIDE1NiwgMjE5KTtcbiAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDIzMSwgNzApO1xuICAgIH1cbiAgICBcbiAgICAucHJpY2Uge1xuICAgICAgY29sb3I6IHJnYigxNTEsIDE5LCAxOSk7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkIGJ1dHRvbiB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgMTY3LCAxODApO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkIGJ1dHRvbjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG5cbiAgICAqIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cblxuICAgIGJvZHkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgIC8qIEhlYWRlciBTdHlsaW5nICovXG4gICAgXG4gICAgLmhlYWRlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzQ2NDY2ZDtcbiAgICAgIGhlaWdodDoxMDBweDtcbiAgICB9XG4gICAgLmhlYWRlcj4udGV4dC1jZW50ZXJ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgLyogRW5kIG9mIEhlYWRlciBTdHlsaW5nICovXG4gICAgXG4gICAgLyogQmFubmVyIFN0eWxpbmcgKi9cbiAgICAuaGVyby1pbWFnZSB7XG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAvKiAuaGVyby1pbWFnZT4gLmltZy1mbHVpZHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gICAgLmhlcm8taW1hZ2U+LkJhbm5lci1idG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2NmQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICBwYWRkaW5nOiAyNHB4IDMwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH0gKi9cbiAgICBcbiAgICAvKiAuaGVyby1pbWFnZTpob3ZlciAuaW1nLWZsdWlke1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH0gKi9cbiAgICAvKiAuaGVyby1pbWFnZTpob3ZlciAuQmFubmVyLWJ0biB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH0gKi9cbiAgICBcbiAgICAvKiBFbmQgT2YgU3R5bGluZyAqL1xuICAgIFxuICAgIC8qIE5hdmJhciBTdHlsaW5nICovXG4gICAgXG4gICAgLm5hdmJhci1uYXZ7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgICNuYXZiYXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiMWIxY2Q7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICBcbiAgICAubmF2LWxpbmt7XG4gICAgICBjb2xvcjogcHVycGxlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLm5hdi1saW5rMntcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIFxuICAgIGxpIDpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNDY0NjZkO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAvKiBFbmQgb2YgTmF2YmFyIFN0eWxpbmcgKi9cbiAgICBcbiAgICAvKiBDYXJ0IFN0eWxpbmcgKi9cbiAgICBcbiAgICBkaXYjY2FydHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgXG4gICAgLm92ZXJsYXkge1xuICAgICAgaGVpZ2h0OiAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC45KTtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxuICAgIFxuICAgIC5vdmVybGF5LWNvbnRlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAub3ZlcmxheSBhIHtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIGNvbG9yOiAjODE4MTgxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIH1cbiAgICBcbiAgICAub3ZlcmxheSBhOmhvdmVyLCAub3ZlcmxheSBhOmZvY3VzIHtcbiAgICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgIH1cbiAgICBcbiAgICAub3ZlcmxheSAuY2xvc2VidG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICByaWdodDogNDVweDtcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICB9XG4gICAgXG4gICAgLmNsb3NlYnRue1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FydC1pdGVte1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFxuICAgICNjYXJ0LXRhYmxle1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC8qIEVuZCBvZiBDYXJ0IFN0eWxpbmcgKi9cbiAgICBcbiAgICBcbiAgICBcbiAgICAvKiBNYWluIENvbnRlbnQgU3R5bGluZyAqL1xuICAgICNtYWluLWNvbnRlbnQsIGRpdi5tYWluLWNvbnRlbnR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZWI7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5pbWctdGh1bWJuYWlse1xuICAgICAgYm9yZGVyOiAycHggc29saWQgYXF1YTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYig0NiwgMTU2LCAyMTkpO1xuICAgIH1cbiAgICBcbiAgICBoNntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGg1e1xuICAgICAgY29sb3I6IGFxdWE7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLyogRW5kIG9mIE1haW4gQ29udGVudCBTdHlsaW5nICovXG4gICAgXG4gICAgLyogRm9vdGVyIFN0eWxpbmcgKi9cbiAgICBcbiAgICBmb290ZXIuanVtYm90cm9ue1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICAgIFxuICAgICNmb290ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjZkO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAvKiBFbmQgb2YgRm9vdGVyIFN0eWxpbmcgKi9cbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgICAgLmhlYWRlciBhe1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5uYXZiYXItbmF2e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgfVxuICAgICAgLmhlYWRlci1yaWdodCB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainpageComponent = class MainpageComponent {
    constructor() {
        this.title = 'maingame';
        this.myimage = "assets/img/search.jpg";
        this.myimage1 = "assets/img/21.png";
        this.myimage2 = "assets/img/Games.jpg";
        this.myimage3 = "assets/img/PS4.jpg";
        this.myimage4 = "assets/img/Xbox.jpg";
        this.myimage5 = "assets/img/Switch.jpg";
        this.myimage6 = "assets/img/PS4Pro.jpg";
        this.myimage7 = "assets/img/XB1.jpg";
        this.myimage8 = "assets/img/images13.jpg";
        this.myimage9 = "assets/img/images17.jpg";
        this.myimage10 = "assets/img/images15.jpg";
        this.myimage11 = "assets/img/images18.jpg";
        this.myimage12 = "assets/img/images14.jpg";
        this.imageUrls = [
            this.myimage12, this.myimage11, this.myimage8, this.myimage10, this.myimage9
        ];
        this.arrowSize = '30px';
        this.showArrows = true;
        this.disableSwiping = false;
        this.autoPlay = true;
        this.autoPlayInterval = 3333;
        this.stopAutoPlayOnSlide = true;
        this.debug = false;
        this.backgroundSize = 'cover';
        this.backgroundPosition = 'center center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = true;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.lazyLoad = false;
        this.hideOnNoSlides = false;
        this.width = '120%';
        this.fullscreen = false;
        this.enableZoom = true;
        this.enablePan = false;
        this.noLoop = false;
    }
    ngOnInit() {
    }
};
MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mainpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mainpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mainpage/mainpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")).default]
    })
], MainpageComponent);



/***/ }),

/***/ "./src/app/product-registration.service.ts":
/*!*************************************************!*\
  !*** ./src/app/product-registration.service.ts ***!
  \*************************************************/
/*! exports provided: ProductRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegistrationService", function() { return ProductRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductRegistrationService = class ProductRegistrationService {
    constructor(http) {
        this.http = http;
    }
    doProductRegistration(product) {
        return this.http.post("http://localhost:8080/createProduct", product, { responseType: 'text' });
    }
    productData() {
        //return this.http.get(`${this.url}`);
        return this.http.get("http://localhost:8080/getAllProducts");
    }
    deleteAllProducts() {
        return this.http.get("http://localhost:8080/deleteAllProducts", { responseType: 'text' });
    }
    findbyName(name) {
        return this.http.get("http://localhost:8080/getProduct?name=" + name);
    }
    deletebyName(name) {
        return this.http.get("http://localhost:8080/deleteProduct?name=" + name);
    }
};
ProductRegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductRegistrationService);



/***/ }),

/***/ "./src/app/product.ts":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Product {
    constructor(name, description, price, pnumber) {
    }
}


/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _servicess_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicess/product.service */ "./src/app/servicess/product.service.ts");
/* harmony import */ var _product_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-registration.service */ "./src/app/product-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProductdetailsComponent = class ProductdetailsComponent {
    constructor(productService, service, router) {
        this.productService = productService;
        this.service = service;
        this.router = router;
        this.flag = 0;
        this.flag2 = 0;
        // private searchUsers() {
        //   this.service.getUsersByName(this.name)
        //     .subscribe(user1 => this.user1 = user1);
        // }
        this.myimage1 = "assets/img/21.png";
        this.myimage2 = "assets/img/details.jpg";
    }
    ngOnInit() {
        this.products = this.productService.findAll();
        this.showUsers();
        // console.log(this.product.subscribe())
    }
    //   findbyna()
    //   {
    //     this.flag=1;
    //     var a=prompt("Write the name for its details");
    //     this.findbyuser(a);
    //   }
    delbyname() {
        var a = prompt("Write the name for deleting its details");
        this.deletebyuser(a);
    }
    showUsers() {
        this.flag = 1;
        this.product = this.service.productData();
    }
    //   findbyuser(a){
    //     this.flag=1;
    //     let response = this.service.findbyName(a);
    //     response.subscribe((data) => this.message = (data));
    //   }
    deletebyuser(a) {
        var e = prompt("Do you really want to delete the record?");
        if (e == "yes") {
            let response = this.service.deletebyName(a);
            response.subscribe((data) => this.message2 = (data));
            this.flag2 = 1;
        }
    }
    deleteUsers() {
        var e = prompt("Do you really want to delete all the records?");
        if (e == "yes") {
            let response = this.service.deleteAllProducts();
            response.subscribe((data) => this.name = (data));
        }
        // .subscribe(
        //   (data) => {
        //     console.log(data);
        //     this.showUsers();
        //   },
        //   error => console.log('ERROR: ' + error));
    }
    cart1(id) {
        console.log(id);
        // this.router.navigateByUrl('cart');
        var item = {
            product: this.productService.find(id),
            quantity: 1
        };
        // console.log(item.product);
        if (localStorage.getItem('cart') == null) {
            console.log("hello");
            let cart = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {
            console.log(item.product.id);
            let cart = JSON.parse(localStorage.getItem('cart'));
            let index = -1;
            for (var i = 0; i < cart.length; i++) {
                // console.log(item.product);
                let Item = JSON.parse(cart[i]);
                if (item.product.id == id) {
                    index = i;
                    break;
                }
            }
            if (index == -1) {
                cart.push(JSON.stringify(item));
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            else {
                let item = JSON.parse(cart[index]);
                item.quantity += 1;
                cart[index] = JSON.stringify(item);
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        }
    }
};
ProductdetailsComponent.ctorParameters = () => [
    { type: _servicess_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _product_registration_service__WEBPACK_IMPORTED_MODULE_3__["ProductRegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productdetails/productdetails.component.html")).default
    })
], ProductdetailsComponent);



/***/ }),

/***/ "./src/app/productregister/productregister.component.css":
/*!***************************************************************!*\
  !*** ./src/app/productregister/productregister.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  .example-full-width {\n    width: 100%;\n   padding-left: 0%; \n  }\n  hr {\n    border: 1px solid black;\n    margin-bottom: 25px;\n  }\n  b{\n    color: #00c6ff;\n  }\n  button:hover {\n    opacity:1;\n  }\n  .example-button-row\n  {\n     padding: 20px;\n  }\n  .anime{\n    font-size: 90px;\n    text-align: left;\n    position: relative;\n    font-family:  'Andale Mono', monospace;\n     font-family: 'Lucida', sans-serif;\n    letter-spacing: 4px;\n    overflow: hidden;\n    background: -webkit-linear-gradient(left,  #1143a6, #00c6ff);\n    background-repeat: no-repeat;\n    background-size: 80%;\n  -webkit-background-clip: text;\n    -webkit-text-fill-color: rgba(255, 255, 255, 0);\n  margin-left: 1%;\n    /* font-family: 'Kaushan Script', cursive; */\n  }\n  /* :host{\n    background-color: rgb(182, 37, 37);\n    display: flex;\n  } */\n  .div2{\n    /* margin:4px;\n    padding: 50px;\n    padding-bottom:200px; */\n    /* background-color: silver; */\n  \n    /* margin-left: 500px; */\n  \n  \n    display: flex;\n    justify-content: center;\n    /* border: 3px solid #00c6ff; */\n    background: black;\n    width: 100%;\n    height: 100%;\n    color: #00c6ff;\n    /* margin-left: 10%; */\n/* margin-top: 2%; */\n/* border-top-left-radius: 4.0rem;\nborder-bottom-left-radius: 4.0rem; */\n\n  \n  }\n  .sidenav {\n   \n    background: -webkit-linear-gradient(left,  #1143a6, #00c6ff);\n    overflow-x: hidden;\n    padding-top: 20px;\n   \n    /* padding-left: 5%; */\n    padding-right: 1%;\n   color: rgb(20, 20, 19);\n    margin-right:1% ;\n    width: 20%;\n    height: 100%;\n    margin-left: 40%;\n    padding-left: 0%;\n    border-top-left-radius: 4.0rem;\n    border-bottom-left-radius: 4.0rem;\n    margin-top: 0.5%;\n    font-family: 'Kaushan Script', cursive;\n    text-align: center;\n    font-size: large;\n  }\n  /* .div1{\n    background-color: black;\n     color: #00c6ff; \n     background-size: cover; \n  } */\n  input[type=text] {\n    width: 100%;\n    box-sizing: border-box;\n    border: none;\n    color: white;\n    background-color: #1cbdee;\n       padding-left: 0%;  \n  }\n  .example-button-row{\n    background-color: #00c6ff;\n    color: black;\n   \n    margin-left: 1px;\n                            \n  }\n  .example-form{\n    padding-left: 0%;\n  }\n  input[type=email] {\n    /* width: 100%; */\n    box-sizing: border-box;\n    border: none;\n    color: #00c6ff;\n    background-color: #00c6ff;\n  }\n  input[type=password] {\n    width: 100%;\n    box-sizing: border-box;\n    border: none;\n    color: rgb(58, 13, 13);\n    background-color: #00c6ff;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHJlZ2lzdGVyL3Byb2R1Y3RyZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLFdBQVc7R0FDWixnQkFBZ0I7RUFDakI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFFQTtJQUNFLFNBQVM7RUFDWDtFQUVBOztLQUVHLGFBQWE7RUFDaEI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNDQUFzQztLQUNyQyxpQ0FBaUM7SUFDbEMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw0REFBNEQ7SUFDNUQsNEJBQTRCO0lBQzVCLG9CQUFvQjtFQUN0Qiw2QkFBNkI7SUFDM0IsK0NBQStDO0VBQ2pELGVBQWU7SUFDYiw0Q0FBNEM7RUFDOUM7RUFDQTs7O0tBR0c7RUFFSDtJQUNFOzsyQkFFdUI7SUFDdkIsOEJBQThCOztJQUU5Qix3QkFBd0I7OztJQUd4QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCLG9CQUFvQjtBQUNwQjtvQ0FDb0M7OztFQUdsQztFQUVBOztJQUVFLDREQUE0RDtJQUM1RCxrQkFBa0I7SUFDbEIsaUJBQWlCOztJQUVqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0dBQ2xCLHNCQUFzQjtJQUNyQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7Ozs7S0FJRztFQUVIO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtPQUN0QixnQkFBZ0I7RUFDckI7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZOztJQUVaLGdCQUFnQjs7RUFFbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RyZWdpc3Rlci9wcm9kdWN0cmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgIHBhZGRpbmctbGVmdDogMCU7IFxuICB9XG4gIGhyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG4gIGJ7XG4gICAgY29sb3I6ICMwMGM2ZmY7XG4gIH1cbiAgXG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eToxO1xuICB9XG4gIFxuICAuZXhhbXBsZS1idXR0b24tcm93XG4gIHtcbiAgICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAuYW5pbWV7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiAgJ0FuZGFsZSBNb25vJywgbW9ub3NwYWNlO1xuICAgICBmb250LWZhbWlseTogJ0x1Y2lkYScsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICAjMTE0M2E2LCAjMDBjNmZmKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIC8qIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlOyAqL1xuICB9XG4gIC8qIDpob3N0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDM3LCAzNyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfSAqL1xuICBcbiAgLmRpdjJ7XG4gICAgLyogbWFyZ2luOjRweDtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjIwMHB4OyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjsgKi9cbiAgXG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwMHB4OyAqL1xuICBcbiAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCAjMDBjNmZmOyAqL1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogIzAwYzZmZjtcbiAgICAvKiBtYXJnaW4tbGVmdDogMTAlOyAqL1xuLyogbWFyZ2luLXRvcDogMiU7ICovXG4vKiBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0LjByZW07XG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0LjByZW07ICovXG5cbiAgXG4gIH1cblxuICAuc2lkZW5hdiB7XG4gICBcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgIzExNDNhNiwgIzAwYzZmZik7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgXG4gICAgLyogcGFkZGluZy1sZWZ0OiA1JTsgKi9cbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgIGNvbG9yOiByZ2IoMjAsIDIwLCAxOSk7XG4gICAgbWFyZ2luLXJpZ2h0OjElIDtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICAgIHBhZGRpbmctbGVmdDogMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNC4wcmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQuMHJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjUlO1xuICAgIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG4gIC8qIC5kaXYxe1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICBjb2xvcjogIzAwYzZmZjsgXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxuICB9ICovXG4gXG4gIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNiZGVlO1xuICAgICAgIHBhZGRpbmctbGVmdDogMCU7ICBcbiAgfVxuICAgIFxuICAuZXhhbXBsZS1idXR0b24tcm93e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGM2ZmY7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgfVxuICAuZXhhbXBsZS1mb3Jte1xuICAgIHBhZGRpbmctbGVmdDogMCU7XG4gIH1cbiAgaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMDBjNmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGM2ZmY7XG4gIH1cblxuICBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYig1OCwgMTMsIDEzKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjNmZmO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/productregister/productregister.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/productregister/productregister.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductregisterComponent", function() { return ProductregisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-registration.service */ "./src/app/product-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");





let ProductregisterComponent = class ProductregisterComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.product = new _product__WEBPACK_IMPORTED_MODULE_4__["Product"]("", "", 0, "");
    }
    ngOnInit() {
    }
    onAddPost(form) {
        if (form.invalid) {
            console.log("Invalid");
            return;
        }
        console.log(form.valid);
    }
    // public registerProcess(){
    //   let response = this.service.doProductRegistration(this.product);
    //   response.subscribe((data) => this.message = (data));
    // }
    registerProcess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.service.doProductRegistration(this.product);
            response.subscribe((data) => this.message = (data));
            this.router.navigateByUrl("/sellproduct");
        });
    }
};
ProductregisterComponent.ctorParameters = () => [
    { type: _product_registration_service__WEBPACK_IMPORTED_MODULE_2__["ProductRegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProductregisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productregister',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productregister.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productregister/productregister.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./productregister.component.css */ "./src/app/productregister/productregister.component.css")).default]
    })
], ProductregisterComponent);



/***/ }),

/***/ "./src/app/sellproduct/sellproduct.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sellproduct/sellproduct.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  font{\r\n    font-family: serif;\r\n    \r\n  }\r\n  td,th{\r\n      color:white;\r\n      padding: 15px;\r\n      -webkit-text-size-adjust: 50px;\r\n         -moz-text-size-adjust: 50px;\r\n          -ms-text-size-adjust: 50px;\r\n              text-size-adjust: 50px;\r\n  }\r\n  table, td{  \r\n  border: 1px solid rgb(236, 17, 17);\r\n  text-align: left;\r\n}\r\n  th{\r\n  border: 1px solid rgb(236, 17, 17);\r\n  text-align: center;\r\n}\r\n  table {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n  .d1{\r\n  background-color: black;\r\n  height:auto;  width:auto;\r\n  min-height: 44em;\r\n  min-width: 44em;\r\n  \r\n}\r\n  input[type=text] {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  border: none;\r\n  color: black;\r\n}\r\n  p{\r\n  color:white;\r\n}\r\n  .example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  .img\r\n  {\r\n    padding-top: 10px;\r\n    height: 60px;\r\n  }\r\n  .topnav\r\n  {\r\n    margin-left: 500px;\r\n    padding-left: 50px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbHByb2R1Y3Qvc2VsbHByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjs7RUFFcEI7RUFDQTtNQUNJLFdBQVc7TUFDWCxhQUFhO01BQ2IsOEJBQXNCO1NBQXRCLDJCQUFzQjtVQUF0QiwwQkFBc0I7Y0FBdEIsc0JBQXNCO0VBQzFCO0VBQ0E7RUFDQSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCO0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0VBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVyxHQUFHLFVBQVU7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7RUFDQTtFQUNFLFdBQVc7QUFDYjtFQUVBOztFQUVFLGlCQUFpQjtBQUNuQjtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBRUE7O0lBRUUsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zZWxscHJvZHVjdC9zZWxscHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgZm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIFxyXG4gIH1cclxuICB0ZCx0aHtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIHRleHQtc2l6ZS1hZGp1c3Q6IDUwcHg7XHJcbiAgfVxyXG4gIHRhYmxlLCB0ZHsgIFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzYsIDE3LCAxNyk7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG50aHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM2LCAxNywgMTcpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmQxe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDphdXRvOyAgd2lkdGg6YXV0bztcclxuICBtaW4taGVpZ2h0OiA0NGVtO1xyXG4gIG1pbi13aWR0aDogNDRlbTtcclxuICBcclxufSBcclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbnB7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5pbWdcclxuICB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcbiAgLnRvcG5hdlxyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/sellproduct/sellproduct.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sellproduct/sellproduct.component.ts ***!
  \******************************************************/
/*! exports provided: SellproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellproductComponent", function() { return SellproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-registration.service */ "./src/app/product-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SellproductComponent = class SellproductComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.flag = 0;
        this.flag2 = 0;
        // private searchUsers() {
        //   this.service.getUsersByName(this.name)
        //     .subscribe(user1 => this.user1 = user1);
        // }
        this.myimage1 = "assets/img/21.png";
        this.myimage2 = "assets/img/details.jpg";
    }
    ngOnInit() {
        this.flag = 1;
        this.product = this.service.productData();
    }
    findbyna() {
        this.flag = 1;
        var a = prompt("Write the name for its details");
        this.findbyuser(a);
    }
    delbyname() {
        var a = prompt("Write the name for deleting its details");
        this.deletebyuser(a);
    }
    showUsers() {
        this.flag = 1;
        this.product = this.service.productData();
    }
    findbyuser(a) {
        this.flag = 1;
        let response = this.service.findbyName(a);
        response.subscribe((data) => this.message = (data));
    }
    deletebyuser(a) {
        var e = prompt("Do you really want to delete the record?");
        if (e == "yes") {
            let response = this.service.deletebyName(a);
            response.subscribe((data) => this.message2 = (data));
            this.flag2 = 1;
        }
    }
    deleteUsers() {
        var e = prompt("Do you really want to delete all the records?");
        if (e == "yes") {
            let response = this.service.deleteAllProducts();
            response.subscribe((data) => this.name = (data));
        }
        // .subscribe(
        //   (data) => {
        //     console.log(data);
        //     this.showUsers();
        //   },
        //   error => console.log('ERROR: ' + error));
    }
    cart1() {
        this.router.navigateByUrl('cart');
    }
};
SellproductComponent.ctorParameters = () => [
    { type: _product_registration_service__WEBPACK_IMPORTED_MODULE_2__["ProductRegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SellproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sellproduct',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sellproduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sellproduct/sellproduct.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sellproduct.component.css */ "./src/app/sellproduct/sellproduct.component.css")).default]
    })
], SellproductComponent);



/***/ }),

/***/ "./src/app/servicess/product.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicess/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductService = class ProductService {
    constructor() {
        this.products = [
            { id: '1', name: 'Lipstick', price: 400, photo: 'bblipstick.jpg' },
            { id: '2', name: 'Nail Polish', price: 200, photo: 'belaNail.jpg' },
            { id: '3', name: 'Nike SB Dunks', price: 150, photo: 'BlueCream.jpg' },
            { id: '4', name: 'Face Mask', price: 100, photo: 'PlanetMask1.jpg' },
            { id: '5', name: 'iphone 11 Pro', price: 82000, photo: 'silkyCream.jpg' },
            { id: '6', name: 'Denim Jacket', price: 4300, photo: 'sunnyCream.jpg' },
            { id: '7', name: 'Nike Air Jordan 1', price: 3000, photo: 'norweigenCream.jpg' },
            { id: '8', name: 'Microwave', price: 2670, photo: 'Luminous.jpg' },
            { id: '9', name: 'Sanitizer', price: 2300, photo: 'IMG-4799.JPG' },
        ];
    }
    findAll() {
        return this.products;
    }
    find(id) {
        // console.log(this.products[this.getSelectedIndex(id)]);
        return this.products[this.getSelectedIndex(id)];
    }
    getSelectedIndex(id) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }
};
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductService);



/***/ }),

/***/ "./src/app/sign/sign.component.css":
/*!*****************************************!*\
  !*** ./src/app/sign/sign.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.formq{\n  display: flex;\n    justify-content: center;\n \n    background: -webkit-linear-gradient(left,  #eed9d9, #eef1f1);\n    width: 50%;\n    height: 20%;\n    margin-left: 10%;\nmargin-top: 1%;\nborder-top-left-radius: 4.0rem;\nborder-bottom-left-radius: 4.0rem;\n}\n\n.anime{\n  font-size: 90px;\n  text-align: center;\n  position: relative;\n  font-family:  'Andale Mono', monospace;\n   font-family: 'Lucida', sans-serif;\n  letter-spacing: 4px;\n  overflow: hidden;\n  background: -webkit-linear-gradient(left,  #1143a6, #00c6ff);\n  background-repeat: no-repeat;\n  background-size: 80%;\n-webkit-background-clip: text;\n  -webkit-text-fill-color: rgba(255, 255, 255, 0);\n\n  /* font-family: 'Kaushan Script', cursive; */\n}\n\n.coloumn{\n  background: -webkit-linear-gradient(left,  #1143a6, #00c6ff);\n  color: black;\n}\n\n.example-form{\ncolor: aqua;\n}\n\n.pp{\n  color: #00c6ff;\n}\n\nh1{\n  font-family: 'Lucida', sans-serif;\n}\n\np{\n  font-family:  'Andale Mono', monospace;\n  font-size: 25px;\n}\n\n.sidenav {\n  height: 96%;\n  background: -webkit-linear-gradient(left,  #1143a6, #00c6ff);\n  overflow-x: hidden;\n  padding-top: 20px;\n padding-left: 0%;\n  /* padding-left: 5%; */\n  padding-right: 1%;\n color: rgb(20, 20, 19);\n  margin-right:7% ;\n  width: 50%;\n  height: 840px;\n  margin-left: 0%;\n  padding-left: 0%;\n  border-top-left-radius: 4.0rem;\n  border-bottom-left-radius: 4.0rem;\n  margin-top: 0.5%;\n  font-family: 'Kaushan Script', cursive;\n  text-align: center;\n  font-size: large;\n}\n\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n \n}\n\n.example-full-width {\n    width: 100%;\n  }\n\nhr {\n    border: 1px solid #f1f1f1;\n    margin-bottom: 25px;\n  }\n\nb{\n    color:white;\n  }\n\nbutton:hover {\n    opacity:1;\n  }\n\n.example-button-row{\n    background-color: #00c6ff;\n  }\n\n/*@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n      width: 100%;\n    }\n  }*/\n\n:host{\n    /* background-image: url('src/assets/img/10.jpg'); */\n    display: flex;\n    background-color: black;\n    \n  }\n\n/* .a\n  {\n    background-image: url('src/assets/img/10.jpg');\n\n  } */\n\n.div2{\n  margin-left: 400px;\n  width: 80%;\n  border: 3px solid rgb(14, 131, 160);\n  padding: 50px;\n  margin-top: 50px;\n  color: black;\n  border-radius: 50px;\n  }\n\ninput[type=text] {\n    width: 100%;\n    box-sizing: border-box;\n    border: none;\n    color: black;\n  }\n\ninput[type=email] {\n    width: 100%;\n    box-sizing: border-box;\n    border: none;\n    color: black;\n  }\n\ninput[type=password] {\n    width: 100%;\n    box-sizing: border-box;\n    border: none;\n    color: rgb(58, 13, 13);\n  }\n\n.col2\n  {\n    padding-left: 50px;\n    /* padding-right: 200px;\n    margin-left: 200px; */\n    padding-right: 130px;\n    margin-top: 50px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9zaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7SUFDWCx1QkFBdUI7O0lBRXZCLDREQUE0RDtJQUM1RCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQixjQUFjO0FBQ2QsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQzs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztHQUNyQyxpQ0FBaUM7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw0REFBNEQ7RUFDNUQsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0Qiw2QkFBNkI7RUFDM0IsK0NBQStDOztFQUUvQyw0Q0FBNEM7QUFDOUM7O0FBQ0E7RUFDRSw0REFBNEQ7RUFDNUQsWUFBWTtBQUNkOztBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLHNDQUFzQztFQUN0QyxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsV0FBVztFQUNYLDREQUE0RDtFQUM1RCxrQkFBa0I7RUFDbEIsaUJBQWlCO0NBQ2xCLGdCQUFnQjtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7Q0FDbEIsc0JBQXNCO0VBQ3JCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsaUJBQWlCOztBQUVuQjs7QUFDRTtJQUNFLFdBQVc7RUFDYjs7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxTQUFTO0VBQ1g7O0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0FBSUE7Ozs7SUFJRTs7QUFDRjtJQUNFLG9EQUFvRDtJQUNwRCxhQUFhO0lBQ2IsdUJBQXVCOztFQUV6Qjs7QUFFQTs7OztLQUlHOztBQUNIO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25COztBQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtFQUNkOztBQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtFQUNkOztBQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztBQUVBOztJQUVFLGtCQUFrQjtJQUNsQjt5QkFDcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vc2lnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmZvcm1xe1xuICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICAjZWVkOWQ5LCAjZWVmMWYxKTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG5tYXJnaW4tdG9wOiAxJTtcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQuMHJlbTtcbmJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQuMHJlbTtcbn1cbi5hbmltZXtcbiAgZm9udC1zaXplOiA5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6ICAnQW5kYWxlIE1vbm8nLCBtb25vc3BhY2U7XG4gICBmb250LWZhbWlseTogJ0x1Y2lkYScsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICAjMTE0M2E2LCAjMDBjNmZmKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XG4td2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG5cbiAgLyogZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7ICovXG59XG4uY29sb3VtbntcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgICMxMTQzYTYsICMwMGM2ZmYpO1xuICBjb2xvcjogYmxhY2s7XG59XG4uZXhhbXBsZS1mb3Jte1xuY29sb3I6IGFxdWE7XG59XG4ucHB7XG4gIGNvbG9yOiAjMDBjNmZmO1xufVxuaDF7XG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhJywgc2Fucy1zZXJpZjtcbn1cbnB7XG4gIGZvbnQtZmFtaWx5OiAgJ0FuZGFsZSBNb25vJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uc2lkZW5hdiB7XG4gIGhlaWdodDogOTYlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgIzExNDNhNiwgIzAwYzZmZik7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gcGFkZGluZy1sZWZ0OiAwJTtcbiAgLyogcGFkZGluZy1sZWZ0OiA1JTsgKi9cbiAgcGFkZGluZy1yaWdodDogMSU7XG4gY29sb3I6IHJnYigyMCwgMjAsIDE5KTtcbiAgbWFyZ2luLXJpZ2h0OjclIDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA4NDBweDtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICBwYWRkaW5nLWxlZnQ6IDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0LjByZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQuMHJlbTtcbiAgbWFyZ2luLXRvcDogMC41JTtcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gXG59XG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGhyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbiAgYntcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxuICBcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OjE7XG4gIH1cbiAgLmV4YW1wbGUtYnV0dG9uLXJvd3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjNmZmO1xuICB9XG4gIFxuXG4gIFxuICAvKkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgLmNhbmNlbGJ0biwgLnNpZ251cGJ0biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH0qL1xuICA6aG9zdHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nLzEwLmpwZycpOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgXG4gIH1cbiAgXG4gIC8qIC5hXG4gIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nLzEwLmpwZycpO1xuXG4gIH0gKi9cbiAgLmRpdjJ7XG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDE0LCAxMzEsIDE2MCk7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogcmdiKDU4LCAxMywgMTMpO1xuICB9XG4gIFxuICAuY29sMlxuICB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDsgKi9cbiAgICBwYWRkaW5nLXJpZ2h0OiAxMzBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");





// import { formatNumber } from '@angular/common';
let SignComponent = class SignComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]("", "", 0, "", "");
    }
    ngOnInit() {
    }
    registerProcess() {
        let response = this.service.doRegistration(this.user);
        response.subscribe((data) => this.message = (data));
        this.router.navigateByUrl('login');
    }
    // public check(form:NgForm) {
    //   // console.log(form.valid);
    //   if(form.valid==true)
    //   {
    //     this.registerProcess();
    //     // this.router.navigateByUrl('login');
    // }
    // else if(form.value==false)
    // {
    //   alert("Fill the form correctly!");
    // }
    // }
    onAddPost(form) {
        if (form.invalid) {
            console.log("Invalid");
            return;
        }
        console.log(form.valid);
        const post = { Name: form.value.name, Age: form.value.age, Email: form.value.email, Contact: form.value.number, Password: form.value.password };
        console.log(post);
    }
};
SignComponent.ctorParameters = () => [
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign.component.css */ "./src/app/sign/sign.component.css")).default]
    })
], SignComponent);



/***/ }),

/***/ "./src/app/user-registration.service.ts":
/*!**********************************************!*\
  !*** ./src/app/user-registration.service.ts ***!
  \**********************************************/
/*! exports provided: UserRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function() { return UserRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRegistrationService = class UserRegistrationService {
    constructor(http) {
        this.http = http;
    }
    //Does an API Call using POST Http Method
    doRegistration(user) {
        return this.http.post("http://localhost:8080/create", user, { responseType: 'text' });
    }
    userData() {
        //return this.http.get(`${this.url}`);
        return this.http.get("http://localhost:8080/getAll");
    }
    deleteAll() {
        return this.http.get("http://localhost:8080/deleteAll", { responseType: 'text' });
    }
    findbyName(name) {
        return this.http.get("http://localhost:8080/get?firstName=" + name);
    }
    deletebyName(name) {
        return this.http.get("http://localhost:8080/delete?firstName=" + name);
    }
};
UserRegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserRegistrationService);



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(firstName, eMail, age, password, number) {
    }
}


/***/ }),

/***/ "./src/app/userdata/userdata.component.css":
/*!*************************************************!*\
  !*** ./src/app/userdata/userdata.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n  .example-full-width {\n    width: 100%;\n  }\n  font{\n    font-family: serif;\n    \n  }\n  /* td,th{\n      color:black;\n      padding: 15px;\n      text-size-adjust: 50px;\n  } */\n  /* table, td{  \n  border: 1px solid rgb(236, 17, 17);\n  text-align: left;\n}\nth{\n  border: 1px solid rgb(236, 17, 17);\n  text-align: center;\n} */\n  /* table {\n  border-collapse: collapse;\n  width: 100%;\n} */\n  .d1{\n  \n  height:auto;  width:auto;\n  min-height: 44em;\n  min-width: 44em;\n}\n  input[type=text] {\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  color:white;\n}\n  p{\n  color:white;\n}\n  .example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n  .example-full-width {\n    width: 100%;\n  }\n  .nav\n  {\n    padding-left: 750px;\n    \n  }\n  .left\n  {\n    float: left;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRhdGEvdXNlcmRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjs7RUFFcEI7RUFDQTs7OztLQUlHO0VBQ0g7Ozs7Ozs7R0FPQztFQUVIOzs7R0FHRztFQUNIOztFQUVFLFdBQVcsR0FBRyxVQUFVO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2I7RUFDQTtFQUNFLFdBQVc7QUFDYjtFQUVBOztFQUVFLGlCQUFpQjtBQUNuQjtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBRUE7O0lBRUUsbUJBQW1COztFQUVyQjtFQUVBOztJQUVFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3VzZXJkYXRhL3VzZXJkYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGZvbnR7XG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICAgIFxuICB9XG4gIC8qIHRkLHRoe1xuICAgICAgY29sb3I6YmxhY2s7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgdGV4dC1zaXplLWFkanVzdDogNTBweDtcbiAgfSAqL1xuICAvKiB0YWJsZSwgdGR7ICBcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNiwgMTcsIDE3KTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRoe1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM2LCAxNywgMTcpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59ICovXG5cbi8qIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59ICovXG4uZDF7XG4gIFxuICBoZWlnaHQ6YXV0bzsgIHdpZHRoOmF1dG87XG4gIG1pbi1oZWlnaHQ6IDQ0ZW07XG4gIG1pbi13aWR0aDogNDRlbTtcbn0gXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6d2hpdGU7XG59XG5we1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubmF2XG4gIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDc1MHB4O1xuICAgIFxuICB9XG4gXG4gIC5sZWZ0XG4gIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/userdata/userdata.component.ts":
/*!************************************************!*\
  !*** ./src/app/userdata/userdata.component.ts ***!
  \************************************************/
/*! exports provided: UserdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdataComponent", function() { return UserdataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-registration.service */ "./src/app/user-registration.service.ts");



let UserdataComponent = class UserdataComponent {
    constructor(service) {
        this.service = service;
        this.myimage1 = "assets/img/21.png";
        this.flag = 0;
        this.flag2 = 0;
    }
    ngOnInit() {
        this.flag = 1;
        this.user = this.service.userData();
    }
    findbyna() {
        this.flag = 1;
        var a = prompt("Write the name for its details");
        this.findbyuser(a);
    }
    delbyname() {
        var a = prompt("Write the name for deleting its details");
        this.deletebyuser(a);
    }
    showUsers() {
        this.flag = 1;
        this.user = this.service.userData();
    }
    findbyuser(a) {
        this.flag = 1;
        let response = this.service.findbyName(a);
        response.subscribe((data) => this.message = (data));
    }
    deletebyuser(a) {
        var e = prompt("Do you really want to delete the record?");
        if (e == "yes") {
            let response = this.service.deletebyName(a);
            response.subscribe((data) => this.message2 = (data));
            this.flag2 = 1;
        }
    }
    deleteUsers() {
        var e = prompt("Do you really want to delete all the records?");
        if (e == "yes") {
            let response = this.service.deleteAll();
            response.subscribe((data) => this.name = (data));
        }
    }
};
UserdataComponent.ctorParameters = () => [
    { type: _user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
UserdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userdata',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userdata.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userdata/userdata.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userdata.component.css */ "./src/app/userdata/userdata.component.css")).default]
    })
], UserdataComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SIMRAN\Desktop\ShopFreak\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map