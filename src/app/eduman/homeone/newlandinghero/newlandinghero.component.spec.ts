import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlandingheroComponent } from './newlandinghero.component';

describe('NewlandingheroComponent', () => {
  let component: NewlandingheroComponent;
  let fixture: ComponentFixture<NewlandingheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlandingheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewlandingheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
