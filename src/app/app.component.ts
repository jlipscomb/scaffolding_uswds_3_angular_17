import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { accordion, banner, button, characterCount, comboBox, datePicker, dateRangePicker, fileInput, footer, inPageNavigation, inputMask, languageSelector, modal, navigation, password, range, search, skipnav, table, timePicker, tooltip, validator } from '@uswds/uswds';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'uswds-angular';

  constructor() {
  }

  ngOnInit() {
    // initialize
    accordion.on();
    banner.on();
    button.on();
    characterCount.on();
    comboBox.on();
    datePicker.on();
    dateRangePicker.on();
    fileInput.on();
    footer.on();
    inPageNavigation.on();
    inputMask.on();
    languageSelector.on();
    modal.on();
    navigation.on();
    password.on();
    range.on();
    search.on();
    skipnav.on();
    table.on();
    timePicker.on();
    tooltip.on();
    validator.on();
  }

  // remove event listeners when the component un-mounts.
  ngOnDestroy() {
    accordion.off();
    banner.off();
    button.off();
    characterCount.off();
    comboBox.off();
    datePicker.off();
    dateRangePicker.off();
    fileInput.off();
    footer.off();
    inPageNavigation.off();
    inputMask.off();
    languageSelector.off();
    modal.off();
    navigation.off();
    password.off();
    range.off();
    search.off();
    skipnav.off();
    table.off();
    timePicker.off();
    tooltip.off();
    validator.off();
  }
}
