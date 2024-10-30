import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiPokemonService } from '../api-pokemon.service';
import { PokemonDetails } from '../pokemon';
import { PokemonShareInfosService } from '../pokemon-share-infos.service';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent {
  pokemonID = '1';
  pokemonDetails?: PokemonDetails;
  pokemonImage?: string;
  pokemonImageShiny?: string;
  cardBack = false;

  constructor(private apiService: ApiPokemonService, private pokemonShareInfos: PokemonShareInfosService) {
    this.pokemonShareInfos.getActualPokemonId().subscribe(actualId => {
      this.pokemonID = actualId;
      this.loadPokemonDetails(this.pokemonID);
    })
  }

  ngOnInit(): void {
    this.loadPokemonDetails(this.pokemonID);
  }

  loadPokemonDetails(id: string): void {
    this.apiService.getPokemonDetailsById(id).subscribe((data: PokemonDetails) => {
      this.cardBack = false;
      this.pokemonDetails = data;
      this.pokemonImage = data.sprites.front_default;
      this.pokemonImageShiny = data.sprites.front_shiny;
    });
  }

  previousPokemon(): void {
    const currentId = parseInt(this.pokemonID);
    if (currentId === 1) {
      this.pokemonShareInfos.setActualPokemonId('1025');
    } else {
      this.pokemonShareInfos.setActualPokemonId((currentId - 1).toString());
    }
  }

  nextPokemon(): void {
    const currentId = parseInt(this.pokemonID);
    if (currentId === 1025) {
      this.pokemonShareInfos.setActualPokemonId('1');
    } else {
      this.pokemonShareInfos.setActualPokemonId((currentId + 1).toString());
    }
  }

  activateBackCard(): void {
    this.cardBack = !this.cardBack;
  }
}