import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>
  ) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const createdLocation = this.locationRepository.create(createLocationDto);
    return this.locationRepository.save(createdLocation);
  }

  async findAll(): Promise<Location[]> {
    return this.locationRepository.createQueryBuilder('location').leftJoinAndSelect('location.locationType', 'locationType').getMany();
  }

  findOne(id: number) {
    return this.locationRepository.createQueryBuilder('location')
    .leftJoinAndSelect('location.locationType', 'locationType')
    .where('location.id = :id', { id })
    .getOne();
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
