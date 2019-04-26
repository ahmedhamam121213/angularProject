import { TestBed } from '@angular/core/testing';

import { SaveCatService } from './save-cat.service';

describe('SaveCatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveCatService = TestBed.get(SaveCatService);
    expect(service).toBeTruthy();
  });
});
