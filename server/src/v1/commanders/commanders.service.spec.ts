import { Test, TestingModule } from '@nestjs/testing';
import { CommandersService } from './commanders.service';

describe('CommandersService', () => {
  let service: CommandersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandersService],
    }).compile();

    service = module.get<CommandersService>(CommandersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
