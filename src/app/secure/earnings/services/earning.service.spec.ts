import { TestBed, inject } from '@angular/core/testing';

import { EarningService } from './earning.service';

describe('EarningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EarningService]
    });
  });

  it('should be created', inject([EarningService], (service: EarningService) => {
    expect(service).toBeTruthy();
  }));
});
