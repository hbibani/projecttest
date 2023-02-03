import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Subscription, takeLast} from 'rxjs';
import {Router} from '@angular/router'
import { GoogleTranslateService } from 'src/app/services/google-translate.service';
import { Task } from 'src/app/models/Task';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription


  constructor(private uiService: UiService, private router: Router, 
    private googleTranslationService: GoogleTranslateService, private cookieService:CookieService, 
    private userServ: UserService, private TaskServ: TaskService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void{
    console.log(`Header ${this.showAddTask}`);
  }

  toggleAddTask()
  {

    const newTask: Task = {
      text: "Hello",
      day: "Gello",
      reminder: true,
    };

    if(this.cookieService.get('language') == 'english')
    {
      this.cookieService.set('language', 'russian');
    }
    else if(this.cookieService.get('language') == 'russian')
    {
      this.cookieService.set('language', 'english');
    }
   
    var translate: Boolean = false;

    if(this.cookieService.get('translate') == '0')
    {
      var data: User = {
        id: parseInt(this.cookieService.get('id')),
        username: this.cookieService.get('username'),
        password: this.cookieService.get('password'),
        translate: true,
      }

      this.userServ.updateTaskReminder(data).subscribe();
      this.cookieService.set('translate', '1');
    }

    window.location.reload();
  }

  hasRoute(route: string)
  {
      return this.router.url === route;
  }

}
