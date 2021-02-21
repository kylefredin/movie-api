# Movie API

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Getting Started

Steps to run this project:

1. Run `npm i` command
2. Run `npm run seed:run` to seed the database
3. Run `docker-compose up` command to start the server

## Testing

- `npm run test`
- `npm run test:coverage`

## Building

- `npm run build`

## Linting

- `npm run lint`
- `npm run lint:ts`
- `npm run lint:format`

## API Links

- [API Documentation](http://localhost:3000/api)
- [Countries API](http://localhost:3000/countries)
- [Companies API](http://localhost:3000/companies)
- [Movies API](http://localhost:3000/movies)

## Documentation

- [NestJS](https://docs.nestjs.com/)
- [TypeORM](https://github.com/typeorm/typeorm)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [Docker Compose](https://docs.docker.com/compose/)

## VSCode

To use the VSCode debugger follow these instructions:

1. On the left panel of VS Code, click on the Debug and run panel
2. Click create a launch.json file
3. Choose Node.js
4. Use this configuration:

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "address": "0.0.0.0",
      "localRoot": "${workspaceFolder}",
      "name": "Debug: movie-api",
      "remoteRoot": "/usr/src/app",
      "request": "attach",
      "port": 9229,
      "restart": true,
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node"
    }
  ]
}

```
