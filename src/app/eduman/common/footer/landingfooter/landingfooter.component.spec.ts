import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingfooterComponent } from './landingfooter.component';

describe('LandingfooterComponent', () => {
  let component: LandingfooterComponent;
  let fixture: ComponentFixture<LandingfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
