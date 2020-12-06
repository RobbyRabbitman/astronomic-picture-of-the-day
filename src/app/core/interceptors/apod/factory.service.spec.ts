import { TestBed } from '@angular/core/testing';

import { ApodFactoryInterceptor } from './factory.service';

describe('FactoryService', () => {
  let service: ApodFactoryInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApodFactoryInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
