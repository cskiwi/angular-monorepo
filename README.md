# Glenn's starter template

## Features included

A full on starter template for a full stack application. This includes a front end and a back end. The front end is built with Angular and Angular Material. The back end is built with NestJs and TypeORM. The front end and back end are both secured with Auth0.

This template includes a SSR (Server Side Rendering).

## Getting started

### prerequisites
- postgres
- node
- npm

### Installation
1. Click the "Use this template" button on the top right of the repository.
2. Clone the repository to your local machine.
3. Run `npm install` in the root of the project.
4. update the `.env` file with your Auth0 and Postgress credentials.
5. Run `npm run start` to start the project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Known issues
- When running the build it will throw `ERROR RuntimeError: NG04002: Cannot match any routes. URL Segment: '@angular/compiler.mjs.map'` however the build will still work.
- Changing a NestJS service, won't unregister the service from the DI container. see: https://github.com/cyco130/vavite/issues/99
