import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiPokemonService } from '../api-pokemon.service';
import { PokemonDetails } from '../pokemon';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrl: './data-details.component.css',
  providers: [ApiPokemonService]
})
export class DataDetailsComponent {
  @Input() 
  pokemonID = '';
  
  pokemonDetails?: PokemonDetails; 
  pokemonImage?: string;
  pokemonImageShiny?: string;

  constructor(private apiService: ApiPokemonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemonID']) {
      this.loadPokemonDetails(changes['pokemonID'].currentValue);
    }
  }

  loadPokemonDetails(id: string): void {
    this.apiService.getPokemonDetailsById(id).subscribe((data: PokemonDetails) => {
      this.pokemonDetails = data; 
      this.pokemonImage = data.sprites.front_default; 
      this.pokemonImageShiny = data.sprites.front_shiny; 
    });
  }

  previousPokemon(): void {
    const currentId = parseInt(this.pokemonID);
    if (currentId > 1) {
      this.pokemonID = (currentId - 1).toString();
      this.loadPokemonDetails(this.pokemonID);
    }
  }

  nextPokemon(): void {
    const currentId = parseInt(this.pokemonID);
    this.pokemonID = (currentId + 1).toString();
    this.loadPokemonDetails(this.pokemonID);
  }

  isPreviousDisabled(): boolean {
    return parseInt(this.pokemonID) === 1;
  }

  isNextDisabled(): boolean {
    return parseInt(this.pokemonID) === 1025;
  }

}