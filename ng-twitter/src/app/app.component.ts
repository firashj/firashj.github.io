import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-twitter';
  titles = [
    'ng-twitter 1',
    'ng-twitter 2',
    'ng-twitter 3',
    'ng-twitter 4',
    'ng-twitter 5',
  ];
  persons = [
    {
      name: 'rassil',
      age: 90,
    },
    {
      name: 'ali',
      age: 10,
    },
    {
      name: 'salah',
      age: 20,
    },
    {
      name: 'firas',
      age: 80,
    },
  ];

  addUser() {
    const obj =
      {
        name:'hedi',
        age:99,
      }
    this.persons.push(obj)
    console.log('test test');
  }
  removeUser(){
    this.persons.shift()

}
}

