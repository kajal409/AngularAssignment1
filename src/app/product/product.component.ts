import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'Assignment 1';
  companyName = 'Gateway Group';
  isUnchanged = true;
  isSpace = 'true';
  foreColor = 'coral';
  floorNumber = '3rd';
  currentDate = new Date();
  imageUrl = '../assets/b1.png';

  changeText: boolean;
    constructor() {
       this.changeText = false;
    }

  ngOnInit() {
  }

}
