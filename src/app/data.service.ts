import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Data } from './data.model';

@Injectable({providedIn: 'root'})

export class DataService{
  inputData:Data[] = [];

  constructor(private http: HttpClient){}

  saveData(image: string, title: string, description: string){
    const postData = {image: image, title: title, description: description};
    this.http.post<{name: string}>('https://name-card-63605-default-rtdb.firebaseio.com/data.json', postData)
    .subscribe(response => {
      console.log(response);
    })
  }

  fetchData(){
    return this.http.get<{[key: string]: Data}>('https://name-card-63605-default-rtdb.firebaseio.com/data.json')
    .pipe(map(response => {
      const postsArray: Data[] = [];
      for (const key in response){
        if(response.hasOwnProperty(key)){
          postsArray.push({...response[key], id:key});
        }
      }
      return postsArray;
    }));
  }

  deleteData(){
    return this.http.delete<Data>('https://name-card-63605-default-rtdb.firebaseio.com/data.json');
  }
}