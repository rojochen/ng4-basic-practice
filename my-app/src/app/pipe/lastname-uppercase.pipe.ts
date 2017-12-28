import { Pipe, PipeTransform } from '@angular/core';
// pure: false
@Pipe({
  name: 'lastnameUppercase'
})
export class LastnameUppercasePipe implements PipeTransform {
  transform(v, args) {
    // es6 string template
    return `${v.split(' ')[0]} ${v.split(' ')[1].toUpperCase()}`;
  }

}
