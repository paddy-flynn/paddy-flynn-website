import {Component, OnInit} from '@angular/core';
import {BubbleSortService} from '../algorithms/bubble-sort.service';
import {Animation} from '../interfaces/animation';

@Component({
  selector: 'sorting-visualiser',
  templateUrl: './sorting-visualiser.component.html',
  styleUrls: ['./sorting-visualiser.component.scss']
})
export class SortingVisualiserComponent implements OnInit {

  ANIMATION_SPEED_MS = 1;
  array: number[] = [];
  public innerWidth: any;
  public innerHeight: any;

  constructor(private bubbleSortService: BubbleSortService) {
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
      const element = document.getElementById('' + i);
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
    const animations = this.bubbleSortService.sort(this.array);
    this.runAnimations(animations);
  }

  async runAnimations(animations: Animation[]): Promise<void> {

    for (const ani of animations) {
      const barOneStyle = document.getElementById('' + ani.barOneId).style;

      if (ani.isInCorrectPosition) {
        barOneStyle.background = 'green';
        barOneStyle.height = ani.barOneHeight + 'px';
      } else {
        const barTwoStyle = document.getElementById('' + ani.barTwoId).style;

        barOneStyle.background = 'red';
        barTwoStyle.background = 'red';
        barOneStyle.height = ani.barOneHeight + 'px';
        barTwoStyle.height = ani.barTwoHeight + 'px';

        await this.delay(this.ANIMATION_SPEED_MS);
        barOneStyle.background = '#1862c6';
        barTwoStyle.background = '#1862c6';

      }
    }
  }

  delay(ms): Promise<any> {
    return new Promise(resolve => {
      // clearTimeout(ms);
      setTimeout(resolve, ms);
    });
  }
}
