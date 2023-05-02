import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center">Ajouter un pokémon</h2>
    <h5 class="center">(Dans l'img remplace xxx par 056/054/270 etc...)</h5>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class AddPokemonComponent implements OnInit{

    pokemon: Pokemon;
    
    ngOnInit() {
      this.pokemon = new Pokemon();
    }
    
}
