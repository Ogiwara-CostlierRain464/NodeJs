import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "./hero";
import { Location } from '@angular/common';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  styleUrls: ['./hero-detail.component.css'],
  templateUrl: './hero-detail.component.html'
})

//One class per one file is recommended.
export class HeroDetailComponent implements OnInit{
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params)=> this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void{
      this.location.back();
  }
}
