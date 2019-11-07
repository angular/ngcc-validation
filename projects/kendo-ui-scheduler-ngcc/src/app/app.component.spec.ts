import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SchedulerModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render kendo-scheduler', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('kendo-scheduler')).toBeDefined();
  }));
});
