import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { Test2Service } from '../test2.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public emp=[];
  public letter=[];
  public chayan: string; 

  constructor(private _testService:  TestService, private _test2Service: Test2Service) { }

  ngOnInit() {
    
    this.emp=this._testService.getEmps();
    this.letter=this._test2Service.getNames();
    this.chayan=this._testService.getChayan();
  }

}