import { TestBed } from '@angular/core/testing';
import { BikesService } from './bikes.service';
describe('BikesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BikesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=bikes.service.spec.js.map