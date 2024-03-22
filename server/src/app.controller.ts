import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Public()
  @Get()
  getHello(): Object {
    const message = this.appService.getHello();
    return {
      message
    }
  }
}
