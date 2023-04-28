import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ pokemonList[0] }}!</h1>`     
})
export class AppComponent implements OnInit {
  pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];

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
  }
}
