import { TestBed } from '@angular/core/testing';

import { MentoresServiceService } from './mentores-service.service';

describe('MentoresServiceService', () => {
  let service: MentoresServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentoresServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
