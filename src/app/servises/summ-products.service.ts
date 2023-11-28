import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummProductsService {

  summPrice:number = 0
  amountProduct:number = 0

  constructor() { }
}
