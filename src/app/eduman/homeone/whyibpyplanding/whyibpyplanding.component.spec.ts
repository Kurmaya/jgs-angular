import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyibpypLandingComponent } from './whyibpyplanding.component';

describe('WhyibpypLandingComponent', () => {
  let component: WhyibpypLandingComponent;
  let fixture: ComponentFixture<WhyibpypLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyibpypLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyibpypLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
