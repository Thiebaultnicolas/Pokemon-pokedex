import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  //{..."a".."ab"..."abz".."ab"..."abc"......}
  searchTerms = new Subject<string>();
  //{...pokemonList(a)..pokemonList(ab)...pokemonList(abz)..}
  pokemons$:  Observable<Pokemon[]>;

 constructor (
  private router: Router

  ) {

   }

 ngOnInit(): void {
   
 }

 search(term: string) {
   this.searchTerms.next(term);
 }

 goToDetail(pokemon: Pokemon) {
   const link = ['/pokemon', pokemon.id];
   this.router.navigate(link);
 }
}
