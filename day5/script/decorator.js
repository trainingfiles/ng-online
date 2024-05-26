"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(params) {
    return function (TargetClass) {
        let tc = new TargetClass();
        return class {
            constructor() {
                this.title = tc.title;
                this.selector = params.selector;
                this.template = params.template;
            }
        };
    };
}
;
// decorator
let AppComp = class AppComp {
    constructor() {
        this.title = "App Component's Title";
    }
};
AppComp = __decorate([
    Component({
        selector: "app-root",
        template: `<div> 
                    <h2>Welcome to Angular</h2> 
                    <h3>{{title}}</h3>
                    <ul>
                        <li>List Item 1</li>
                        <li>List Item 2</li>
                        <li>List Item 3</li>
                        <li>List Item 4</li>
                        <li>List Item 5</li>
                    </ul>
               </div>
               `
    })
], AppComp);
;
