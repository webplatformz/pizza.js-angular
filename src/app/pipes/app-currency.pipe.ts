import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appCurrency'
})
export class AppCurrencyPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const roundedToFive = Math.round(value * 20) / 20;
    return roundedToFive.toFixed(2) + ' CHF';
  }

}
