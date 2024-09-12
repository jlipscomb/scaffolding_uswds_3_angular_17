import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import accordion from "@uswds/uswds/js/usa-accordion";
import characterCount from "@uswds/uswds/js/usa-accordion";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'uswds-angular';

  constructor() {
  }

  ngOnInit() {
    // initialize
    characterCount.on();
    accordion.on();
  }

  // remove event listeners when the component un-mounts.
  ngOnDestroy() {
    characterCount.off();
    accordion.off();
  }
}
