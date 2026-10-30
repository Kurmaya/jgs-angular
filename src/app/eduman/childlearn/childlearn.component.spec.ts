import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLearnComponent } from './childlearn.component';

describe('ChildLearnComponent', () => {
  let component: ChildLearnComponent;
  let fixture: ComponentFixture<ChildLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
