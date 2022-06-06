import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  @Input() childMessage: any; //Receive Message from Parent
  hookMessage: string = 'This message is sent using viewchild lifecycle hook'; //Send Message ViewChild Hook

  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(`Message Sent from Child Component on Button Click`); //Send message via evenemitter
  }
}

/*
There are four ways of communicating within Angular
  1)Binding using (@Input, @Output)
  2)Refrence(@ViewChild & @ContentChild)
  3)Provider(Service)
  4)Template Outlet

ViewChild allows you to inject the child component into the parent, giving the parent access to its properties and methods.
this requires initialization of the AfterViewInit lifecycle hook to receive the data from the child.
*/
