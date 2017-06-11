import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROS: Hero[] = [
  {id: 11,name: "Ogiwara"},
  {id: 12,name: "Nain"},
  {id: 13,name: "Shadow"},
  {id: 14,name: "fami"},
  {id: 15,name: "BIOS"},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular';
  heros = HEROS;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
      this.selectedHero = hero;
  }
}