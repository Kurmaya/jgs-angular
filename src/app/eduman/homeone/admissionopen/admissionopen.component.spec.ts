import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionopenComponent } from './admissionopen.component';

describe('AdmissionopenComponent', () => {
  let component: AdmissionopenComponent;
  let fixture: ComponentFixture<AdmissionopenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionopenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
