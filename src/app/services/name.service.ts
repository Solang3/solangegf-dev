import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  private userName: string | null = null;

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string | null {
    return this.userName;
  }

  updateUserName(name: string) {
    this.userName = name;
  }
}
