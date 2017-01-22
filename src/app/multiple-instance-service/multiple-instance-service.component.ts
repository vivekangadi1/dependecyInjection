import { Component, OnInit } from '@angular/core';
import  { HeroService } from'./hero.service';
import { LoggerService } from'../logger.service'

@Component({
  selector: 'hero-bios',
  templateUrl: './multiple-instance-service.component.html',
  styleUrls: ['./multiple-instance-service.component.css'],
  providers: [HeroService]
})
export class MultipleInstanceServiceComponent implements OnInit {

  constructor(private logger:LoggerService) {
    logger.logInfo('Creating Hero bio Component');
   }

  ngOnInit() {
  }

}
