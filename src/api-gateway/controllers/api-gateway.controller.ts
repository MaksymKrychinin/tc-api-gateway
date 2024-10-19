// api-gateway.controller.ts
import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import {ApiGatewayService} from "../services/api-gateway.service";

@Controller('api')
export class ApiGatewayController {
    constructor(private readonly apiGatewayService: ApiGatewayService) {}

    @All('*')
    async handleRequest(@Req() req: Request, @Res() res: Response) {
        const { method, originalUrl, body } = req;
        const url = this.mapUrl(originalUrl);
        const result = await this.apiGatewayService.forwardRequest(url, method, body);
        res.send(result);
    }

    private mapUrl(originalUrl: string): string {
        // Map the incoming URL to the appropriate service URL
        if (originalUrl.startsWith('/api/auth')) {
            return `http://auth-service${originalUrl.replace('/api/auth', '')}`;
        } else if (originalUrl.startsWith('/api/payments')) {
            return `http://payments-service${originalUrl.replace('/api/payments', '')}`;
        }
        // Add more mappings as needed
        return originalUrl;
    }
}