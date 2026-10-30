import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerymainComponent1 } from './gallerymain1.component';

describe('GallerymainComponent', () => {
  let component: GallerymainComponent1;
  let fixture: ComponentFixture<GallerymainComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerymainComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerymainComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
