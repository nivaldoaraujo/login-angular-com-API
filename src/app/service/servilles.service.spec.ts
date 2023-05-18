import { TestBed } from '@angular/core/testing';

import { ServillesService } from './servilles.service';

describe('ServillesService', () => {
  let service: ServillesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServillesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
