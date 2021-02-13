import { Module } from "@nestjs/common";
import { databaseProviders } from "./provider";

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
class DatabaseModule {}

export default DatabaseModule;

export { DatabaseModule };
