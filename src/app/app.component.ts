import { Component } from '@angular/core';
import { UserService } from './user.service';
import { LoggerService } from './logger.service'
import { UserContextService } from './user-context.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,UserContextService,LoggerService]
})
export class AppComponent {
  title = 'app works!';
  private userId:number =1;
  constructor(private UserContext:UserContextService,private logger:LoggerService){
    UserContext.loadUser(this.userId);
    logger.logInfo('App Initialised');
  }
}
