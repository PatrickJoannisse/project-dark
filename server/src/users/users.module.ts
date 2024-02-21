import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [UsersModule, MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema
  }]),],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
