import { TestBed } from '@angular/core/testing';

import { Buy } from './buy';

describe('Buy', () => {
  let service: Buy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Buy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
