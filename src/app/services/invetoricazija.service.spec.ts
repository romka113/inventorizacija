import { TestBed } from '@angular/core/testing';

import { InvetoricazijaService } from './invetoricazija.service';

describe('InvetoricazijaService', () => {
  let service: InvetoricazijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvetoricazijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
