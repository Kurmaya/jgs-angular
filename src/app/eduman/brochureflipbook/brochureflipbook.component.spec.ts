import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureFilpBookmainComponent } from './brochureflipbook.component';

describe('BrochureFilpBookmainComponent', () => {
  let component: BrochureFilpBookmainComponent;
  let fixture: ComponentFixture<BrochureFilpBookmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochureFilpBookmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrochureFilpBookmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
