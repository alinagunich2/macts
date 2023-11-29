import { Directive,HostBinding,HostListener,OnInit} from '@angular/core';

@Directive({
  selector: ' button[appButton]'
})
export class ButtonDirective implements OnInit{
  private _backgroundColor:string=''
  constructor() { }


  private _isOnFo:boolean=false
  @HostBinding('class.isOnFo')
  get GetIsOnFo(){
   return this._isOnFo
  }

  @HostListener('focus')
  onFocus(){
   this._isOnFo=true
  }

@HostBinding('style.backgroundColor')
get GetBgColor(){
  return this._backgroundColor
}

// @HostListener('blur', ['$event.target'])
// onFocus(btn:any) {
//     console.log('111111111');
//     btn.style.backgroundColor='rgb(113, 8, 30)'
//     this._backgroundColor='rgb(113, 8, 30)'
//   }


  ngOnInit(): void {
    this._backgroundColor='red' //rgb(113, 8, 30);
  }

}
