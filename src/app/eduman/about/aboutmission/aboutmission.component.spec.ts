import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmissionComponent } from './aboutmission.component';

describe('AboutmissionComponent', () => {
  let component: AboutmissionComponent;
  let fixture: ComponentFixture<AboutmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
