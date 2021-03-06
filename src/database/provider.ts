import { Connections } from "../enums";
import { createConnection, Connection } from "typeorm";

import {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} from "../constants";

const databaseProviders = [
  {
    /**
     * Defines the name of this provider
     *
     * @type {string}
     */
    provide: Connections.database,

    /**
     * Defines the function to run when this provider is requested
     *
     * @return {Promise<Connection>}
     */
    useFactory: async (): Promise<Connection> =>
      createConnection({
        type: "mysql",
        host: DATABASE_HOST,
        port: Number(DATABASE_PORT),
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME,
        entities: [__dirname + "/../entity/*.js"],
        synchronize: true,
      }).then((connection: Connection) => connection),
  },
];

export default databaseProviders;

export { databaseProviders };
