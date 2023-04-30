/* pour mettre en place les deux nouveau composant j'ai utiliser depuis le terminal 
la commande ( ng generate component list-pokemon --inline-template=false ) 
 l'option inline template a false permet d'avoir le template du composant
 a part ce qui permet d'avoir deux fichier le ts et le html*/

import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
 
})

export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;
}
