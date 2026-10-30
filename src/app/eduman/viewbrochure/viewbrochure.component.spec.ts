import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBrochuremainComponent } from './viewbrochure.component';

describe('ViewBrochuremainComponent', () => {
  let component: ViewBrochuremainComponent;
  let fixture: ComponentFixture<ViewBrochuremainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBrochuremainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBrochuremainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
