import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SimpleFormCompComponent = class SimpleFormCompComponent {
    onSubmit(f) {
        console.log(f.value); // { first: '', last: '' }
        console.log(f.valid); // false
    }
};
SimpleFormCompComponent = __decorate([
    Component({
        selector: 'app-simple-form-comp',
        templateUrl: './simple-form-comp.component.html',
    })
], SimpleFormCompComponent);
export { SimpleFormCompComponent };
//# sourceMappingURL=simple-form-comp.component.js.map