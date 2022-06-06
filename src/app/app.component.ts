import { Component } from '@angular/core';
import { addDays, format, startOfDay, parse } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myAngularApp';
  tmrw: any;
  receivedDate = '2023-04-14';
  imageUrl = '../assets/devops.png';
  isDisabled = true;
  isVisible = false;
  fontSizepx = 16;
  nwDate = new Date();
  dateToFormat = new Date(this.receivedDate);

  constructor() {
    console.log('Monitor this var ...', this.fontSizepx);
  }

  ngOnInit() {
    console.log('display date ...', this.nwDate);

    this.tmrw = addDays(this.nwDate, 1);

    let strt = startOfDay(this.nwDate);
    console.log('Start of Day ....', strt);

    console.log('this is tomorrows date ....', this.tmrw);

    let newday = format(new Date(), 'eeee do MMMM y');
    console.log('**********------- ', newday);

    parse('11.02.87', 'd.MM.yy', new Date()).toString();
  }

  onSave() {
    console.log('clicked on save');
  }

  deleteItem(item: any) {
    console.log(item);
  }
}
