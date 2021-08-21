# React Starter Project

Sample React Webpack project with some industry standard tools setup

## Run Locally

Git clone this repository `git clone https://github.com/thomasmendez/react-template-simple-site.git`

Run `npm install`

Run the project in a development environment `npm run start`

### Build

To build the project for a production environment run `npm run build`

## Tools Used

### NPM Package Registry

[Node Package Manager](https://www.npmjs.com/) for Node Javascript platform

Manages node_modules used for node based projects and manages dependency and conflicts

### Webpack

[Webpack](https://webpack.js.org/) is a JavaScript module bundler 

It can transform front-end assets (HTML, CSS, JavaScript, and images) along with it's modules and dependencies to generate static assets

### Babel

[Babel](https://babeljs.io/) is a JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run in older JavaScript engines

### Jest

[Jest](https://jestjs.io/) is a JavaScript test framework

### React Testing Library

The [React Testing Library](https://testing-library.com/) is used to test React components

### Husky

[Husky](https://typicode.github.io/husky/#/) allows you to run scripts for the git lifecyle

This project is configured to check for lint rules in `.eslintrc` prior to each commit to keep code quality consistent in the repository

***Note: Huksy has the following known [issue](https://stackoverflow.com/questions/50048717/lint-staged-not-running-on-precommit) and this is a temporary known solution***

### Huksy Known Issue

After running `npm install` it is recommended to re-install husky again to allow pre-commit hooks
```
npm uninstall husky
npm install -D husky@4
```
This seems to be a known [issue](https://stackoverflow.com/questions/50048717/lint-staged-not-running-on-precommit) as of 8/20/2021

### VSCode Editor + ESLint

Recommended to use ESLint Plugin to see ESLint errors in editor

To apply ESLint format rules on file save, modify `settings.json`

1. Hit `F1` on your keyboard
2. Type `Open User Settings` to manage preferences
3. Search for `Code Actions On Save`
4. Make sure `Format On Save` is checked
4. Open the `settings.json` for `Code Actions on Save`
5. Add the following code to its settings
    ```
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
    ```

You should now be able to apply your ESLint rules on file save in VSCode

### favicon.ico

Create a favicon.ico for free at [favicon.ico](https://favicon.io/) for your starter project!
