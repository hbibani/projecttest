import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from '@angular/router'
import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';
import { MatButtonModule } from 
    '@angular/material/button';
import { MatButtonToggleModule } from 
    '@angular/material/button-toggle';
import { MatDatepickerModule } from 
    '@angular/material/datepicker';
import { MatInputModule } from 
    '@angular/material/input';
import { MatFormFieldModule } from 
    '@angular/material/form-field';
import { MatNativeDateModule } from 
    '@angular/material/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { UserItemComponentComponent } from './components/user-item-component/user-item-component.component';
import { AdminusageComponent } from './components/adminusage/adminusage.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'task', component: TasksComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminpageComponent},
  {path: 'adminusage', component: AdminusageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    FooterComponent,
    ContainerComponent,
    LoginComponent,
    SignupComponent,
    AdminpageComponent,
    UserItemComponentComponent,
    AdminusageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
