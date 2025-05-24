import { TestBed } from '@angular/core/testing';

import { ComparaisonService } from './comparaison.service';

describe('ComparaisonService', () => {
  let service: ComparaisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparaisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
