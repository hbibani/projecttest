import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAdmin: boolean = false;
  static user: User;

  constructor() { 
  }

  setIsAdmin()
  {
    this.isAdmin = true;
  }

  setIsAdminFalse()
  {
    this.isAdmin = false;
  }

  checkIsAdmin(): boolean{
    return this.isAdmin;
  }
}
