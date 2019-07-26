import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(public http: HttpClient) { }
  load() {
      return  this.http.get('https://opentdb.com/api.php?amount=10&category=18&type=boolean');
      }
      load1() {
        return  this.http.get('https://opentdb.com/api.php?amount=10&category=15&difficulty=hard');
        }
        load2() {
          return  this.http.get('https://opentdb.com/api.php?amount=10&category=28&difficulty=easy');
          }

}
