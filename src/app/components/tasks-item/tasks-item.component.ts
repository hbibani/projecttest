import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})


export class TasksItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  faTimes = faTimes;
  constructor(private TaskServ: TaskService, private router: Router){}
  ngOnInit(): void{}

  onDelete(task:Task)
  {
    this.onDeleteTask.emit(task);
  }


  onToggle(task:Task)
  {
    this.onToggleReminder.emit(task);
  }
}
