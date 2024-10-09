import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
  id: string = '';
  pokemons : Pokemon[] = [];
  selectedPokemonId: string = '';
  searchString: string | undefined;

  constructor() {
    this.pokemons.push(new Pokemon('1', 'Pikachu'));
    this.pokemons.push(new Pokemon('2', 'Bulbizarre'));
    this.pokemons.push(new Pokemon('3', 'Salamèche'));
    this.pokemons.push(new Pokemon('4', 'Reptincel'));
    this.pokemons.push(new Pokemon('5', 'Dracaufeu'));
    this.pokemons.push(new Pokemon('6', 'Carapuce'));
    this.pokemons.push(new Pokemon('7', 'Carabaffe'));
    this.pokemons.push(new Pokemon('8', 'Tortank'));
  }

  codeToExecute(){
    console.log(this.selectedPokemonId)
  }
}
