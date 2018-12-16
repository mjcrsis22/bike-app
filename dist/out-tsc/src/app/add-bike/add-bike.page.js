var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var AddBikePage = /** @class */ (function () {
    function AddBikePage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    AddBikePage.prototype.ngOnInit = function () {
    };
    AddBikePage.prototype.save = function () {
        var bike = {
            Nombre: this.Nombre,
            Modelo: this.Modelo,
            Color: this.Color,
            Rodado: this.Rodado,
            Precio: this.Precio
        };
        this.viewCtrl.dismiss(bike);
    };
    AddBikePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddBikePage = __decorate([
        Component({
            selector: 'app-add-bike',
            templateUrl: './add-bike.page.html',
            styleUrls: ['./add-bike.page.scss'],
        }),
        __metadata("design:paramtypes", [ModalController])
    ], AddBikePage);
    return AddBikePage;
}());
export { AddBikePage };
//# sourceMappingURL=add-bike.page.js.map