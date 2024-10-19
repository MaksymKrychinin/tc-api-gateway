// api-gateway.service.ts
import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";

@Injectable()
export class ApiGatewayService {
    constructor(private readonly httpService: HttpService) {
    }

    async forwardRequest(url: string, method: string, data?: any) {
        const response = await this.httpService.request({
            url,
            method,
            data,
        }).toPromise();
        return response.data;
    }
}