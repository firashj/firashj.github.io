import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name="firas";
  location="tunisia";
  status ="activé";
  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.status;
  }
  messages(){
    alert("ahla b zeby");

  }
}
