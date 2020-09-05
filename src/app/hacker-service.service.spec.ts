import { TestBed } from '@angular/core/testing';

import { HackerServiceService } from './hacker-service.service';

describe('HackerServiceService', () => {
  let service: HackerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
