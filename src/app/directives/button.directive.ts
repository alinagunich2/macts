import { Directive,ElementRef,HostBinding,HostListener,Input,OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: 'appButton'
})
export class ButtonDirective implements OnInit{

  @Input()coollDefaultBgColor:string = 'white'
  @Input()coollMauseBgColor:string = 'orange'

  private _backgroundColor:string=''
  constructor(private el:ElementRef,
    private rend:Renderer2) { }


  private _isOnFo:boolean=false
  @HostBinding('class.isOnFo')
  get GetIsOnFo(){
   return this._isOnFo
  }

  @HostListener('focus')
  onFocus(){
   this._isOnFo=true
   this._backgroundColor=this.coollMauseBgColor 
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
    this._backgroundColor=this.coollDefaultBgColor //rgb(113, 8, 30);
    console.log(this.el)
  }



}
