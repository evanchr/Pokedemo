import { Component } from '@angular/core';
import { IPokemon, Pokemon } from '../pokemon';
import { ApiPokemonService } from '../api-pokemon.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [ApiPokemonService]
})
export class MyComponentComponent {
  //id: string = '';
  //searchedPokemon = '';
  //searchId = '';
  pokemons : Pokemon[] = [];
  selectedPokemonId?: string;
  searchString = '';

  constructor(private apiService: ApiPokemonService) {}

  ngOnInit(): void {
    this.apiService.getPokemonsList().subscribe((data) => {
      data.results.forEach((pokemon: IPokemon, index: number) => {
        this.pokemons.push(new Pokemon(""+(index+1), pokemon.name))
      });
    });
  }
}
