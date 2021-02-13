import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import { SERVER_PORT } from "./constants";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(Number(SERVER_PORT));
}

bootstrap();
