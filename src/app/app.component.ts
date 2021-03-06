import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 1';
  companyName = 'Gateway Group';
  isSpace = 'true;'
  dob = new Date(2020,5,2);
  isUnchanged = true;
  imageUrl = '../assets/b1.png'
}
