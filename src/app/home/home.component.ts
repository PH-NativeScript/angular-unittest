import { Component, OnInit } from '@angular/core';
import { DiceService } from '../services/dice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public result: number;
  public score: number;
  public comment: string;

  constructor(private diceService: DiceService) {}

  ngOnInit() {}

  public addition(a: number, b: number): number {
    const result = a + b;

    return result;
  }

  public onclickThrow() {
    this.result = this.diceService.throwDice();
    this.diceService.scoreAdd(this.result);
    this.comment = this.diceService.message(this.result);
    this.score = this.diceService.score;
  }

  public onclickClear() {
    this.diceService.clear();
    this.score = this.diceService.score;
    this.comment = '';
    this.result = null;
  }
}
