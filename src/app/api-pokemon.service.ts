import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon, PokemonDetails, PokemonsList } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { 
  }

  getPokemonsList(): Observable<PokemonsList>{
    return this.http.get<PokemonsList>(`${this.apiUrl}/pokemon?limit=1025&offset=0`)
  }

  getPokemonDetailsById(id: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.apiUrl}/pokemon/${id}`)
  }
}
