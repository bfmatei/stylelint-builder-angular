# stylelint builder for Angular  
Run [stylelint](https://stylelint.io/) from Angular CLI.

Please note that this builder runs stylelint using the CLI engine. It's still pretty experimental.

## Install
1. Install stylelint: `npm install stylelint --save-dev`
2. Install the builder: `npm install @bmatei/stylelint-builder-angular --save-dev`
3. Add the builder to `angular.json`:
```
"stylelint": {
  "builder": "@bmatei/stylelint-builder-angular:lint"
}
```
4. Run stylelint: `ng run <project>:stylelint`

## Available options
Some options correspond to the stylelint config parameters. By default, these do not override any behavior in stylelint. 
1. `cache`
    - [Reference](https://stylelint.io/user-guide/usage/options#cache)
2. `cacheLocation`
    - [Reference](https://stylelint.io/user-guide/usage/options#cachelocation)
3. `configFile`
    - [Reference](https://stylelint.io/user-guide/usage/options#configfile)
4. `disableDefaultIgnores`
    - [Reference](https://stylelint.io/user-guide/usage/options#disabledefaultignores)
5. `files`
    - Array of glob patterns to be checked.
    - Default: `["src/**/*.@(css|less|pcss|sass|scss)"]` 
6. `force`
    - Ignore any errors and warnings and return a success status.
    - Default: `false`
7. `formatter`
    - [Reference](https://stylelint.io/user-guide/usage/options#formatter)
8. `ignorePath`
    - [Reference](https://stylelint.io/user-guide/usage/options#ignorepath)
9. `maxWarnings`
    - [Reference](https://stylelint.io/user-guide/usage/options#maxwarnings)
10. `reportInvalidScopeDisables`
    - [Reference](https://stylelint.io/user-guide/usage/options#reportInvalidScopeDisables)  
11. `reportNeedlessDisables`
    - [Reference](https://stylelint.io/user-guide/usage/options#reportNeedlessDisables)
12. `silent`
    - Suppress any output from the builder.
    - Default: `false`
