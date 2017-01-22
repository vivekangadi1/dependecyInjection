import { Injectable } from '@angular/core';
import { HeroService } from'./hero.service';
import { Hero } from './hero' 

@Injectable()
export class HeroCacheService {
  hero:Hero;
  constructor(private heroService:HeroService) { }

  fetchCachedHero(id:number){
    if(!this.hero){
    this.hero=this.heroService.getElementById(id);
    }
    return this.hero;
  }


}
