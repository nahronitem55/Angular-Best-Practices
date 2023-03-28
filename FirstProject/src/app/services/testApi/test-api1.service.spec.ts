import { TestBed } from '@angular/core/testing';

import { TestApi1Service } from './test-api1.service';

describe('TestApi1Service', () => {
  let service: TestApi1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestApi1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
