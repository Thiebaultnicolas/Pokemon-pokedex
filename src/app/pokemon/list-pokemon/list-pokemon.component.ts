/* pour mettre en place les deux nouveau composant j'ai utiliser depuis le terminal 
la commande ( ng generate component list-pokemon --inline-template=false ) 
 l'option inline template a false permet d'avoir le template du composant
 a part ce qui permet d'avoir deux fichier le ts et le html*/
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
 
})

export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ) {}

    ngOnInit() {
       this.pokemonService.getPokemonList()
        .subscribe(pokemonList => this.pokemonList = pokemonList);
    }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id])
  }
}


