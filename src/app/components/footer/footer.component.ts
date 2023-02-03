import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Router} from '@angular/router'
import { User } from 'src/app/models/user.model';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {

  constructor(private router: Router,private cookieService:CookieService){
  }

  ngOnInit(): void{}

  hasRoute(route: string)
  {
      return this.router.url === route;
  }

  myFunction()
  {
    this.router.navigateByUrl('/');
    this.cookieService.deleteAll();
  }

}
