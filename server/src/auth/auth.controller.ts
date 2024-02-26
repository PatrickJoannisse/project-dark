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
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Public()
  @Post('register')
  async signUp(@Body() signUpDto: Record<string, any>) {
    // validation here
    return this.authService.signUp(signUpDto.email, signUpDto.password);
  }

  @Get('me')
  async getProfile(@Request() req) {
    const user = await this.userService.findOne(req.user.email);
    return {
      id: user.id,
      email: user.email,
    }
  }
}