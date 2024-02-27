# Angular MFE Feature

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Creating the project:

- `ng new ng-mfe-feature --package-manager yarn --ssr false --style scss`

## Add Angular Material:

- `cd ng-mfe-feature`
- `ng add @angular/material@latest`

- Update `index.html` so that it includes also the font for Material Symbols:

```html
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet">
```

## Add Native Federation

- Install the package: `yarn add @angular-architects/native-federation@latest -D`
- Make the application a remote: `ng g @angular-architects/native-federation:init --port 5201 --type remote`
- start the application to verify: `yarn start`
  - The app will be served on the specified port `5201`
