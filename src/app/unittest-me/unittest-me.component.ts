import { Component, OnInit } from '@angular/core';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';

@Component({
  selector: 'app-unittest-me',
  templateUrl: './unittest-me.component.html',
  styleUrls: ['./unittest-me.component.css']
})
export class UnittestMeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public addition(a: number, b: number): number {
    const result = a + b;
    return result;
  }
}
