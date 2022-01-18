import { Pipe, PipeTransform } from '@angular/core';
import { Tarif } from './tarif';

@Pipe({
  name: 'tarifFiltre'
})
export class TarifFiltrePipe implements PipeTransform {

  transform(value: Tarif[], filtreYazi?:string) {
    if(filtreYazi){
      return value.filter((t:Tarif)=>t.Adi.toLocaleLowerCase().indexOf(filtreYazi.toLocaleLowerCase())!==-1);
    }
    else{
      return value;
    }
    
  }

}
