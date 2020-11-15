import {Component, OnInit} from '@angular/core';
import {BubbleSortService} from '../algorithms/bubble-sort.service';
import {Animation} from '../interfaces/animation';
import {Algorithms} from '../enum/algorithms.enum';
import {QuickSortService} from '../algorithms/quick-sort.service';

@Component({
  selector: 'sorting-visualiser',
  templateUrl: './sorting-visualiser.component.html',
  styleUrls: ['./sorting-visualiser.component.scss']
})
export class SortingVisualiserComponent implements OnInit {

  selectedAlgo: Algorithms;
  array: number[] = [];
  public innerWidth: any;
  public innerHeight: any;

  constructor(private bubbleSortService: BubbleSortService,
              private quickSortService: QuickSortService) {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.resetArray();
  }

  resetArray(): void {
    this.array = [];

    for (let i = 0; i < this.getAvailableArraySize(); i++) {
      this.array.push(this.getRandomNumber());
      const element = document.getElementById(i.toString());
      if (element) {
        element.style.background = '#1862c6';
      }
    }
  }

  getRandomNumber(): number {
    const min = 5;
    const max = innerHeight * .9;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getAvailableArraySize(): number {
    const remainingScreenPercentAfterViewPortPadding = .8;
    const barWidthPlusMargin = 5 + 1 + 1;
    return (this.innerWidth * remainingScreenPercentAfterViewPortPadding) / barWidthPlusMargin;
  }

  sort(): void {
    switch (this.selectedAlgo) {
      case Algorithms.BUBBLE_SORT: {
        const animations = this.bubbleSortService.sort(this.array);
        this.bubbleSortService.runAnimation(animations);
        break;
      }
      case Algorithms.QUICK_SORT: {
        console.log(this.array);
        const qArr = this.quickSortService.sort(this.array);
        console.log(qArr);
        this.array.sort((a, b) => a - b);
        console.log('Sorted: ' + (qArr === this.array));
        break;
      }
      default: {
        console.log('Implement: ' + this.selectedAlgo);
        break;
      }
    }
  }


  selectBubbleSort(): void {
    this.selectedAlgo = Algorithms.BUBBLE_SORT;
  }

  selectQuickSort(): void {
    this.selectedAlgo = Algorithms.QUICK_SORT;
  }
}
