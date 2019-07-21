import { Injectable } from '@angular/core';

@Injectable()
export class JasmineSpiesService {
  public addition(a: number, b: number): number {
    const c = this.returnNumberBetweenOneAndTen();

    const result = a + b + c;

    this.logger('Somebody performed a calculation');

    return result;
  }

  public logger(msg: string) {
    console.log(msg);
  }

  public returnNumberBetweenOneAndTen() {
    return Math.floor(Math.random() * 10) + 1;
  }
}
