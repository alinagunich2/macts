import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MacsType } from '../../../types/macs.type';
import { SummProductsService } from '../../servises/summ-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // public scrollTo(target:HTMLElement):void{
  //   target.scrollIntoView({behavior:'smooth'})
  // }
  // public formVal={
  //   names:'',
  // }
  public productTitle:string=''

  constructor(public summProductsService:SummProductsService) { }
  @Input()mac:MacsType={} as MacsType;

  @Output() addProductEvent:EventEmitter<string>=new EventEmitter<string>()

  ngOnInit(): void {
  }

  // public scrolOrder(name:string,target:HTMLElement):void{
  //   this.formVal.names = name.toLocaleUpperCase()
  //   this.scrollTo(target)
  // }
  addProductOrder(){
    this.summProductsService.amountProduct++
    this.summProductsService.summPrice+=1.70
    this.addProductEvent.emit(this.mac.name)
  }
}
