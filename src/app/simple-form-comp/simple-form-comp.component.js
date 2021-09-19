"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleFormCompComponent = void 0;
var core_1 = require("@angular/core");
var SimpleFormCompComponent = /** @class */ (function () {
    function SimpleFormCompComponent() {
    }
    SimpleFormCompComponent.prototype.onSubmit = function (f) {
        console.log(f.value); // { first: '', last: '' }
        console.log(f.valid); // false
    };
    SimpleFormCompComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-simple-form-comp',
            templateUrl: './simple-form-comp.component.html',
        })
    ], SimpleFormCompComponent);
    return SimpleFormCompComponent;
}());
exports.SimpleFormCompComponent = SimpleFormCompComponent;
