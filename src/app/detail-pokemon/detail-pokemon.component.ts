/* pour mettre en place les deux nouveau composant j'ai utiliser depuis le terminal 
la commande ( ng generate component list-pokemon --inline-template=false ) 
 l'option inline template a false permet d'avoir le template du composant
 a part ce qui permet d'avoir deux fichier  le ts et le html*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent {

}
