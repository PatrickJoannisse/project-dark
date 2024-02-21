import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<any | undefined> {
    return this.usersRepository.findOne({ where: { username: username }});
  }

  async create(user: User): Promise<User> {
    const newUser = this.usersRepository.create(user);
    console.log(newUser)
    return await this.usersRepository.save(newUser);
  }
}
