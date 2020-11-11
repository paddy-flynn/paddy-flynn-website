import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sorting-visualiser',
  templateUrl: './sorting-visualiser.component.html',
  styleUrls: ['./sorting-visualiser.component.scss']
})
export class SortingVisualiserComponent implements OnInit {

  array: number[] = [];
  public innerWidth: any;
  public innerHeight: any;

  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.resetArray();
  }

  resetArray(): void {
    for (let i = 0; i < this.getAvailableArraySize(); i++) {
      this.array.push(this.getRandomNumber());
    }
  }

  getRandomNumber(): number {
    const min = 5;
    const max = innerHeight * .92;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getAvailableArraySize(): number {
    const remainingScreenPercentAfterViewPortPadding = .8;
    const barWidthPlusMargin = 5 + 1 + 1;
    return (this.innerWidth * remainingScreenPercentAfterViewPortPadding) / barWidthPlusMargin;
  }
}
