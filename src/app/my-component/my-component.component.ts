import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiPokemonService } from '../api-pokemon.service';
import { IPokemon } from '../model';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [ApiPokemonService]
})
export class MyComponentComponent {
  id: string = '';
  pokemons : Pokemon[] = [];
  selectedPokemonId = '';
  searchedPokemon = '';
  searchString = '';
  searchId = '';

  constructor(private apiService: ApiPokemonService) {
  }

  ngOnInit(): void {
    this.apiService.getPokemonsList().subscribe((data) => {
      data.results.forEach((pokemon: IPokemon, index: number) => {
        this.pokemons.push(new Pokemon(""+(index+1), pokemon.name))
      });
    });
  }

  codeToExecute(){
    this.apiService.getPokemonDetailsById(this.selectedPokemonId).subscribe((data) => {
      this.searchedPokemon = data.name
    });
  }
}
