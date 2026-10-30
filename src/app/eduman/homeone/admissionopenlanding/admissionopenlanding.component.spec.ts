import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionopenLandingComponent } from './admissionopenlanding.component';

describe('AdmissionopenLandingComponent', () => {
  let component: AdmissionopenLandingComponent;
  let fixture: ComponentFixture<AdmissionopenLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionopenLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionopenLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
