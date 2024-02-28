import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { CommandersService } from './commanders.service';
import { CreateCommanderDto } from './dto/create-commander.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller({
  path: 'commanders',
  version: '1'
})
export class CommandersController {
  constructor(private readonly commandersService: CommandersService) {}
  
  @Get('me')
  async findMe(@Req() req) {
    const commander = await this.commandersService.findOne(req.user.callsign);
    return commander;
  }
}
