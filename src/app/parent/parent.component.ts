import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child: any;
  showText = false;

  constructor(private changeDetector: ChangeDetectorRef) {}
  receivedMessage: any; //variable for displaying received message;
  receivedHookMsg: any; //variable for binding message from child via the ViewChild lifecycle hook;

  ngOnInit(): void {}

  // Function for binding the Received Message
  receiveMessage(msg: any) {
    this.receivedMessage = msg;
  }

  ngAfterViewInit(): void {
    this.receivedHookMsg = this.child.hookMessage;
    this.changeDetector.detectChanges(); //ExpressionChangedAfterItHasBeenCheckedError
  }

  toggleText(): void {
    this.showText = !this.showText; //example of a template statement
    // console.log(event);
  }
}

/*
Template Statement  is something that responds to an event raised by an Element, Component, Clicking or Directive
How to update class properties using template statements
*/
