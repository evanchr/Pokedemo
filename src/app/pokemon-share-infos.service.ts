import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonShareInfosService {
  public actualPokemonId = new Subject<string>();

  getActualPokemonId(): Subject<string>{
    return this.actualPokemonId;
  }
  
  setActualPokemonId(newId: string){
    this.actualPokemonId.next(newId);
  }
}
