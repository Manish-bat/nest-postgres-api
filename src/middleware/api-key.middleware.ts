import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  constructor(private configService: ConfigService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.header('X-API-KEY');
    if (apiKey !== this.configService.get('API_KEY')) {
      throw new UnauthorizedException('Invalid API Key');
    }
    next();
  }
}