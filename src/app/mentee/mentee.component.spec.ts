import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeComponent } from './mentee.component';

describe('MenteeComponent', () => {
  let component: MenteeComponent;
  let fixture: ComponentFixture<MenteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenteeComponent]
    });
    fixture = TestBed.createComponent(MenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
