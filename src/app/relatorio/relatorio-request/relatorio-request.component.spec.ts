import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioRequestComponent } from './relatorio-request.component';

describe('RelatorioRequestComponent', () => {
  let component: RelatorioRequestComponent;
  let fixture: ComponentFixture<RelatorioRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioRequestComponent]
    });
    fixture = TestBed.createComponent(RelatorioRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
