import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import { Task } from '../../models/Task';
import {CookieService} from 'ngx-cookie-service';
import { GoogleTranslateService } from 'src/app/services/google-translate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  translatedText: string;
  translatedDate: string; 
  targetLang: String;
  userPage: boolean = true;

  constructor(private taskService: TaskService, private cookieService:CookieService, 
    private googleTranslationService: GoogleTranslateService, private router: Router){}


  ngOnInit(): void{

    if(!(this.cookieService.get('type')=='user') && !(this.cookieService.get('type')=='admin'))
    {
      this.router.navigateByUrl('/');
    }

    if(this.cookieService.get('type')=='admin')
    {
      this.userPage = false;
    }
        
    if(this.cookieService.get('language') == 'russian')
    {
      this.targetLang = 'ru';
    }
    else
    {
      this.targetLang = 'en';
    }

    this.taskService.getAll(this.cookieService.get('id')).subscribe(tasks => {
      tasks.forEach(element => {
        let model={"q": [element.text],"target": this.targetLang};
        this.googleTranslationService.translate(model).subscribe((response:any)=>{
          this.translatedText = response.data.translations[0].translatedText;
          element.text = this.translatedText})
          this.tasks.push(element);});
    })

  }

  deleteTask(task:Task)
  {
    this.taskService
      .delete(task.id)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task:Task)
  {
      task.reminder = !task.reminder;
      this.taskService.updateTaskReminder(task).subscribe();  
  }

  addTask(task: Task)
  {
    this.taskService.create(task).subscribe((task) => (this.tasks.push(task)));
  }


}

function subscribe(arg0: (tasks: any) => void) {
  throw new Error('Function not implemented.');
}

