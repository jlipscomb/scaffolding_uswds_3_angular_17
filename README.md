# UswdsAngular
This angular v17 project contains the scaffolding for utilizing the USWDS v3.

Typical npm install.

These components are accessible as CommonJS modules. The components are not accessible in the global browser scope but alterations to the main.ts file makes this possible. There is no need to ensure each component created initilizes the uswds as this is done once the the application is bootstrapped. 

When making use of the USWDS components, follow their example start at the import and Angular example section within https://designsystem.digital.gov/documentation/developers/#js-customization. You simply need to ensure you follow their HTML example and their CommonJS modules will perform the heavy lifting of everything else.

The app component for this project is configured for an example of the accordion.

## Angular info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
