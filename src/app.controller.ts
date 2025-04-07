import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('debug')
  debug(@Body() body: any) {
    this.logger.log(`Received body: ${JSON.stringify(body)}`);
    try {
      return {
        success: true,
        data: body,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      this.logger.error(`Error: ${error.message}`);
      return {
        success: false,
        error: error.message,
      };
    }
  }
}
