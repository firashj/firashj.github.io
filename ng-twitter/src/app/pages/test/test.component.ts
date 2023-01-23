import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tunisia = true;
  algeria = false;
  brazil = false;

  changeCountry() {
    this.tunisia = false;
    this.algeria = true;
    this.brazil = false;
  }
}
