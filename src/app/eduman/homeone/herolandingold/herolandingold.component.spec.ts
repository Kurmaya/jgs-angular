import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLandingOldComponent } from './herolandingold.component';

describe('HeroLandingOldComponent', () => {
  let component: HeroLandingOldComponent;
  let fixture: ComponentFixture<HeroLandingOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroLandingOldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroLandingOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
