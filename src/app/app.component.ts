import { Component } from '@angular/core';
import { ProductService } from './servises/product.service';
import { SummProductsService } from './servises/summ-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public productService:ProductService,
    public summProductsService:SummProductsService){

  }
  title = 'mac-ng';


public scrollTo(target:HTMLElement):void{
  target.scrollIntoView({behavior:'smooth'})
}
public formVal={
  names:'',
}
public scrolOrder(name:string,target:HTMLElement):void{
  alert(`${name} добавлен в корзину`)
  this.formVal.names = name.toLocaleUpperCase()
  this.scrollTo(target)
}
public isBlock:boolean = true

public inst:string = "https://instagram.com/alina_gunich?igshid=NGVhN2U2NjQ0Yg=="
public tel:string = '375297582477'
}
