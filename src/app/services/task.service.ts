import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Task}  from '../models/Task'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const baseUrl = 'http://34.116.116.26:5432/api/tasks';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient) { }

   getAll(id: any){
    return this.http.get<Task[]>(`${baseUrl}/${id}`);
    // const response = fetch(`${baseUrl}/${id}`);
    // //const posts =  response.json();
    
    // var xxxxyyyy = (await response).json();
    // console.log((await response).json());
    // return response;
  }

  get(id: any): Observable<Task> {
    return this.http.get<Task>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Task[]> {
    return this.http.get<Task[]>(`${baseUrl}?title=${title}`); 
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${baseUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }




  // //Delimiter
  // getTasks(): Observable<Task[]>{
  //   return this.http.get<Task[]>(this.apiURL);
  // }

  // deleteTask(task: Task): Observable<Task> {
  //   const url = `${this.apiURL}/${task.id}`;
  //   return this.http.delete<Task>(url);
  // }

  // updateTaskReminder(task: Task): Observable<Task> {
  //   const url = `${this.apiURL}/${task.id}`;
  //   return this.http.put<Task>(url, task, httpOptions)
  // }

  // addTask(task: Task): Observable<Task> {
  //   return this.http.post<Task>(this.apiURL, task, httpOptions);
  // }


}
