import { TestBed } from '@angular/core/testing';

import { PokemonShareInfosService } from './pokemon-share-infos.service';

describe('PokemonShareInfosService', () => {
  let service: PokemonShareInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonShareInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
