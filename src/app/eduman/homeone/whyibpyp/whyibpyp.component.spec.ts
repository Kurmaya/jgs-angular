import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyibpypComponent } from './whyibpyp.component';

describe('WhyibpypComponent', () => {
  let component: WhyibpypComponent;
  let fixture: ComponentFixture<WhyibpypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyibpypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyibpypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
