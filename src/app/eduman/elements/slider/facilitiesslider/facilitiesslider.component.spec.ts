import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiessliderComponent } from './facilitiesslider.component';

describe('FacilitiessliderComponent', () => {
  let component: FacilitiessliderComponent;
  let fixture: ComponentFixture<FacilitiessliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitiessliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiessliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
