import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allpro:any[],word:string):any[] {
    return allpro.filter((item)=>item.title.toLowerCase().includes(word.toLowerCase()));
  }

}
