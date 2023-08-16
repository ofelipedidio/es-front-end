import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPerfilComponent } from './display-perfil.component';

describe('DisplayPerfilComponent', () => {
  let component: DisplayPerfilComponent;
  let fixture: ComponentFixture<DisplayPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPerfilComponent]
    });
    fixture = TestBed.createComponent(DisplayPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
