import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  firstName = 'FIRAS';
  title = 'this is angular pipe page';
  student = {
    FullName: 'Firas Hadj',
    Adress: 'beni khalled',
  };
  myDate = new Date();

  public userList: any = [];

  constructor(private userService: UserService) {}

  getUser() {
    this.userService.getUserFromlaceholder().subscribe((result) => {
      this.userList = result;
    });
  }

  ngOnInit(): void {
    this.getUser();
  }
}
