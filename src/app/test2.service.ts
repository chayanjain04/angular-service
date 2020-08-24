import { Injectable } from '@angular/core';

@Injectable()
export class Test2Service {

  constructor() { }

  getNames(){
   return [
     {"a":'A'},
     {'a':'B'},
     {'a':"C"}
     ];
  }

}