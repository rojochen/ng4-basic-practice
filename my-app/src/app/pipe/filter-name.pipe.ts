import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNumber'
})
export class FilterNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
      return value.filter(list => {
          return args === list;
      });
    }
  }

}
