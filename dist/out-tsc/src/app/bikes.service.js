var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
var BikesService = /** @class */ (function () {
    function BikesService(http) {
        this.http = http;
        this.apiLink = 'http://localhost:3000/api';
        this.data = null;
    }
    BikesService.prototype.getBikes = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.apiLink + '/bikes/')
                .pipe(map(function (res) { return res.json(); }))
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    BikesService.prototype.getBike = function (id) {
        this.http.get(this.apiLink + '/bikes/get/' + id).subscribe(function (res) {
            console.log(res.json());
        });
    };
    BikesService.prototype.createBike = function (Bike) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.apiLink + '/bikes/add/', JSON.stringify(Bike), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    BikesService.prototype.editBike = function (Bike) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.put(this.apiLink + '/bikes/edit/', JSON.stringify(Bike), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    BikesService.prototype.deleteReview = function (id) {
        this.http.delete(this.apiLink + '/bikes/delete/' + id).subscribe(function (res) {
            console.log(res.json());
        });
    };
    BikesService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http])
    ], BikesService);
    return BikesService;
}());
export { BikesService };
//# sourceMappingURL=bikes.service.js.map