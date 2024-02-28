import { Module } from '@nestjs/common';
import { CommandersService } from './commanders.service';
import { CommandersController } from './commanders.controller';
import { Commander } from './entities/commander.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Commander]),
  ],
  controllers: [CommandersController],
  providers: [CommandersService],
})
export class CommandersModule {}
