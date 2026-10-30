import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JgsdifferencemainComponent } from './jgsdifferencemain.component';

describe('JgsdifferencemainComponent', () => {
  let component: JgsdifferencemainComponent;
  let fixture: ComponentFixture<JgsdifferencemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JgsdifferencemainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JgsdifferencemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
