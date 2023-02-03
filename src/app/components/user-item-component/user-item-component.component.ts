import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-item-component',
  templateUrl: './user-item-component.component.html',
  styleUrls: ['./user-item-component.component.css']
})


export class UserItemComponentComponent implements OnInit {

  faTimes = faTimes;

  @Input() user: User;
  @Output() onToggleEmit: EventEmitter<User> = new EventEmitter()

  constructor(private userServ: UserService, private router: Router){}

  ngOnInit(): void {
  }

  onDelete(user:User)
  {
    //this.onDeleteTask.emit(this.task.id?.toString());

    this.userServ.delete(this.user.id)
    .subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },
      error: (e) => console.error(e)
    });   

  }

  onToggle(user:User)
  {
    this.onToggleEmit.emit(user);
  }

}
