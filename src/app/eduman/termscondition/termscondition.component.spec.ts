import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsconditionmainComponent } from './termscondition.component';

describe('TermsconditionmainComponent', () => {
  let component: TermsconditionmainComponent;
  let fixture: ComponentFixture<TermsconditionmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsconditionmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsconditionmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
