import { Component  } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('routeAnimations', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class AppComponent {
  title = 'solangegf-dev';
  author = 'Solang3';
  routeData: any;

  constructor(private router: Router) {
    // Subscribe to router events to control animations
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Navigation has ended; you can now apply animations or other logic
        this.routeData = this.router.routerState.snapshot.root.firstChild?.data;
        if (this.routeData) {
          // Access route data here and apply animations as needed
          const animation = this.routeData.animation || 'defaultAnimation';
          // You can use the 'animation' value to determine which animation to apply
          console.log('Route Animation:', animation);
        }
      }
    });
  }

  getAnimationState() {
    return this.routeData?.animation || 'defaultAnimation';
  }
}
