import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {

  transform(value: string) {
    if(!value){
      return '';
    }
    return value.split(' ').map(n => n[0]).join('').substring(0,2);
  }
}
