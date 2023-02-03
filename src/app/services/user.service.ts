import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
import {User}  from '../models/user.model'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const baseUrl = 'http://34.116.116.26:5432/api/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  async get(id: any): Promise<any>{
    const response = fetch(`${baseUrl}/${id}`);
    const posts = (await response).json();
    return posts;
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

  async findByTitle(title: any) {
    const response = fetch(`${baseUrl}?username=${title}`);
    const posts = (await response).json();
    return posts;
  }

  updateTaskReminder(user: User): Observable<User> {
    const url = `${baseUrl}/${user.id}`;
    return this.http.put<User>(url, user, httpOptions)
  }

}
