import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(username: string): Promise<any | undefined> {
    return this.userModel.findOne({username}).exec();
  }

  async create(user: User): Promise<User> {
    return this.userModel.create(user);
  }
}
