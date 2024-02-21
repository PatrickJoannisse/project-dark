import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersRepository.findOne({ where: { username: username }});
    if (!user) {
      throw new UnauthorizedException();
    }
    const test = await bcrypt.compare(pass, user.password)
    if (test) {
      const payload = { sub: user.id, username: user.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
    
  }

  async signUp(username:string, password:string) {
    const hash = await bcrypt.hash(password, 10);
    return this.usersRepository.save({username, password:hash});
  }
}