import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

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
  private router: Router,
  private pokemonService: PokemonService,

  ) { }

 ngOnInit(): void {
   this.pokemons$ = this.searchTerms.pipe(
     //{..."a"."ab"."abz".."ab"..."abc"......}
     debounceTime(300),
     //{......"ab"..."ab"..."abc"......}
     distinctUntilChanged(),
     //{......"ab".........."abc"......}
     switchMap((term) => this.pokemonService.searchPokemonList(term))// concatMap / mergeMap / switchMap (dans la plus-part des cas utiliser switchMap)
     //{.....pokemonList(ab)........pokemonList(abc)......}
     
   );
 }

 search(term: string) {
   this.searchTerms.next(term);
 }

 goToDetail(pokemon: Pokemon) {
   const link = ['/pokemon', pokemon.id];
   this.router.navigate(link);
 }
}
