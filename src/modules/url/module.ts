import { Module } from "@nestjs/common";
import { UrlService } from "./service";

@Module({
  providers: [UrlService],
})
class UrlModule {}

export default UrlModule;

export { UrlModule };
