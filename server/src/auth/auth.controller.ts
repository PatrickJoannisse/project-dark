import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService:AuthService){}

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Body() authPayload:AuthPayloadDto){
    const jwt = this.authService.validateUser(authPayload);
    if(jwt){
      return {
        jwt:jwt
      };
    } else {
      throw new HttpException('Invalid credentials', 401);
    }

  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async profile(@Req() req){
    return req.user;
  }
}
