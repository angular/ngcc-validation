import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { GridDemoComponent } from './grid-demo.component';
import { GridModule } from '@progress/kendo-angular-grid';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridDemoComponent
      ],
      imports: [
        GridModule
      ]
    }).compileComponents();
  }));

  it('should render kendo-grid', fakeAsync(() => {
    const fixture = TestBed.createComponent(GridDemoComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('kendo-grid')).toBeDefined();
  }));
});
