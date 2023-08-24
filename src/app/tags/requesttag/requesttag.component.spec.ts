import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesttagComponent } from './requesttag.component';

describe('RequesttagComponent', () => {
  let component: RequesttagComponent;
  let fixture: ComponentFixture<RequesttagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequesttagComponent]
    });
    fixture = TestBed.createComponent(RequesttagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
