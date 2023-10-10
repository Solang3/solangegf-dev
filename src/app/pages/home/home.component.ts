import { Component, OnInit } from '@angular/core';
import { NameService } from '../../services/name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  userName: string | null = null;
  showModal = true;

  constructor(private nameService: NameService) {}

  ngOnInit(): void {
    // Check if userName is already defined
    this.userName = this.nameService.getUserName();

    // If userName is not defined, open the modal
    this.showModal = !this.userName;
  }

  updateUserName(name: string) {
    this.nameService.setUserName(name);
    this.userName = name;
    this.showModal = false; // Close the modal after setting the userName
  }

  closeModal() {
    this.showModal = false; // Close the modal when called
    console.log('Modal closed');
  }

}
