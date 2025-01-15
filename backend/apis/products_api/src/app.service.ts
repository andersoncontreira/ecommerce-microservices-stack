import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { app: string } {
    return {"app": "products_api:0.1.0"};
  }

  healthCheck(): string {
    return 'Healthy';
  }
}
