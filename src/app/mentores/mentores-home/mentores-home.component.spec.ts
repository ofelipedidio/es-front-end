import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSolicitada } from './mentores-home.component';

describe('TagSolicitada', () => {
  let component: TagSolicitada;
  let fixture: ComponentFixture<TagSolicitada>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagSolicitada]
    });
    fixture = TestBed.createComponent(TagSolicitada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
