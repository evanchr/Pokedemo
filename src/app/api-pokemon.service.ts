import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetails, PokemonsList } from './pokemon';

const apiUrl = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  constructor(private http: HttpClient) { 
  }

  getPokemonsList(): Observable<PokemonsList>{
    return this.http.get<PokemonsList>(`${apiUrl}/pokemon?limit=1025&offset=0`)
  }

  getPokemonDetailsById(id: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${apiUrl}/pokemon/${id}`)
  }
}
