import { Injectable } from '@nestjs/common';
import { CreateCommanderDto } from './dto/create-commander.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Commander } from './entities/commander.entity';
import { Repository } from 'typeorm';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class CommandersService {
  constructor(
    @InjectRepository(Commander)
    private commanderRepository: Repository<Commander>,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    createCommanderDto: CreateCommanderDto,
  ): Promise<{ access_token: string }> {
    // check if callsign is taken
    const isTaken = await this.commanderRepository.findOne({ where: {callsign:createCommanderDto.callsign }});
    if (isTaken) {
      // throw a 403
      throw new HttpErrorByCode[403]('This callsign is already taken');
    } else {
      // create commander
      const commander = this.commanderRepository.create(createCommanderDto);
      await this.commanderRepository.save(commander);
      // return access token
      const payload = { callsign: createCommanderDto.callsign };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }

  async findOne(callsign: string): Promise<Commander> {
    return this.commanderRepository.findOne({ where: {callsign} });
  }

  // update(id: number, updateCommanderDto: UpdateCommanderDto) {
  //   return `This action updates a #${id} commander`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} commander`;
  // }
}
