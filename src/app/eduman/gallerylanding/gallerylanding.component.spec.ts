import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerylandingComponent } from './gallerylanding.component';

describe('GallerylandingComponent', () => {
  let component: GallerylandingComponent;
  let fixture: ComponentFixture<GallerylandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerylandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerylandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
