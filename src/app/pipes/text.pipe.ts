import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textPipe'
})
export class TextPipe implements PipeTransform {

  transform(value: string): string {
    const res = value.length <= 95? value:`${value.slice(0, 95)}...`
return res
  }

}
