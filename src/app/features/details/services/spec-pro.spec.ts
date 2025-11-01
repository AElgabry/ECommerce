import { TestBed } from '@angular/core/testing';

import { SpecPro } from './spec-pro';

describe('SpecPro', () => {
  let service: SpecPro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecPro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
