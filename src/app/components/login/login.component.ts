import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import {AbstractControl, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from 'src/app/services/user.service';
import {CookieService} from 'ngx-cookie-service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  username: string;
  password: string;
  matcher = new ErrorStateMatcher();
  test: any;
  showSign2: boolean = false;

  constructor(private router: Router, private uiService: UiService, 
    private userServ: UserService, private cookieService:CookieService){}

  isErrorState(control: AbstractControl<any, any> | null, form: NgForm | FormGroupDirective | null): 
  boolean {
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

  async onSubmit() {

    this.test = this.userServ.get(this.username);
    var arrayOfValues = await Promise.all([this.test])
    var user = arrayOfValues[0];

    console.log(arrayOfValues[0][0].password);
    console.log("Pass: " + this.password + " Pass1: " + arrayOfValues[0][0].password);
    console.log(arrayOfValues[0].length);

    if(arrayOfValues[0].length == 0)
    {
      this.showSign2 = true;
    }
    else if(arrayOfValues[0][0].password != this.password)
    {
      this.showSign2 = true;
    }
    else if(arrayOfValues[0][0].password == this.password)
    {
      if(arrayOfValues[0][0].username == 'admin')
      {
        this.router.navigateByUrl('/admin');
        this.cookieService.set('id',arrayOfValues[0][0].id);
        this.cookieService.set('type','admin');
      }
      else
      {
      
        this.router.navigateByUrl('/task');
        this.cookieService.set('id',arrayOfValues[0][0].id);
        this.cookieService.set('username', arrayOfValues[0][0].username);
        this.cookieService.set('password', arrayOfValues[0][0].password);

        if(arrayOfValues[0][0].translate)
        {
          this.cookieService.set('translate', '1');
        }
        else
        {
          this.cookieService.set('translate', '0');
        }
        this.cookieService.set('type','user');
        this.cookieService.set('user', arrayOfValues[0][0]);
        this.cookieService.set('language', 'english');
      }
    }

  }
}
