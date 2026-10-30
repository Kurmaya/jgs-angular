import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionProgramsComponent } from './admissionprograms.component';

describe('AdmissionProgramsComponent', () => {
  let component: AdmissionProgramsComponent;
  let fixture: ComponentFixture<AdmissionProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
