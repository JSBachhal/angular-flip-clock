import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSBAngularFlipClockComponent } from './jsb-angular-flip-clock.component';

describe('JSBAngularFlipClockComponent', () => {
  let component: JSBAngularFlipClockComponent;
  let fixture: ComponentFixture<JSBAngularFlipClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSBAngularFlipClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSBAngularFlipClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
