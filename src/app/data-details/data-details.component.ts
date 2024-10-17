import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiPokemonService } from '../api-pokemon.service';
import { PokemonDetails } from '../model';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrl: './data-details.component.css'
})
export class DataDetailsComponent {
  @Input() pokemondID = '';
  
  pokemonDetails?: PokemonDetails; 
  pokemonImage?: string;
  pokemonImageShiny?: string;

  constructor(private apiService: ApiPokemonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemondID']) {
      this.loadPokemonDetails(changes['pokemondID'].currentValue);
    }
  }

  loadPokemonDetails(id: string): void {
    this.apiService.getPokemonDetailsById(id).subscribe((data: PokemonDetails) => {
      this.pokemonDetails = data; 
      this.pokemonImage = data.sprites.front_default; 
      this.pokemonImageShiny = data.sprites.front_shiny; 
    });
  }

}