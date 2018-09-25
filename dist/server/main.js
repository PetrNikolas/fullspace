(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var welcome_component_1 = __webpack_require__(/*! ./features/welcome/pages/welcome.component */ "./src/app/features/welcome/pages/welcome.component.ts");
var contact_component_1 = __webpack_require__(/*! ./features/contact/pages/contact.component */ "./src/app/features/contact/pages/contact.component.ts");
var ɵ0 = { preload: true };
exports.ɵ0 = ɵ0;
var routes = [
    { path: '', component: welcome_component_1.WelcomeComponent, pathMatch: 'full' },
    { path: 'contact', component: contact_component_1.ContactComponent, data: ɵ0 },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./shared/header/header.component.ngfactory */ "./src/app/shared/header/header.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ./shared/footer/footer.component.ngfactory */ "./src/app/shared/footer/footer.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
var i7 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-header", [], null, null, null, i2.View_HeaderComponent_0, i2.RenderType_HeaderComponent)), i1.ɵdid(1, 114688, null, 0, i3.HeaderComponent, [], null, null), (_l()(), i1.ɵeld(2, 0, null, null, 2, "main", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(4, 212992, null, 0, i4.RouterOutlet, [i4.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null), (_l()(), i1.ɵeld(5, 0, null, null, 1, "app-footer", [], null, null, null, i5.View_FooterComponent_0, i5.RenderType_FooterComponent)), i1.ɵdid(6, 114688, null, 0, i6.FooterComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 4, 0); _ck(_v, 6, 0); }, null); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i7.AppComponent, [], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i7.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var environment_1 = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var AppModule = (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        if (!environment_1.environment.production) {
            var platform = common_1.isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
            console.log("Running " + platform + " with appId=" + appId);
        }
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./features/welcome/pages/welcome.component.ngfactory */ "./src/app/features/welcome/pages/welcome.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./features/contact/pages/contact.component.ngfactory */ "./src/app/features/contact/pages/contact.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i7 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i8 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i9 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i10 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i11 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i12 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i13 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i14 = __webpack_require__(/*! ./preloading-strategy */ "./src/app/preloading-strategy.ts");
var i15 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i16 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i17 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i18 = __webpack_require__(/*! ./global-error-handler */ "./src/app/global-error-handler.ts");
var i19 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i20 = __webpack_require__(/*! ./features/welcome/pages/welcome.component */ "./src/app/features/welcome/pages/welcome.component.ts");
var i21 = __webpack_require__(/*! ./features/contact/pages/contact.component */ "./src/app/features/contact/pages/contact.component.ts");
var i22 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var i23 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var i24 = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var i25 = __webpack_require__(/*! ./features/welcome/welcome.module */ "./src/app/features/welcome/welcome.module.ts");
var i26 = __webpack_require__(/*! ./features/contact/contact.module */ "./src/app/features/contact/contact.module.ts");
var i27 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.WelcomeComponentNgFactory, i5.ContactComponentNgFactory, i6.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_l, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i7.NgLocalization, i7.NgLocaleLocalization, [i0.LOCALE_ID, [2, i7.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_k, []), i0.ɵmpd(4608, i8.DomSanitizer, i8.ɵangular_packages_platform_browser_platform_browser_e, [i7.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i8.DomSanitizer]), i0.ɵmpd(4608, i8.HAMMER_GESTURE_CONFIG, i8.HammerGestureConfig, []), i0.ɵmpd(5120, i8.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p3_0) { return [new i8.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i8.ɵKeyEventsPlugin(p1_0), new i8.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2), new i9.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i7.DOCUMENT, i0.NgZone, [2, i0.PLATFORM_ID], i7.DOCUMENT, i7.DOCUMENT, i8.HAMMER_GESTURE_CONFIG, i0.ɵConsole, i8.DOCUMENT]), i0.ɵmpd(4608, i8.EventManager, i8.EventManager, [i8.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i8.ɵDomSharedStylesHost, i8.ɵDomSharedStylesHost, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.ɵDomRendererFactory2, i8.ɵDomRendererFactory2, [i8.EventManager, i8.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i9.ɵangular_packages_platform_server_platform_server_c, i9.ɵangular_packages_platform_server_platform_server_c, [i8.DOCUMENT, [2, i8.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i8.ɵSharedStylesHost, null, [i9.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i9.ɵServerRendererFactory2, i9.ɵServerRendererFactory2, [i8.EventManager, i0.NgZone, i8.DOCUMENT, i8.ɵSharedStylesHost]), i0.ɵmpd(4608, i10.AnimationDriver, i10.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i10.ɵAnimationStyleNormalizer, i11.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i10.ɵAnimationEngine, i11.ɵangular_packages_platform_browser_animations_animations_a, [i7.DOCUMENT, i10.AnimationDriver, i10.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i9.ɵangular_packages_platform_server_platform_server_a, [i9.ɵServerRendererFactory2, i10.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i8.Meta, i8.Meta, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.Title, i8.Title, [i7.DOCUMENT]), i0.ɵmpd(4608, i12.ɵangular_packages_forms_forms_i, i12.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵangular_packages_router_router_f, [i13.Router]), i0.ɵmpd(4608, i14.SelectivePreloadingStrategy, i14.SelectivePreloadingStrategy, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i14.SelectivePreloadingStrategy]), i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵangular_packages_router_router_i, [i13.ɵangular_packages_router_router_g]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i15.HttpXsrfTokenExtractor, i15.ɵangular_packages_common_http_http_g, [i7.DOCUMENT, i0.PLATFORM_ID, i15.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i15.ɵangular_packages_common_http_http_h, i15.ɵangular_packages_common_http_http_h, [i15.HttpXsrfTokenExtractor, i15.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i15.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i15.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i15.XhrFactory, i9.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i15.HttpXhrBackend, i15.HttpXhrBackend, [i15.XhrFactory]), i0.ɵmpd(6144, i15.HttpBackend, null, [i15.HttpXhrBackend]), i0.ɵmpd(5120, i15.HttpHandler, i9.ɵangular_packages_platform_server_platform_server_h, [i15.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i15.HttpClient, i15.HttpClient, [i15.HttpHandler]), i0.ɵmpd(4608, i15.ɵangular_packages_common_http_http_d, i15.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(4608, i16.BrowserXhr, i9.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i16.ResponseOptions, i16.BaseResponseOptions, []), i0.ɵmpd(4608, i16.XSRFStrategy, i9.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i16.XHRBackend, i16.XHRBackend, [i16.BrowserXhr, i16.ResponseOptions, i16.XSRFStrategy]), i0.ɵmpd(4608, i16.RequestOptions, i16.BaseRequestOptions, []), i0.ɵmpd(5120, i16.Http, i9.ɵangular_packages_platform_server_platform_server_g, [i16.XHRBackend, i16.RequestOptions]), i0.ɵmpd(4608, i17.AnimationBuilder, i11.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i8.DOCUMENT]), i0.ɵmpd(1073742336, i7.CommonModule, i7.CommonModule, []), i0.ɵmpd(512, i0.ErrorHandler, i18.GlobalErrorHandler, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i13.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i13.ɵangular_packages_router_router_g, i13.ɵangular_packages_router_router_g, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "marleyapp", []), i0.ɵmpd(2048, i8.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i8.ɵangular_packages_platform_browser_platform_browser_h(p0_0), i13.ɵangular_packages_router_router_h(p1_0), i8.ɵangular_packages_platform_browser_platform_browser_f(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i13.ɵangular_packages_router_router_g, i8.ɵTRANSITION_ID, i7.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i8.BrowserModule, i8.BrowserModule, [[3, i8.BrowserModule]]), i0.ɵmpd(1073742336, i12.ɵangular_packages_forms_forms_bb, i12.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i12.FormsModule, i12.FormsModule, []), i0.ɵmpd(1024, i13.ɵangular_packages_router_router_a, i13.ɵangular_packages_router_router_d, [[3, i13.Router]]), i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []), i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, { enableTracing: true, preloadingStrategy: i14.SelectivePreloadingStrategy }, []), i0.ɵmpd(1024, i7.LocationStrategy, i13.ɵangular_packages_router_router_c, [i7.PlatformLocation, [2, i7.APP_BASE_HREF], i13.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i7.Location, i7.Location, [i7.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i19.ModuleMapNgFactoryLoader, [i0.Compiler, i19.MODULE_MAP]), i0.ɵmpd(1024, i13.ROUTES, function () { return [[{ path: "", component: i20.WelcomeComponent, pathMatch: "full" }, { path: "contact", component: i21.ContactComponent, data: i22.ɵ0 }]]; }, []), i0.ɵmpd(1024, i13.Router, i13.ɵangular_packages_router_router_e, [i0.ApplicationRef, i13.UrlSerializer, i13.ChildrenOutletContexts, i7.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy], [2, i13.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i13.RouterModule, i13.RouterModule, [[2, i13.ɵangular_packages_router_router_a], [2, i13.Router]]), i0.ɵmpd(1073742336, i22.AppRoutingModule, i22.AppRoutingModule, []), i0.ɵmpd(1073742336, i23.SharedModule, i23.SharedModule, []), i0.ɵmpd(1073742336, i15.HttpClientXsrfModule, i15.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i15.HttpClientModule, i15.HttpClientModule, []), i0.ɵmpd(1073742336, i24.CoreModule, i24.CoreModule, [[3, i24.CoreModule]]), i0.ɵmpd(1073742336, i16.HttpModule, i16.HttpModule, []), i0.ɵmpd(1073742336, i25.WelcomeModule, i25.WelcomeModule, []), i0.ɵmpd(1073742336, i26.ContactModule, i26.ContactModule, []), i0.ɵmpd(1073742336, i27.AppModule, i27.AppModule, [i0.PLATFORM_ID, i0.APP_ID]), i0.ɵmpd(1073742336, i11.NoopAnimationsModule, i11.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i9.ServerModule, i9.ServerModule, []), i0.ɵmpd(1073742336, i19.ModuleMapLoaderModule, i19.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i15.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i15.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i11.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
    return CoreModule;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "./src/app/features/contact/contact.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/contact/contact.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
exports.ContactModule = ContactModule;


/***/ }),

/***/ "./src/app/features/contact/pages/contact.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/features/contact/pages/contact.component.ngfactory.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./contact.component.scss.shim.ngstyle */ "./src/app/features/contact/pages/contact.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ./contact.component */ "./src/app/features/contact/pages/contact.component.ts");
var i4 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i5 = __webpack_require__(/*! ../../../preloading-strategy */ "./src/app/preloading-strategy.ts");
var styles_ContactComponent = [i0.styles];
var RenderType_ContactComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ContactComponent, data: {} });
exports.RenderType_ContactComponent = RenderType_ContactComponent;
function View_ContactComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 16, "div", [["class", "column is-6-tablet"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 15, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 2, "div", [["class", "card-image"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "figure", [["class", "image is-2by1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "img", [["alt", "Placeholder image"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 11, "div", [["class", "card-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 8, "div", [["class", "media"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "media-left"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "figure", [["class", "image is-48x48"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "img", [["alt", "Placeholder image"]], [[8, "src", 4]], null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 4, "div", [["class", "media-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 1, "p", [["class", "title is-4"]], null, null, null, null, null)), (_l()(), i1.ɵted(12, null, ["", ""])), (_l()(), i1.ɵeld(13, 0, null, null, 1, "p", [["class", "subtitle is-6"]], null, null, null, null, null)), (_l()(), i1.ɵted(14, null, ["", ""])), (_l()(), i1.ɵeld(15, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵted(16, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.big_image, ""); _ck(_v, 4, 0, currVal_0); var currVal_1 = i1.ɵinlineInterpolate(1, "", _v.context.$implicit.small_image, ""); _ck(_v, 9, 0, currVal_1); var currVal_2 = _v.context.$implicit.name; _ck(_v, 12, 0, currVal_2); var currVal_3 = _v.context.$implicit.nickname; _ck(_v, 14, 0, currVal_3); var currVal_4 = _v.context.$implicit.description; _ck(_v, 16, 0, currVal_4); }); }
function View_ContactComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "div", [["class", "columns is-multiline is-tablet"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_2)), i1.ɵdid(3, 802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.persons; _ck(_v, 3, 0, currVal_0); }, null); }
function View_ContactComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 7, "section", [["class", "hero is-fullheight has-text-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 6, "div", [["class", "hero-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "h1", [["class", "title is-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_1)), i1.ɵdid(7, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.persons; _ck(_v, 7, 0, currVal_0); }, null); }
exports.View_ContactComponent_0 = View_ContactComponent_0;
function View_ContactComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), i1.ɵdid(1, 114688, null, 0, i3.ContactComponent, [i4.Meta, i4.Title, i5.SelectivePreloadingStrategy], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ContactComponent_Host_0 = View_ContactComponent_Host_0;
var ContactComponentNgFactory = i1.ɵccf("app-contact", i3.ContactComponent, View_ContactComponent_Host_0, {}, {}, []);
exports.ContactComponentNgFactory = ContactComponentNgFactory;


/***/ }),

/***/ "./src/app/features/contact/pages/contact.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/features/contact/pages/contact.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/features/contact/pages/contact.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/contact/pages/contact.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var preloading_strategy_1 = __webpack_require__(/*! ../../../preloading-strategy */ "./src/app/preloading-strategy.ts");
var ContactComponent = (function () {
    function ContactComponent(meta, title, preloadStrategy) {
        this.preloadStrategy = preloadStrategy;
        this.persons = [
            {
                id: 1,
                name: 'John Smith',
                nickname: '@johnsmith',
                big_image: 'https://bulma.io/images/placeholders/1280x960.png',
                small_image: 'https://bulma.io/images/placeholders/96x96.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
            },
            {
                id: 2,
                name: 'John Smith',
                nickname: '@johnsmith',
                big_image: 'https://bulma.io/images/placeholders/1280x960.png',
                small_image: 'https://bulma.io/images/placeholders/96x96.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
            },
        ];
        this.modules = preloadStrategy.preloadedModules;
        title.setTitle('Contact');
        meta.addTags([
            { name: 'author', content: 'Petr Nikolas' },
            { name: 'description', content: 'This is a contact page.' },
        ]);
    }
    ContactComponent.prototype.ngOnInit = function () { };
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/features/welcome/pages/welcome.component.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/features/welcome/pages/welcome.component.ngfactory.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./welcome.component.scss.shim.ngstyle */ "./src/app/features/welcome/pages/welcome.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./welcome.component */ "./src/app/features/welcome/pages/welcome.component.ts");
var i3 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_WelcomeComponent = [i0.styles];
var RenderType_WelcomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_WelcomeComponent, data: {} });
exports.RenderType_WelcomeComponent = RenderType_WelcomeComponent;
function View_WelcomeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 9, "section", [["class", "hero is-fullheight has-text-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 8, "div", [["class", "hero-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 7, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 2, "h1", [["class", "title is-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Marley.js!"])), (_l()(), i1.ɵeld(6, 0, null, null, 1, "h2", [["class", "title is-2"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Modern Angular 6+ Stack."])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "a", [["class", "button is-primary is-medium"], ["href", "https://github.com/PetrNikolas/marley"], ["id", "button"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Download!"]))], null, null); }
exports.View_WelcomeComponent_0 = View_WelcomeComponent_0;
function View_WelcomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-welcome", [], null, null, null, View_WelcomeComponent_0, RenderType_WelcomeComponent)), i1.ɵdid(1, 114688, null, 0, i2.WelcomeComponent, [i3.Meta, i3.Title], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_WelcomeComponent_Host_0 = View_WelcomeComponent_Host_0;
var WelcomeComponentNgFactory = i1.ɵccf("app-welcome", i2.WelcomeComponent, View_WelcomeComponent_Host_0, {}, {}, []);
exports.WelcomeComponentNgFactory = WelcomeComponentNgFactory;


/***/ }),

/***/ "./src/app/features/welcome/pages/welcome.component.scss.shim.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/features/welcome/pages/welcome.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/features/welcome/pages/welcome.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/welcome/pages/welcome.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var WelcomeComponent = (function () {
    function WelcomeComponent(meta, title) {
        title.setTitle('Home');
        meta.addTags([
            { name: 'author', content: 'Petr Nikolas' },
            { name: 'description', content: 'This is a home page.' },
        ]);
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;


/***/ }),

/***/ "./src/app/features/welcome/welcome.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/welcome/welcome.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    return WelcomeModule;
}());
exports.WelcomeModule = WelcomeModule;


/***/ }),

/***/ "./src/app/global-error-handler.ts":
/*!*****************************************!*\
  !*** ./src/app/global-error-handler.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var GlobalErrorHandler = (function () {
    function GlobalErrorHandler() {
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        var message = error.message ? error.message : error.toString();
        var url = window.location.href;
        console.log('URL: ' + url + '/ MESSAGE: ' + message);
        throw error;
    };
    return GlobalErrorHandler;
}());
exports.GlobalErrorHandler = GlobalErrorHandler;


/***/ }),

/***/ "./src/app/preloading-strategy.ts":
/*!****************************************!*\
  !*** ./src/app/preloading-strategy.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var SelectivePreloadingStrategy = (function () {
    function SelectivePreloadingStrategy() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        return route.data && route.data.preload ? load() : rxjs_1.of(null);
    };
    return SelectivePreloadingStrategy;
}());
exports.SelectivePreloadingStrategy = SelectivePreloadingStrategy;


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ngfactory.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./footer.component.scss.shim.ngstyle */ "./src/app/shared/footer/footer.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var styles_FooterComponent = [i0.styles];
var RenderType_FooterComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_FooterComponent, data: {} });
exports.RenderType_FooterComponent = RenderType_FooterComponent;
function View_FooterComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 10, "footer", [["class", "footer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 8, "div", [["class", "content has-text-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 1, "a", [["href", "https://github.com/PetrNikolas/marley"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Marley"])), (_l()(), i1.ɵted(-1, null, [" by "])), (_l()(), i1.ɵeld(8, 0, null, null, 1, "a", [["href", "http://www.petrnikolas.com/"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Petr Nikolas"])), (_l()(), i1.ɵted(-1, null, [". "]))], null, null); }
exports.View_FooterComponent_0 = View_FooterComponent_0;
function View_FooterComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), i1.ɵdid(1, 114688, null, 0, i2.FooterComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_FooterComponent_Host_0 = View_FooterComponent_Host_0;
var FooterComponentNgFactory = i1.ɵccf("app-footer", i2.FooterComponent, View_FooterComponent_Host_0, {}, {}, []);
exports.FooterComponentNgFactory = FooterComponentNgFactory;


/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss.shim.ngstyle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/shared/header/header.component.ngfactory.js":
/*!*************************************************************!*\
  !*** ./src/app/shared/header/header.component.ngfactory.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/shared/header/header.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! ./header.component */ "./src/app/shared/header/header.component.ts");
var styles_HeaderComponent = [i0.styles];
var RenderType_HeaderComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });
exports.RenderType_HeaderComponent = RenderType_HeaderComponent;
function View_HeaderComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 14, "div", [["class", "navbar-menu"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 4, "div", [["class", "navbar-start"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 3, "a", [["class", "navbar-item is-brand"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(4, 1), (_l()(), i1.ɵted(-1, null, ["Marley.js"])), (_l()(), i1.ɵeld(6, 0, null, null, 8, "div", [["class", "navbar-end"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 7, "a", [["class", "navbar-item"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 8).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(8, 671744, [[2, 4]], 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵpad(9, 1), i1.ɵdid(10, 1720320, null, 2, i2.RouterLinkActive, [i2.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), i1.ɵpad(13, 1), (_l()(), i1.ɵted(-1, null, ["Contact"]))], function (_ck, _v) { var currVal_2 = _ck(_v, 4, 0, "/"); _ck(_v, 3, 0, currVal_2); var currVal_5 = _ck(_v, 9, 0, "/contact"); _ck(_v, 8, 0, currVal_5); var currVal_6 = _ck(_v, 13, 0, "is-active"); _ck(_v, 10, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).target; var currVal_1 = i1.ɵnov(_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵnov(_v, 8).target; var currVal_4 = i1.ɵnov(_v, 8).href; _ck(_v, 7, 0, currVal_3, currVal_4); }); }
exports.View_HeaderComponent_0 = View_HeaderComponent_0;
function View_HeaderComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), i1.ɵdid(1, 114688, null, 0, i4.HeaderComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HeaderComponent_Host_0 = View_HeaderComponent_Host_0;
var HeaderComponentNgFactory = i1.ɵccf("app-header", i4.HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);
exports.HeaderComponentNgFactory = HeaderComponentNgFactory;


/***/ }),

/***/ "./src/app/shared/header/header.component.scss.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/shared/header/header.component.scss.shim.ngstyle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".navbar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navbar-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-bottom: none !important; }\n.navbar-menu[_ngcontent-%COMP%]   .is-brand[_ngcontent-%COMP%] {\n  font-size: 30px; }\n.navbar-menu[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/petrnikolasprokop/Documents/work/marley/marleyapp/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map