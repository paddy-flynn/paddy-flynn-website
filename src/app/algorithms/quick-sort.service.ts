import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService {

  constructor() {
  }

  sort(arr: number[]): number[] {
    const array = [...arr];
    return array;
  }
}
