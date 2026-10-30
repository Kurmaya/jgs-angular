import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyStandardsComponent } from './legacystandards.component';

describe('LegacyStandardsComponent', () => {
  let component: LegacyStandardsComponent;
  let fixture: ComponentFixture<LegacyStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegacyStandardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
