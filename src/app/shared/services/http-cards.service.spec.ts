import { TestBed } from '@angular/core/testing';

import { HttpCardsService } from './http-cards.service';

describe('HttpCardsService', () => {
  let service: HttpCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
