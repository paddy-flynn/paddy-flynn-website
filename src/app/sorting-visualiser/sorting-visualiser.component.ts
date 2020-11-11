import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sorting-visualiser',
  templateUrl: './sorting-visualiser.component.html',
  styleUrls: ['./sorting-visualiser.component.scss']
})
export class SortingVisualiserComponent implements OnInit {

  array: number[] = [];
  public innerWidth: any;

  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.resetArray();
  }

  resetArray(): void {
    for (let i = 0; i < this.getAvailableArraySize(); i++) {
      this.array.push(this.getRandomNumber());
    }
  }

  getRandomNumber(): number {
    const min = 5;
    const max = 730;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getAvailableArraySize(): number {
    const remainingScreenPercentAfterViewPortPadding = .8;
    const barWidthPlusMargin = 5 + 1 + 1;
    const arraySize = (this.innerWidth * remainingScreenPercentAfterViewPortPadding) / barWidthPlusMargin;
    console.log('Array size: ' + arraySize);
    return arraySize;
  }
}
