import { createConnection } from "typeorm";

import {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} from "../constants";

const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: async () =>
      createConnection({
        type: "mysql",
        host: DATABASE_HOST,
        port: Number(DATABASE_PORT),
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME,
        entities: [__dirname + "/../entity/*.js"],
        synchronize: true,
      }).then((connection) => connection),
  },
];

export default databaseProviders;

export { databaseProviders };
