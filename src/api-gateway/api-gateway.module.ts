// api-gateway.module.ts
import { Module } from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {ApiGatewayService} from "./services/api-gateway.service";
import {ApiGatewayController} from "./controllers/api-gateway.controller";

@Module({
  imports: [HttpModule],
  providers: [ApiGatewayService],
  controllers: [ApiGatewayController],
})
export class ApiGatewayModule {}