import { TestBed } from '@angular/core/testing';

import { ManagecompaniesService } from './managecompanies.service';

describe('ManagecompaniesService', () => {
  let service: ManagecompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagecompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
