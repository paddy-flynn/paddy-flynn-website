import {Injectable} from '@angular/core';
import {Animation} from '../interfaces/animation';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService {

  constructor() {
  }

  sort(arr: number[]): Animation[] {
    const array = [...arr];
    const animations: Animation[] = [];
    /*
     Looping through length of the array.
     arr.length minus 1 because the array will be sorted already
     when we get down to the last element.
     */
    for (let i = 0; i < array.length - 1; i++) {
      /*
        Loop through list of values in array.
        array.length - i - 1 because the elements at the end of the
        array will be in there sorted position.
       */
      for (let j = 0; j < array.length - i - 1; j++) {
        const ani = {
          barOneId: j,
          barTwoId: j + 1,
          barOneHeight: array[j],
          barTwoHeight: array[j + 1],
          isInCorrectPosition: false
        };
        /*
          Compare current element against next element.
          If current element is greater than next element, swap their
          position in array.
         */
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          ani.barOneHeight = array[j];
          ani.barTwoHeight = array[j + 1];
        }
        animations.push(ani);
      }

      const correctPosAni = {
        barOneId: array.length - i - 1,
        barOneHeight: array[array.length - i - 1],
        isInCorrectPosition: true
      };
      animations.push(correctPosAni);
    }

    const correctPosAni1 = {
      barOneId: 0,
      barOneHeight: array[0],
      isInCorrectPosition: true
    };
    animations.push(correctPosAni1);
    return animations;
  }
}
