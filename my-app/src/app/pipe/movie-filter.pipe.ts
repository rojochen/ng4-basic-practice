import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const filter = args[0].toLocaleLowerCase();
    return filter ? value.filter(movie => movie.title.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }

}
