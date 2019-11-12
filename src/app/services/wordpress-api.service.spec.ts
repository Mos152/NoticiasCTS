import { TestBed } from '@angular/core/testing';

import { WordpressAPIService } from './wordpress-api.service';

describe('WordpressAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordpressAPIService = TestBed.get(WordpressAPIService);
    expect(service).toBeTruthy();
  });
});
