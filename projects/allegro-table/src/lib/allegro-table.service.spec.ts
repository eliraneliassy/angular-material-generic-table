import { TestBed } from '@angular/core/testing';

import { AllegroTableService } from './allegro-table.service';

describe('AllegroTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllegroTableService = TestBed.get(AllegroTableService);
    expect(service).toBeTruthy();
  });
});
