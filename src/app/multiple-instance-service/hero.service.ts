import { Injectable } from '@angular/core';
import { Hero } from './hero'

@Injectable()
export class HeroService {

    constructor() { }
    private heroes :Array<Hero>= [
      new Hero(1,'vivek','I am The best','2223156332'),
      new Hero(2,'Zlatan Ibramvoich','I am Just Warming up','999999999'),
      new Hero(3,'Ronaldo','I am the best footbal Player of the worl','54863214566'),
    ]

    getElementById(UserId:number){
      return this.heroes.find(hero => hero.id === UserId);
    }

    getAllHeroes():Array<Hero>{
      return this.heroes;
    }
}
