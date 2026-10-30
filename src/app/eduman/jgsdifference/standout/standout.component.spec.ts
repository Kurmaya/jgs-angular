import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandoutComponent } from './standout.component';

describe('StandoutComponent', () => {
  let component: StandoutComponent;
  let fixture: ComponentFixture<StandoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
