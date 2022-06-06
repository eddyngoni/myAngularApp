// import { Component, OnInit, OnDestroy } from '@angular/core';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html', //template: `<button (click)="delete()">Delete</button>` also possible to directly inject html use backticks change templateUrl to template
  styleUrls: ['./hello-world.component.scss'], //styles: [`p { color: red; }`] via the current styleUrls or by direct css injection use backticks change stylesUrl to styles
  //encapsulation: ViewEncapsulation.None, //enables imported styles to be applied globaly within the view regardless of component
})
export class HelloWorldComponent {
  title = 'hello world';

  callPhone(value: any) {
    console.log(value);
  }
}

/* export class HelloWorldComponent implements OnInit, OnDestroy {
  intervalSub: any;
  title = 'hello world';

  constructor() {}

  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('from ngOnInit');
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
} */

/* Life Cycle Hooks
Constructor
ngOnChanges
ngOnInit
ngDoCheck
  ngAfterContentInit
  ngAfterContentChecked
  ngAfterViewInit
  ngAfterViewChecked
ngDestroy


//Styles -there are three ways to apply styles 
  1) By setting styles or styleUrls metadata either as .scss .less .sass .css
  2) Inline in the template HTML
  3) With CSS imports
  4) You can add a styles array in the @Component decorator
  5) By embedding styles in the html using the Styles tag
  6) You can also use link tags  in the HTML template
  7) Can directly import style using the standard import
  8) global styles can also be imported using the angular.json styles property
*/
