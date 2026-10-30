import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingmobilemenuComponent } from './landingmobilemenu.component';

describe('LandingmobilemenuComponent', () => {
  let component: LandingmobilemenuComponent;
  let fixture: ComponentFixture<LandingmobilemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingmobilemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingmobilemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
