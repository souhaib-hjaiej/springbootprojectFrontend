import { TestBed } from '@angular/core/testing';

import { HistoriqueAchatsService } from './historique-achats.service';

describe('HistoriqueAchatsService', () => {
  let service: HistoriqueAchatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueAchatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
