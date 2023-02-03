import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {
  apiKey: string = 'AIzaSyBAzjckTY4KUroGfs8QVF3GMCyq-YvNJxA';
  url: string = 'https://translation.googleapis.com/language/translate/v2?key='+this.apiKey;


  constructor(private http:HttpClient) { }

  translate(model:any){
    return this.http.post(this.url,model);
  }

}
function reject(arg0: string): any {
  throw new Error('Function not implemented.');
}

function resolve(arg0: { // resole the translation 
  key: any; value: any;
}): any {
  throw new Error('Function not implemented.');
}

