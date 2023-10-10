import { Component, EventEmitter, Output } from '@angular/core';
import { NameService } from '../../services/name.service';

@Component({
  selector: 'app-name-modal',
  templateUrl: './name-modal.component.html',
  styleUrls: ['./name-modal.component.less']
})
export class NameModalComponent {
  name = '';
  @Output() closeModalEvent = new EventEmitter<void>(); // Define an event emitter
  @Output() nameSubmitted = new EventEmitter<string>(); // Define a custom event emitter


  constructor(private nameService: NameService) {}

  submitForm() {
    const userName = this.name;
    this.nameService.updateUserName(userName);
    this.nameSubmitted.emit(userName);
    this.closeModalEvent.emit();
  }

  closeModal() {
    // Emit the event to notify the parent component to close the modal
    this.closeModalEvent.emit();
  }

}
