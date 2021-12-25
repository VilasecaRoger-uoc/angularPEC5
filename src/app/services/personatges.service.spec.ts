import { TestBed } from '@angular/core/testing';

import { PersonatgesService } from './personatges.service';

describe('PersonatgesService', () => {
  let service: PersonatgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonatgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
