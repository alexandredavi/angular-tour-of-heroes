import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import {Router} from "@angular/router";

const HEROES: Hero[] = [];

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  goToDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
