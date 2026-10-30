import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsLandingComponent } from './admissionslanding.component';

describe('AdmissionsLandingComponent', () => {
  let component: AdmissionsLandingComponent;
  let fixture: ComponentFixture<AdmissionsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionsLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
