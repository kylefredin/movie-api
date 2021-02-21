import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import "reflect-metadata";

import { SERVER_PORT } from "./constants";
import { Bootstrap } from "./bootstrap";

async function start() {
  const app = await NestFactory.create(AppModule);

  const bootstrap = new Bootstrap();

  bootstrap.setup(app);

  await app.listen(Number(SERVER_PORT));
}

start();
