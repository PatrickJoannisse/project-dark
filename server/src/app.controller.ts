import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { CreateCommanderDto } from './v1/commanders/dto/create-commander.dto';
import { CommandersService } from './v1/commanders/commanders.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly commandersService: CommandersService
  ) {}

  @Public()
  @Get()
  getHello(): Object {
    const message = this.appService.getHello();
    return {
      message
    }
  }

  @Public()
  @Post('/v1/register')
  register(@Body() createCommanderDto: CreateCommanderDto) {
    return this.commandersService.register(createCommanderDto);
  }
}
