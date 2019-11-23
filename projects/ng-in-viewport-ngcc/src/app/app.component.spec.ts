import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { InViewportModule } from 'ng-in-viewport';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InViewportModule],
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1000 items', () => {
    const { items } = component;
    expect(items.length).toBe(1000);
  });

  it('should render list', () => {
    const list: DebugElement = fixture.debugElement.query(By.css('ul.list'));
    expect(list).not.toBe(null);
  });

  it('should render list items', () => {
    const listItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('li.list-item')
    );
    expect(listItems.length).toBe(1000);
  });
});
