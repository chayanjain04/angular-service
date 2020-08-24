import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { TestService } from '../test.service';
import { Test2Service } from './test2.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule],
  declarations: [ AppComponent,ListComponent,DetailComponent],
  bootstrap:    [ AppComponent ],
  providers: [TestService, Test2Service]
})
export class AppModule { }
