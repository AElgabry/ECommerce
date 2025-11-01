import { TestBed } from '@angular/core/testing';

import { Callbrands } from './callbrands';

describe('Callbrands', () => {
  let service: Callbrands;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Callbrands);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
