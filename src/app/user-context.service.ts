import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { LoggerService } from './logger.service'

@Injectable()
export class UserContextService {
  name : string;
  role : string;
  loggedInSince:Date;
  constructor( private logger:LoggerService, private user:UserService) {
    this.loggedInSince=new Date()
   }

   loadUser(userID:Number){
     let user=this.user.getElementById(12);
     this.name=user.name;
     this.role=user.role;

     this.logger.logDebug('loaded User');
   }
}
