import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService {

  constructor() {
  }

  sort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}
