import { TestBed } from '@angular/core/testing';

import { Iproducts } from './iproducts';

describe('Iproducts', () => {
  let service: Iproducts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Iproducts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
