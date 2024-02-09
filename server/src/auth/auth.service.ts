import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
  { username: 'user1', password: 'password' },
  { username: 'user2', password: 'password' },
];

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService) {}

  validateUser(authPayload:AuthPayloadDto) {
    const { username, password } = authPayload;
    
    const findUser = fakeUsers.find(user => user.username === username && user.password === password);
    return findUser ? this.jwtService.sign({ username: findUser.username }) : null;
  }
}
