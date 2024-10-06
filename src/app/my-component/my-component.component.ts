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


  constructor() {
    this.pokemons.push(new Pokemon('1', 'Pikachu'));
    this.pokemons.push(new Pokemon('2', 'Bulbizarre'));
    this.pokemons.push(new Pokemon('3', 'Salamèche'));
    this.pokemons.push(new Pokemon('4', 'Dracaufeu'));
    this.pokemons.push(new Pokemon('5', 'Tortank'));
  }
}
