import { Component } from '@angular/core';
import { IPokemon, Pokemon } from '../pokemon';
import { ApiPokemonService } from '../api-pokemon.service';
import { PokemonShareInfosService } from '../pokemon-share-infos.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  //id: string = '';
  //searchedPokemon = '';
  //searchId = '';
  pokemons: Pokemon[] = [];
  selectedPokemonId = '';
  searchString = '';

  constructor(private apiService: ApiPokemonService, private pokemonShareInfos: PokemonShareInfosService) {
    this.pokemonShareInfos.getActualPokemonId().subscribe(actualId => {
      this.selectedPokemonId = actualId;
    })
  }

  ngOnInit(): void {
    this.apiService.getPokemonsList().subscribe((data) => {
      data.results.forEach((pokemon: IPokemon, index: number) => {
        this.pokemons.push(new Pokemon("" + (index + 1), pokemon.name))
      });
    });
  }

  update(id: string) {
    this.pokemonShareInfos.setActualPokemonId(id);
  }
}
