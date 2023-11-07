import { Injectable } from '@angular/core';
import { userLogin } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: userLogin[] = [];
  constructor() { 
    this.users.push({
      mail: "ivgurobleshe@ittepic.edu.mx",
      pass: "1234",
    });
  
  }

  public getUsers(): userLogin[] {
    return this.users;
  }

  public validateUser(mail: string, pass: string): boolean {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].mail === mail && this.users[i].pass === pass) {
        return true;
      }
    }
    return false;
  }
}
