import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Cake } from './cake';
import { CAKES } from './cake-details';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor() { }

  getCakes(): Observable<Cake[]> {
    const cakes = of(CAKES);
    return cakes;
  }
}
