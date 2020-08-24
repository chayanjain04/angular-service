import { Component, OnInit } from "@angular/core";
import { TestService } from "../../test.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {

  public emp=[];
  public empAgain=[];


  constructor(private _testService: TestService) {}

  ngOnInit() {
    this.emp=this._testService.getEmps();
    
    this._testService.getEmpAgain()
        .subscribe(data => this.empAgain=data);

  }
}

