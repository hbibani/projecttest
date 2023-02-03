import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import {AbstractControl, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from 'src/app/services/user.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
  username: string;
  password: string;
  matcher = new ErrorStateMatcher();
  test: any;
  length: number = 0;
  showSign: boolean = false;
  showSign1: boolean = false;


  constructor(private router: Router, private uiService: UiService, private userServ: UserService){

  }

  isErrorState(control: AbstractControl<any, any> | null, form: NgForm | FormGroupDirective | null): boolean {
    throw new Error('Method not implemented.');
  }

  taskFormControl = new FormControl('', [
    Validators.required,
  ]);


  ngOnInit(): void{}

  hasRoute(route: string)
  {
      return this.router.url === route;
  }

  async onSubmit()
  {

    if(this.username.length > 0 && this.password.length > 0)
    {
      this.test = this.userServ.get(this.username);
    }
    var arrayOfValues = await Promise.all([this.test])
    this.length = arrayOfValues[0].length;
    if(this.length == 0 && this.username.length > 0 && this.password.length > 0)
    {
        const data = {
          username: this.username,
          password: this.password
        };

        console.log(data);

        this.userServ.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            //window.location.reload();
          },
          error: (e) => console.error(e)
        });

      this.username = '';
      this.password = '';
      this.showSign = false;
      this.showSign1 = true;
      for(var i = 0; arrayOfValues.length; i++)
      {
        arrayOfValues.pop();
      }
    }
    else if (this.length > 0)
    {
        this.showSign1 = false;
        this.showSign = true;
    }
  }

}
