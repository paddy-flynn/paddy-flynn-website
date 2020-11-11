import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'array-bar',
  templateUrl: './array-bar.component.html',
  styleUrls: ['./array-bar.component.scss']
})
export class ArrayBarComponent implements OnInit {

  @Input() value: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
