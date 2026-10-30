import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewseducationComponent } from './newseducation.component';

describe('NewseducationComponent', () => {
  let component: NewseducationComponent;
  let fixture: ComponentFixture<NewseducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewseducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewseducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
