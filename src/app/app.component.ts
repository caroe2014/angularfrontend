import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my angularfrontend';
  users;
  constructor( 
    private appService: AppService 
    ) {}; 
    
    ngOnInit() { 
    this.users = this.appService.getUsers(); 
    } 
}
