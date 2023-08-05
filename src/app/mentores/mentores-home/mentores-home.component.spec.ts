import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoresHomeComponent } from './mentores-home.component';

describe('MentoresHomeComponent', () => {
  let component: MentoresHomeComponent;
  let fixture: ComponentFixture<MentoresHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentoresHomeComponent]
    });
    fixture = TestBed.createComponent(MentoresHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
