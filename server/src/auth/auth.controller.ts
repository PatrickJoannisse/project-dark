import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { sign } from 'crypto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Public()
  @Post('register')
  async signUp(@Body() signUpDto: Record<string, any>) {
    // validation here
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }

  @Public()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}