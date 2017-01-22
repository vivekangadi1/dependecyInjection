import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  getElementById(UserId:number):any{
    return{name:'Vivek',role:'boss'}
  }
}
