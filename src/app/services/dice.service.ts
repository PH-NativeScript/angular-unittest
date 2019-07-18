import { Injectable } from '@angular/core';

@Injectable()
export class DiceService {
  constructor() {
      this.score = 0;
  }

  // tslint:disable-next-line: variable-name
  private _score: number;
  public get score(): number {
    return this._score;
  }
  public set score(v: number) {
    this._score = v;
  }

  public throwDice(): number {
    const result = Math.floor(Math.random() * 6) + 1;

    return result;
  }

  public message(result: number): string {
    switch (result) {
      case 1:
      case 2:
        return `${result} - Not so good`;
        break;
      case 3:
      case 4:
        return `${result} - Well`;
        break;
      case 5:
      case 6:
        return `${result} - Brilliant`;
      default:
        break;
    }
    return;
  }

  public scoreAdd(result: number): void {
    this.score += result;
  }

  public clear() {
      this.score = 0;
  }
}
