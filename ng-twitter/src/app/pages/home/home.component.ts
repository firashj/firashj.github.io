import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  Datalist = [
    { name: 'msakni', age: 20, country: 'tunisia' },
    { name: 'ronaldo', age: 30, country: 'portugal' },
    { name: 'messi', age: 40, country: 'argentine' },
    { name: 'soon-min', age: 50, country: 'korea' },
  ];

  name = 'firas';
  location = 'tunisia';
  status = 'activé';

  nation="brazil";
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getStatus() {
    return this.status;
  }
  messages() {
    alert('ahla b zeby');
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
