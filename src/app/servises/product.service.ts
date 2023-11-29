import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(){
    return [
      {
        name:'Макарун с малиной',
        quantity:'1 шт',
        price:1.70,
        img:'1'
      },
      {
        name:'Макарун с манго',
        quantity:'1 шт',
        price:1.70,
        img:'2'
      },
      {
        name:'Пирог с ванилью',
        quantity:'1 шт',
        price:1.70,
        img:'3'
      },
      {
        name:'Пирог с фисташками',
        quantity:'1 шт',
        price:1.70,
        img:'4'
      }
    ]
  }

}
