import { TestBed } from '@angular/core/testing';

import { ExchCompService } from './exchcomp.service';

describe('ExchcompService', () => {
  let service: ExchCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
