import { Directive,HostBinding,HostListener,OnInit} from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements OnInit{
  private _backgroundColor:string=''
  constructor() { }


@HostBinding('style.backgroundColor')
get GetBgColor(){
  return this._backgroundColor
}

@HostListener('focus')
onFocus(){
  this._backgroundColor='blue' 
}

  ngOnInit(): void {
    this._backgroundColor='red' //rgb(113, 8, 30);
  }

}
