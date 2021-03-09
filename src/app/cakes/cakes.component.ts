import { Component, OnInit } from '@angular/core';

import { Cake } from '../cake';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  selectedCake?: Cake;

  cakes: Cake[] = [];

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
    this.getCakes();
  }

  onSelect(cake: Cake): void {
    this.selectedCake = cake;
  }

  getCakes(): void {
    this.cakeService.getCakes()
        .subscribe(cakes => this.cakes = cakes);
  }

}
