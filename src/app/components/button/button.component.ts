import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input('text') text: string;
  @Input('color') color: string;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.btnClick.emit();
    console.log('btn clicked');
  }
}
