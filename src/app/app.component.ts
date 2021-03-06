import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 1';
  companyName = 'Gateway Group';
  isUnchanged = true;
  isSpace = 'true';
  foreColor = 'coral';
  floorNumber = '3rd'
  currentDate = new Date();
  imageUrl = '../assets/b1.png'

  changeText: boolean;
    constructor() {
       this.changeText = false;
    }
}
