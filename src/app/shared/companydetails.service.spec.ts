import { TestBed } from '@angular/core/testing';

import { CompanydetailsService } from './companydetails.service';

describe('CompanydetailsService', () => {
  let service: CompanydetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanydetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
