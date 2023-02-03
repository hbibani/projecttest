import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { User } from '../../models/user.model';
import {Router} from '@angular/router'
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit  {

  users: User[] = [];
  constructor(private router: Router,private userServ: UserService,private cookieService:CookieService){}

  ngOnInit(): void {
    if(!(this.cookieService.get('type')=='admin'))
    {
      this.router.navigateByUrl('/');
    }
    this.userServ.getAll().subscribe((users) => (this.users = users));
  }

  deleteTask(user:User)
  {
    console.log('hello');
    this.userServ
      .delete(user)
      .subscribe(
        () => (this.users = this.users.filter((t) => t.id !== user.id))
      );
  }

  toggle(user:User)
  {
    this.router.navigateByUrl('/adminusage');
    console.log('User id : ' + user.id.toString() )
    this.cookieService.set('id', user.id.toString());
  }

}
