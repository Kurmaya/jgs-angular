import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlandingpageComponent } from './newlandingpage.component';

describe('NewlandingpageComponent', () => {
  let component: NewlandingpageComponent;
  let fixture: ComponentFixture<NewlandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlandingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
