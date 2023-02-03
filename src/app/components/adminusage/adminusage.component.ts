import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import { Task } from '../../models/Task';
import {CookieService} from 'ngx-cookie-service';
import { GoogleTranslateService } from 'src/app/services/google-translate.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-adminusage',
  templateUrl: './adminusage.component.html',
  styleUrls: ['./adminusage.component.css']
})
export class AdminusageComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router){}


  hasRoute(route: string)
  {
      return this.router.url === route;
  }

  myFunction()
  {
    this.router.navigateByUrl('/admin');
  }

}

