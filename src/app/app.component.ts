import { Component } from '@angular/core';

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
  foreColor = 'green';
  dob = new Date(2020,5,2);
  imageUrl = '../assets/b1.png'
}
