import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { isDevMode } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err))
  .then(() => {
    // Load USWDS script dynamically after bootstrapping
    return loadUSWDSScript();
  })
  .catch(err => console.error('Error loading USWDS script:', err));

  function loadUSWDSScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'assets/uswds/js/uswds.min.js';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      if (isDevMode()) {
        console.log('USWDS script loaded');
      }
      resolve();
    };
    script.onerror = () => {
      if (isDevMode()) {
        console.error('Failed to load USWDS script');
      }
      reject();
    };
    document.head.appendChild(script);
  });
}