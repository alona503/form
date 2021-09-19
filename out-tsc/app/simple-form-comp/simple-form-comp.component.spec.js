import { TestBed } from '@angular/core/testing';
import { SimpleFormCompComponent } from './simple-form-comp.component';
describe('SimpleFormCompComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SimpleFormCompComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleFormCompComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=simple-form-comp.component.spec.js.map