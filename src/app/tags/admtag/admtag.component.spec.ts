import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmtagComponent } from './admtag.component';

describe('AdmtagComponent', () => {
  let component: AdmtagComponent;
  let fixture: ComponentFixture<AdmtagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmtagComponent]
    });
    fixture = TestBed.createComponent(AdmtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
