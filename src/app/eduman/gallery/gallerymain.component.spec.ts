import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerymainComponent } from './gallerymain.component';

describe('GallerymainComponent', () => {
  let component: GallerymainComponent;
  let fixture: ComponentFixture<GallerymainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerymainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerymainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
