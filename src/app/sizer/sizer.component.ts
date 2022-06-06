import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss'],
})
export class SizerComponent implements OnInit {
  @Input() sizeVar: any;
  @Output() sizeVarChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.sizeVar += delta;
    this.sizeVarChange.emit(this.sizeVar);
  }
}
