/* pour mettre en place les deux nouveau composant j'ai utiliser depuis le terminal 
la commande ( ng generate component detail-pokemon --inline-template=false ) 
 l'option inline template a false permet d'avoir le template du composant
 a part ce qui permet d'avoir deux fichier le ts et le html*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor (private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if (pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

  goToPokemonList() {
     this.router.navigate(['/pokemons']);
  }

}
