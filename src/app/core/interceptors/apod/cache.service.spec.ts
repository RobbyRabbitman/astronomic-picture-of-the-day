import { TestBed } from '@angular/core/testing';
import { CacheInterceptor } from './cache.service';

describe('ApodService', () => {
  let service: CacheInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
