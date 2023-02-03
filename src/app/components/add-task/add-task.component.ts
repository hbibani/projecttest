import { Component, OnInit, Output, EventEmitter, EnvironmentInjector } from '@angular/core';
import {Task} from '../../models/Task';
import {Subscription} from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import {AbstractControl, FormControl, FormGroup ,FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { GoogleTranslateService } from 'src/app/services/google-translate.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})

export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: Date;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;
  submitted = false;


  myFilter = (d: Date): boolean => {
    this.day = d;
    // Prevent Saturday and Sunday from being selected.
    return true;
  }

  taskFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new ErrorStateMatcher();

  constructor(private uiService: UiService, private TaskServ: TaskService, private router: Router, private cookieService:CookieService, 
   private googleTranslationService: GoogleTranslateService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }
  
  isErrorState(control: AbstractControl<any, any> | null, form: NgForm | FormGroupDirective | null): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

    
  }

  
  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day.toLocaleString("en-AU"),
      reminder: this.reminder,
    };

    const data = {
      text: this.text,
      day: this.day.toLocaleString("en-AU"),
      userid: parseInt(this.cookieService.get('id')),
      reminder: this.reminder,
    };

    this.onAddTask.emit(data);

    this.text = '';
    this.day = new Date('');
    this.reminder = false;

  }

}
