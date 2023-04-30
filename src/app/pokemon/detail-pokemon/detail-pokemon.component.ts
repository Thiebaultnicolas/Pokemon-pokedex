/* pour mettre en place les deux nouveau composant j'ai utiliser depuis le terminal 
la commande ( ng generate component detail-pokemon --inline-template=false ) 
 l'option inline template a false permet d'avoir le template du composant
 a part ce qui permet d'avoir deux fichier le ts et le html*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor (
    private route: ActivatedRoute,
    private router:Router,
    private pokemonService: PokemonService
    ) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList() {
     this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
     this.router.navigate(['/edit/pokemon', pokemon.id]);
  }

}
