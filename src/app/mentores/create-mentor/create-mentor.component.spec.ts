import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMentorComponent } from './create-mentor.component';

describe('CreateMentorComponent', () => {
  let component: CreateMentorComponent;
  let fixture: ComponentFixture<CreateMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMentorComponent]
    });
    fixture = TestBed.createComponent(CreateMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
