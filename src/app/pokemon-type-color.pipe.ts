/* pour mettre en place un nouveau pipe personalisé j'ai utilisé la 
commande (ng generate pipe pokemon-type-color) depuis le terminal*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

/*au niveau du typage on prend un type qui est une string en entrée et 
on vas la transformer en une class qui est aussi une string (type: string : string) */

/*quand on vas appliqué notre pipe pokemon-type-color on vas recevoir en entrée 
le type du pokemon qui vas être soit feu soit eau etc.. et ce que l'on vas faire c'est transformé
ce type en une couleur*/

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'red lighten-1';
        break;
      case 'Eau':
        color = 'blue lighten-1';
        break;
      case 'Plante':
        color = 'green lighten-1';
        break;
      case 'Insecte':
        color = 'brown lighten-1';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        break;
      case 'Vol':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
        color = 'pink lighten-4';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }
/* ici on retourne une class qui nous viens de matérialize (chip) elle permet d'afficher un petit
rond de couleur et on rajoute la couleur (color que l'on as determiné juste au dessus) en fonction
du type du pokemon */

    return 'chip ' + color;
  
  }
}


