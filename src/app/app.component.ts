import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements AfterViewInit {
  
  title = 'Home';

  @ViewChild(ProductComponent) proCmp!: ProductComponent;

  //@ViewChild('proCmp') prCmp!: ProductComponent;

  ngAfterViewInit(){
    this.proCmp.floorNumber = '4th';
  }

}
