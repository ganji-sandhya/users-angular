// app.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.table.component.html',
  styleUrls: ['./user.table.component.css'],
})
export class UserTableComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  parseJson(jsonString: string): any {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Error parsing JSON string:', error);
      return null;
    }
  }

}
