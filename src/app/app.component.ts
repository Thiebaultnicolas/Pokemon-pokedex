import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'     
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

/*
  constructor() {
    this.pokemonList =  []; 
  }
*/

    /* ❌ ❌ ❌ on peut appercevoir des gens faire ce construstor (au dessus) pour initialiser
    leurs propriété ici dans le constructeur , il est fortement deconseiller 
    d'utiliser cette facon de faire , il est recommandé de garder la logique
    du composant en dehors du construtor surtout quand on commencera a 
    récuperer les données d'un serveur distant et plus important le constucteur 
    n'ai pas fait pour ceci la methode mise en place par angular pour declarer 
    des propriétés et les liées avec notre template ca se passe dans ngOnInit 
    ci dessous.*/
    
  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
