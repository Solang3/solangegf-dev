import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  isPageVisible = false;

  constructor(private router: Router) {
    // Subscribe to router events to control the visibility
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Navigation has started, trigger fade-out animation
        this.isPageVisible = false;
      } else if (event instanceof NavigationEnd) {
        // Navigation has ended, trigger fade-in animation
        this.isPageVisible = true;
      }
    });
  }
}
