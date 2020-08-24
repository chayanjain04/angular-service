import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmp } from './app/emp';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {

  private _url: string ="/app/asset/data/emp.json"

  constructor(private http:HttpClient) { }

  getEmps(){
    return[
       
    {"id":1,"name":'a'},
    {"id":2,"name":'b'},
    {"id":3,"name":'c'},
    {"id":4,"name":'d'}
  

    ];
  }

  getChayan(){
    return "Hello Chayan";
  }

  getEmpAgain():Observable<IEmp[]>{
    return this.http.get<IEmp[]>(this._url);
  }

}




