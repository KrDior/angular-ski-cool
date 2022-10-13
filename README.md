# angular-ski-cool

# What's inside the boilerplate?

- **CoreModule** - only to be imported in Appmodule

  - Auth Guard with basic check
  - Basic Auth service (Refer model in model folder & change accordingly)

    - login
    - refreshtoken
    - storetoken
    - getTokens
    - logout

  - A broadcaster service included which listens to your key:value pair of events anywhere in app. Here is how to use to share data across modules,components

    - ```ts
      constructor(private _broadcatser: BroadcasterService) {}
      ```
    - to broadcast and listen anywhere

      ```ts
      this._broadcatser.broadcast('mykey', 'myvalue');

      // to listen inside any component inject service there and do simply below

      /* use this service with takeUntil from rxJS and local Subject &
       * destroy in OnDestroy to prevent memory leaks
       */

      this._broadcatser.listen('mykey').subscribe({
          next:(data) => console.log(data) // your broadcasted value
        })
      }
      ```

- **FeatureModule** - all lazyloaded pages/modules goes here

  - `before-login` modules
  - `after-login` modules

- **SharedModule** - folder with bunch of SCAM (Single Component Angular Module) modules only to be shared globally and imported in feature modules

  - Can have custom`components, pipes, directives` as SCAM pattern (sample scam component as independent module included: recommended rather than creating big shared module)
  - Custom`Pipes, Directives, Components, Models, Validators` folders to organise
  - index.ts provided for shared.module.ts (to organise imports only for items to include in`shared.module.ts`)

- annotations `@shared`, `@feature`, `@core` added in `tsconfig.json` for easy import

- HTTP Request Interceptor

  - in service.ts use endpoints without baseurl as e.g '/action/endpoint'
  - request cloner
  - header modifier
  - success and error handler
  - refresh token handler

- Tailwind and post-build PurgeCSS Configuration

  - Tailwind configuration with font, theme and other properties (refer`tailwind.config.js`)
  - Note: Tailwind's own purgecss only takes care of tailwind classes, for overall application, post-build purgecss is best

- Angular Material Component & CDK integrated

  - Material theme starter pack included, just change colors,font inside`_mat_*.scss` files

- Superpowerd with `Jest` for unit testing and `Cypress` for e2e testing (instead of karma and protractor). Special Thanks to contribution by [@sjetha](https://github.com/sjetha) for this and eslint integration.
- ESLint integrated as recommended by Angular
- Prettier configured (with resolved conflicts between ESLint) - no VS extension being used by team? run command to check if follows rules/ run prettier on all in one go!
- Global route-loader progressbar on top like github, using [ngx-loading-bar](https://github.com/aitboudad/ngx-loading-bar) package
- Self-XSS warning for use of console on prod build. Inspect & Check console
- Icons and Typography (CDN links - index.html)

  - Angular Material Icons added
  - Default Poppins, OpenSans font integrated

- pollyfills (for safari) '_web-animations-js_' added for animations support inside _@Component_ decorator
- Local source analyzing tools `webpack-bundle-analyzer` and `source-map-explorer`, Local prod-build deploy and test with purgecss
- Pre-commit husky hook, run whatever command you want before git commit. By default prettifying changed/staged files and running lint is enabled, you can comment out run tests too. Refer .husky/pre-commit file for this operations. This helps you maintian same quality across team workspaces.
- Test-coverage report and its workflow (github action). Check index.html in generated coverage folder.

# There is a command for everything you need!

| command                   | What it does?                                                        | Thanks to Plugin                                                                 |
| ------------------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| `npm start`               | Starts the server in dev mode 🤷🏻‍♂️                                     |                                                                                  |
| `npm run lint`            | Runs ESLint on project                                               |                                                                                  |
| `npm run prettier`        | Runs prettier on entire src folder                                   |                                                                                  |
| `npm run prettier:verify` | Runs prettier-check and throws error if fails                        |                                                                                  |
| `npm run prettier:staged` | Runs prettier on only staged (changed) files                         |                                                                                  |
| `npm run final-build`     | Takes prod build and runs PurgeCSS script                            |                                                                                  |
| `npm run prod-test`       | Takes a final-build deployes on local server and give you url to run | [serve](https://www.npmjs.com/package/serve)                                     |
| `npm run purgecss`        | Run PurgeCSS job to reduced style.css size into few kbs              | [purgecss](https://www.npmjs.com/package/purgecss)                               |
| `npm run source`          | Takes a final-build and opens up source-map-explorer view            | [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)         |
| `npm run webpack-analyze` | Takes a final-build and opens up webpack-bundle-analyzer view        | [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) |
| `npm run test`            | Runs all the jests test cases                                        | [@briebug/jest-schematic](https://www.npmjs.com/package/@briebug/jest-schematic) |
| `npm run test:coverage`   | Runs all the jests test cases and generate coverage report           | [@briebug/jest-schematic](https://www.npmjs.com/package/@briebug/jest-schematic) |
| `npm run e2e`             | Opens up Cypress View to run your e2e tests in browser               | [@cypress/schematic](https://www.npmjs.com/package/@cypress/schematic)           |
| `npm run e2e:ci`          | Runs cypress tests in console (used for CI/CD)                       | [@cypress/schematic](https://www.npmjs.com/package/@cypress/schematic)           |
