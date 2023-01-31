import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.scss'],
})
export class ObservableTestComponent implements OnInit {
  seconde: number = 0;
  constructor() {}

  ngOnInit(): void {
    const counter = interval(1000);
    counter.subscribe((value: number) => {
      this.seconde = value;
      console.log(value);
      
    });
  }
}
