import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqLandingComponent } from './faqlanding.component';

describe('FaqLandingComponent', () => {
  let component: FaqLandingComponent;
  let fixture: ComponentFixture<FaqLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
