import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourdecadesLandingComponent } from './fourdecadeslanding.component';

describe('FourdecadesLandingComponent', () => {
  let component: FourdecadesLandingComponent;
  let fixture: ComponentFixture<FourdecadesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourdecadesLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourdecadesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
