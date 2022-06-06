import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';
// declare var require: any;

@Pipe({
  name: 'ordinalDate',
})
export class OrdinalDatePipe implements PipeTransform {
  weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  transform(value: Date): string {
    if (!value) {
      return '';
    }
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${this.weekday[value.getDay()]} ${value.getDate()}${this.nth(
      value.getDate()
    )} ${months[value.getMonth()]} ${value.getFullYear()}`;
  }
  nth(d: any) {
    var raise = require('superscript-text');
    if (d > 3 && d < 21) return raise('th');
    switch (d % 10) {
      case 1:
        return raise('st');
      case 2:
        return raise('nd');
      case 3:
        return raise('rd');
      default:
        return raise('th');
    }
  }
}

/*
Angular Provides Default Pipes
 1)Date Pipe
 2)UpperCase Pipe
 3)Currency Pipe
 4)Percent Pipe
 */
