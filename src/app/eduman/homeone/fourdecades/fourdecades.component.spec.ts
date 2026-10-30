import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourdecadesComponent } from './fourdecades.component';

describe('FourdecadesComponent', () => {
  let component: FourdecadesComponent;
  let fixture: ComponentFixture<FourdecadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourdecadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourdecadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
