import { TestBed } from '@angular/core/testing';

import { ServizioDatiService } from './servizio-dati.service';

describe('ServizioDatiService', () => {
  let service: ServizioDatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioDatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
